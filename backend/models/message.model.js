import mongoose, { Schema, model } from "mongoose";

const messageSchema = new Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const Message = model("msg", messageSchema)

export default Message