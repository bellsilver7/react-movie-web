import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, summary, rating, genres }) => {
  return (
    <>
      <div class="flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            src={coverImg}
            alt={title}
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              <Link to={`/movie/${id}`}>{title}</Link>
            </h5>
            <p class="text-gray-700 text-base mb-4">
              {summary.slice(0, 80)}...
            </p>
            <p class="text-gray-600 text-xs">
              {" "}
              <span class="text-yellow-400">☆</span>
              {rating} | {genres.map((g) => "#" + g).join(" ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
