import { Message } from "./../../../../../node_modules/esbuild/lib/main.d";
import bcrypt from "bcrypt";
import db from "@repo/db/index";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
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
      message: "You are logged out bro.",
    },
    {
      status: 403,
    }
  );
};

export const POST = async (req: NextRequest) => {
  try {
    const user = await req.json();
    const { email, number, password } = user;

    if (!email || !number || !password) {
      return NextResponse.json(
        {
          error: "Params missing.",
        },
        { status: 400 }
      );
    }

    const [userEmail, userPhone] = await Promise.all([
      db.user.findUnique({ where: { email } }),
      db.user.findUnique({ where: { number } }),
    ]);

    if (userEmail && userPhone) {
      return NextResponse.json(
        {
          error: "Email and phone number already exist!",
        },
        { status: 409 }
      );
    } else if (userEmail) {
      return NextResponse.json(
        {
          error: "Email already exist!",
        },
        { status: 409 }
      );
    } else if (userPhone) {
      return NextResponse.json(
        {
          error: "Phone number already exist!",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        ...user,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "User added successfully.",
        user: {
          ...newUser,
          id: newUser.id,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
