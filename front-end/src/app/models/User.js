import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: new Date().toDateString()
    }
})
const User = mongoose?.models?.User || mongoose.model('User', UserSchema);
export default User;
