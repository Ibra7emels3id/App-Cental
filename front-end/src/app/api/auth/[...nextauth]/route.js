import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import { connectDB } from "@/app/db/connectMongoDB";

export const authOptions = {
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                await connectDB();
                const user = await User.findOne({ email: credentials.email });
                if (!user) throw new Error("User not found");
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) throw new Error("Invalid credentials");
                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    date: user.date
                };
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.role = token.role;
            session.user.email = token.email;
            session.user.date = token.date;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.role = user.role;
                token.email = user.email;
                token.date = user.date;
            }
            return token;
        },
    },
    secret: process.env.NEXT_SECRET,
    jwt: {
        secret: process.env.NEXT_SECRET,
        encryption: true,
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
