'use server';

import { lucia } from '@/auth/lucia';
import { validateRequest } from '@/auth/validateRequest';
import sql from '@/lib/db';
import { generateIdFromEntropySize } from 'lucia';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { redirect } from 'next/navigation';
import { json } from 'stream/consumers';

export async function GET(req: NextRequest) : Promise<Response> {
  const searchParams = req.nextUrl.searchParams;
  if (searchParams.toString()) {
    return validateExistingQR(req);
  } else {
    return generateQRString();
  }

  async function generateQRString() : Promise<Response> {
    const qr_string = generateIdFromEntropySize(32);
    try {
      await sql`INSERT INTO QRSession VALUES (${qr_string})`
    } catch (error) {
      console.error(error);
      return new Response(null, { status: 500 });
    }
  
    return new Response(JSON.stringify(qr_string), {
      status: 200
    })
  }

  async function validateExistingQR(req: NextRequest) : Promise<Response> {
    const {user} = await validateRequest();
    if(!user) return new Response(null, {
      // TODO: mobile devie scanned QR but it's not logged in => 'redirect to page: your phone needs to be logged in to   authenticate with QR code'
      status: 400,
    });
    
    // Could cause big problems if we forget to check for null
    const qr_string = searchParams.get('qr_string');
      if(!qr_string) {
        return new Response(null, {
          status: 404,
        }); 
    }

    try{
      await sql`UPDATE QRSession SET is_validated_by_user = ${user.id} WHERE code=${qr_string}`
    } catch (error) {
      console.error(error);
      return new Response(null, { status: 500 });
    }
    
    return new Response(null, {
      status: 200,
      headers: {
        Location: "/"
      }
    });
  }
}

// Poll endpoint, gives a valid session if the req has a QR code that has been validated 
export async function POST(req: Request) : Promise<Response> {
  const data: QRPayload = await req.json();
  console.log(data)

  // Could cause big problems if we forget to check for null
  if(!data.qr_string) {
    return new Response(null, {
      status: 404,
    }); 
  }

  try{
    const [row] = await sql`SELECT is_validated_by_user FROM QRSession WHERE code=${data.qr_string}`
    if(row.is_validated_by_user) {
      const session = await lucia.createSession(row.is_validated_by_user, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
			return new Response(JSON.stringify({'isValid':'true'}), { status: 201 });
    } else {
      return new Response(null, {status: 200})
      // keep polling
    }
  } catch (error) {
    // If qr_string doesn't exist terminate client, trying to hack mee!!!!!!! how?
    console.error(error);
    return new Response(null, { status: 500 });
  }
}