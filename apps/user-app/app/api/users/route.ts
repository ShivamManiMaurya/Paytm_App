import { PrismaClient } from "@repo/db/client";
// import { PrismaClient } from "./../../../../../node_modules/@repo/db/generated/prisma/index.d";
// import {PrismaClient}
import { NextResponse } from "next/server";

const client = new PrismaClient();
export const GET = async () => {
  try {
    await client.user.create({
      data: {
        email: "abc@gmail.com",
        name: "some name",
      },
    });

    return NextResponse.json({
      message: "hi there",
    });
  } catch (err) {
    console.log("err = ", err);
  }
};
