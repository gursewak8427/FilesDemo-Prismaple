import { useState } from "react";
import axios from "axios"


// redux -- global state
const App = () => {
  const [movieTitle, setMovieTitle] = useState("") // local - state
  const [movieDuration, setMovieDuration] = useState(0)
  const [poster, setMoviePoster] = useState(null)


  const createMovie = async () => {

    const payload = new FormData();
    payload.append("poster", poster)
    payload.append("movieTitle", movieTitle)
    payload.append("duration", movieDuration)

    // form-data
    const response = await axios.post("http://localhost:8000/movies/create", payload)

    console.log(response.data)
  }

  return (<>
    <div>
      <input
        type="text"
        name="movieTitle"
        placeholder="Enter Movie Title"
        onChange={(e) => {
          setMovieTitle(e.target.value)
        }}
      />

      <br />

      <input
        type="text"
        name="duration"
        placeholder="Enter Movie Duration"
        onChange={(e) => {
          setMovieDuration(e.target.value)
        }}
      />

      <br />

      <input
        type="file"
        name="poster"
        onChange={(e) => {
          setMoviePoster(e.target.files[0])
        }}
      />

      <br />
      <button onClick={createMovie}>Create Movie</button>
    </div>
  </>)
}

export default App;