import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
    );
    const json = await response.json();
    const movie = json.data.movie;
    console.log(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Movie Detail</h1>;
};

export default Detail;
