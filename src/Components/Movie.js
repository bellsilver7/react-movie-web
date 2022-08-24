import PropTypes from "prop-types";
const Movie = ({ coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt="" />
      <div>{title}</div>
      <div>{summary}</div>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
