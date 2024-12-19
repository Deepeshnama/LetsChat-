import express from "express"
import db from "./database/db.js"
import userRouter from "./routes/user.routes.js"
import "dotenv/config"
import cors from "cors"

const app = express()

// for connecting backend and frontend

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET , POST , PUT , DELETE , PATCH , HEAD",
    credentials : true
}

app.use(cors(corsOptions))

app.use(express.json())

app.use("/user" , userRouter)

app.listen(7800, () => {
    db()
    console.log(`Server is running on http://localhost:7800`)
})