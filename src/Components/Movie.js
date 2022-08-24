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

export default Movie;
