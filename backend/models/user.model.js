import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["user", "admin"] },
});

const User = model("user", userSchema)

export default User