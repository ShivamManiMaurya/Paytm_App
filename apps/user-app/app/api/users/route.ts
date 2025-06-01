import bcrypt from "bcrypt";
import prisma from "@repo/db/index";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

// export const GET = async () => {
//   try {
//     const existingUser = await prisma.user.findUnique({
//       where: { email: "mno@gmail.com" },
//     });

//     const hashedPassword = await bcrypt.hash("mno", 10);

//     if (!existingUser) {
//       await prisma.user.create({
//         data: {
//           email: "mno@gmail.com",
//           name: "mno name",
//           number: "1234567892",
//           password: hashedPassword,
//         },
//       });
//     }

//     return NextResponse.json({
//       message: "hi there",
//     });
//   } catch (err) {
//     console.log("err = ", err);
//   }
// };

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return NextResponse.json({
      user: session.user,
    });
  }

  return NextResponse.json(
    {
      message: "You are logged out.",
    },
    {
      status: 403,
    }
  );
};
