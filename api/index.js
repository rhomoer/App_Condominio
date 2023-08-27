import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
app.use(cors({ origin: [
    "http://localhost:3000",
    "https://localhost:8800",
    "http://localhost:3000", 
    "https://localhost:8800",
"splendor.engetera.com.br:8800",
 "https://splendor.engetera.com.br:8800",
"http://localhost:3000", 
"http://splendor.engetera.com.br:8800"] }));


app.use("/", userRoutes)

app.listen(8800)