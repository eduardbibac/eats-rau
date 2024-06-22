import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { redirect } from "@/navigation";
import { isRoleOrHigher } from "@/lib/role";
import { validateRequest } from "@/actions/auth/validateRequest";
import { random } from "lodash";
import { generateIdFromEntropySize } from "lucia";

export const POST = async (req: NextRequest) => {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
    return;
  }
  if (!isRoleOrHigher("manager", user!.arole)) {
    redirect("/");
    return;
  }

  const formData = await req.formData();

  const file: any = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileExtension = file.type.split("/")[1];
  const filename = `${generateIdFromEntropySize(10)}.${fileExtension}`;
  try {
    const imagePath = "/images/uploaded/" + filename;
    const systemPath = `${process.cwd()}/public${imagePath}`;
    await writeFile(systemPath, buffer);
    return NextResponse.json({
      Message: "Success",
      status: 201,
      image_link: imagePath,
    });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};
