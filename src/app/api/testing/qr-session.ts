// import sql from "@/lib/db";

// export async function GET(request: Request): Promise<Response> {

//     // generate code
//     // store code in db with expires_at: in 5m
//     // on post match the code with the session sent (auth_session)
//      // so it's auth_session exists then we can validate this code with a new session for the user coresponding the the auth_session
//     // on screen session
//     // gets scanned
//     // we have the code on new device
//     // send code with session to the user with the code on desktop

//     // invalidate an open api, if there is a session matching invalidate it no questions asked

//     // session 15m that triggers a 5s popup: Are you still there? 
//     // do you want to extend session ? Extend session | No (logout)

//     return new Response({"code":"100"}, {
//         status: 200,
//         headers: {
//             Location: "/"
//         }
//     });
// }

// /* POST
// if !qr || !validSession return;

// */