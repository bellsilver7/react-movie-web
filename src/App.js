import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const url =
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year";
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.data.movies);
  };

  useEffect(() => {
    getMovies();
    setLoading(false);
  }, []);
  return <div>{loading ? "Loading..." : null}</div>;
}

export default App;
