import express from "express"
import db from "./database/db.js"
import userRouter from "./routes/user.routes.js"
import "dotenv/config"
import cors from "cors"
import http from "http"
import { Server } from "socket.io"

const app = express()

const httpServer = http.createServer(app)

const io = new Server(httpServer)


// io.on("connection", (socket) => {
    
// })



// for connecting backend and frontend

const corsOptions = {
    origin: "http://localhost:5173" ,
    credentials : true
}

app.use(cors(corsOptions))
app.use(cors())

app.use(express.json())

app.use("/user" , userRouter)

httpServer.listen(7800, () => {
    db()
    console.log(`Server is running on http://localhost:7800`)
})