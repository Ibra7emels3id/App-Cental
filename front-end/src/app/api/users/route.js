import { connectDB } from "@/app/db/connectMongoDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await connectDB();
        const users = await User.find({});
        return NextResponse.json(
            { success: true, data: {
                users: users.map((user) => ({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    isAdmin: user.isAdmin,
                    isActive: user.isActive,
                    date: user.date,
                    role: user.role,
                    permissions: user.permissions,
                    profilePicture: user.profilePicture,
                    bio: user.bio,
                    location: user.location,
                }))
            } },
            { status: 200 }
        );
    } catch (error) {
        console.error("Database Fetch Error:", error);

        return NextResponse.json(
            { success: false, message: error.message || "An error occurred while fetching data." },
            { status: 500 }
        );
    }
}
