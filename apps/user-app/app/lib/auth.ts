import { prisma } from "@repo/db/index";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

// Define extended session type locally
interface ExtendedSession {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
}

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

        if (!isValidPassword) return null;

        return {
          id: existingUser.id.toString(),
          name: existingUser.name,
          email: existingUser.email,
        };
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "Secret",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }): Promise<ExtendedSession> {
      // Use token.id if available, otherwise fall back to token.sub
      const userId = token.id || token.sub;

      return {
        ...session,
        user: {
          ...session.user,
          id: userId as string,
        },
      };
    },
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/",
  },
};
