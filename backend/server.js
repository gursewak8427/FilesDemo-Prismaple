import express from "express"
import cors from "cors"
import movieRouter from "./routes/movie.route.js"

const app = express();

app.use(cors())
app.use(express.json())

app.use('/movies', movieRouter)

app.listen(8000, () => {
    console.log("Server started at port 8000")
})