import { connectDB } from "@/app/db/connectMongoDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    // console.log('=========================' , request);
    
    try {
        const body = await request.json()
        await connectDB();
        const user = await User.findByIdAndUpdate(params.id, body , {new : true});
        return NextResponse.json({ message: 'Updated user successfully', data: user })

    } catch (error) {
        return NextResponse.status(500).json({ message: 'Error updating user', error: error.message })
    }
}