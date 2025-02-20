import { connectDB } from "@/app/db/connectMongoDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET(request , {params}) {
    await connectDB();
    console.log(params.id);
    // Simulate a database query
    const user = await User.findById(params.id)
    return NextResponse.json(user);
}
