import express from "express";
import uploadFiles from "../config/files.config.js";

const movieRouter = express.Router();

movieRouter.get("/", (req, res) => {
    res.send("Movie Router Welcome")
})

// poster(file), movieTitle(text), duration(text)
movieRouter.post("/create", uploadFiles.single("poster"), (req, res) => {
    const poster = req.file;
    const movieData = req.body;

    console.log(poster)
    console.log(movieData.movieTitle)
    console.log(movieData.duration)

    return res.send("Movie Create API Done.")
})

export default movieRouter;