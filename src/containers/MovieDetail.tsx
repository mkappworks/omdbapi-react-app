import React from "react";
import { ColumnDiv } from "../components/ColumnDiv";
import IMovieData from "../types/Movie";

const MovieDetail: React.FC<{
  currentMovie: IMovieData | null;
}> = ({ currentMovie }) => {
  return (
    <>
      {currentMovie && (
        <ColumnDiv>
          <h4>Movie</h4>
          <div>
            <label>
              <strong>Title:</strong>
            </label>{" "}
            {currentMovie.title}
          </div>
          <div>
            <label>
              <strong>Year:</strong>
            </label>{" "}
            {currentMovie.year}
          </div>
          <div>
            <label>
              <strong>Type:</strong>
            </label>{" "}
            {currentMovie.type}
          </div>
        </ColumnDiv>
      )}
    </>
  );
};

export default MovieDetail;
