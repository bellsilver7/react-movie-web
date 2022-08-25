import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const params = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`
    );
    const json = await response.json();

    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Movie Detail</h1>
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            <img src={movie.large_cover_image} alt="" />
            <h2>{movie.title}</h2>
            <div>
              <span>Downloads {movie.download_count}</span>|
              <span>Uploaded {movie.date_uploaded}</span>|
              <span>Runtime {movie.runtime}</span>|
              <span>Like {movie.like_count}</span>|
              <span>Rating {movie.rating}</span>
            </div>
            <div>
              <h3>Description</h3>
              <div>{movie.description_full}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
