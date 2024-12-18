import express from "express"
import db from "./database/db.js"
import userRouter from "./routes/user.routes.js"
import "dotenv/config"

const app = express()

app.use(express.json())

app.use("/user" , userRouter)

app.listen(7800, () => {
    db()
    console.log(`Server is running on http://localhost:7800`)
})