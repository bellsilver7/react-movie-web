import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={coverImg}
          alt=""
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-gray-700">
            <Link to={`/movie/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </Link>
          </h3>
          <p className="text-sm mt-1 text-gray-500">
            {summary.slice(0, 100) + "..."}
          </p>
          <ul class="flex">
            {genres.map((g) => (
              <li key={g} className="mr-1">
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
                  {g}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
