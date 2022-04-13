import mongoose from "mongoose"
const userSchema = mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },

    },
    {
        timestamps: true
    }

)

// module.exports = mongoose.model("User", userSchema)

const User = mongoose.model("User", userSchema);

export default User;