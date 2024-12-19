import { Schema, model } from "mongoose"

const groupSchema = new Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.type.ObjectId, ref: "User" }]
} , {timestamps : true});

const Group = model("group", groupSchema)

export default Group;