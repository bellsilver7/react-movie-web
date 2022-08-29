import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function separateComma(val) {
  // remove sign if negative
  var sign = 1;
  if (val < 0) {
    sign = -1;
    val = -val;
  }
  // trim the number decimal point if it exists
  let num = val.toString().includes(".")
    ? val.toString().split(".")[0]
    : val.toString();
  let len = num.toString().length;
  let result = "";
  let count = 1;

  for (let i = len - 1; i >= 0; i--) {
    result = num.toString()[i] + result;
    if (count % 3 === 0 && count !== 0 && i !== 0) {
      result = "," + result;
    }
    count++;
  }

  // add number after decimal point
  if (val.toString().includes(".")) {
    result = result + "." + val.toString().split(".")[1];
  }
  // return result with - sign if negative
  return sign < 0 ? "-" + result : result;
}

function Detail() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`;
    const response = await fetch(url);
    const json = await response.json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex">
          <div className="w-full px-4">
            <img src={movie?.large_cover_image} alt="" />
          </div>
          <div className="w-full px-4">
            <h2 className="text-xl">
              <strong>{movie?.title}</strong>
            </h2>
            <hr className="my-4" />
            <div>
              <h3 className="font-bold">Description</h3>
              <div>{movie?.description_full}</div>
            </div>
            <hr className="my-4" />
            <table className="table text-xs">
              <tbody>
                <tr>
                  <td>Downloads</td>
                  <td>{separateComma(movie?.download_count)}</td>
                </tr>
                <tr>
                  <td>Uploaded</td>
                  <td>{movie?.date_uploaded}</td>
                </tr>
                <tr>
                  <td>Runtime</td>
                  <td>{movie?.runtime}</td>
                </tr>
                <tr>
                  <td>Like</td>
                  <td>{movie?.like_count}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>{movie?.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
