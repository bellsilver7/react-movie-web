import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, rating, genres }) => {
  return (
    <div className="group relative">
      <div className="mt-6 w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={coverImg}
          alt={title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 justify-between">
        <h3 className="text-white">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <p className="text-xs mt-1 text-gray-400">
          ☆{rating} | {genres.map((g) => "#" + g).join(" ")}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
