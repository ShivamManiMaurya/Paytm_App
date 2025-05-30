import prisma from "@repo/db/index";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: "abc@gmail.com" },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: "abc@gmail.com",
          name: "some name",
        },
      });
    }

    return NextResponse.json({
      message: "hi there",
    });
  } catch (err) {
    console.log("err = ", err);
  }
};
