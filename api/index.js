import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"
import { errorMiddleware } from "./middlewares/error.js"

const app = express()

app.use(express.json())
app.use(cors())



app.use("/", userRoutes)
app.use(errorMiddleware);

app.listen(8800)