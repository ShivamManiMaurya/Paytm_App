import { prisma } from "@repo/db/index";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1234567890",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any): Promise<any> {
        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await prisma.user.findUnique({
          where: {
            number: credentials.phone,
          },
        });

        if (!existingUser) return null;

        const isValidPassword = await bcrypt.compare(
          credentials.password,
          existingUser.password
        );

        console.log(
          "existing = ",
          existingUser,
          " isValid = ",
          isValidPassword,
          " creds= ",
          credentials
        );

        if (!isValidPassword) return null;

        return {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
        };
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "Secret",
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
};
