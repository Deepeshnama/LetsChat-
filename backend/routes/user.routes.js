import express from "express";
import { getAllUsers, login, register, searchUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

userRouter.get("/", getAllUsers)
userRouter.get("/:id" , searchUser)

export default userRouter;
