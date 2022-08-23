import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const url =
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year";
    const response = await fetch(url);
    const json = await response.json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading
        ? "Loading..."
        : movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <div>{movie.title}</div>
              <div>{movie.summary}</div>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
    </div>
  );
}

export default App;
