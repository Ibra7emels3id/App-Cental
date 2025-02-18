import { NextResponse } from "next/server";
import User from "../../models/User";
import { connectDB } from "@/app/db/connectMongoDB";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        // Connect MongoDB
        await connectDB();
        const { name, email, password } = await req.json();

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // Hash The Password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        // Save The Data User
        await newUser.save();

        return NextResponse.json(
            { message: "Cerate User success" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "in Not found error" }, { status: 500 });
    }
}