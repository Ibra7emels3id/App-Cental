import { connectDB } from "@/app/db/connectMongoDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function DELETE(req , {params}) {
    try {
        await connectDB()
        const user = await User.findByIdAndDelete(params.id)
        return NextResponse.json({ status: 200, message: 'User deleted successfully.' , user })
    } catch (error) {
        return NextResponse.json({ status: 500, message: 'Server error.' })
    }
}