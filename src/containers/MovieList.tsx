import React from "react";

import { List } from "../components/List";
import { ListItem } from "../components/ListItem";

import IMovieData from "../types/Movie";

const MovieList: React.FC<{
  movies: IMovieData[];
  currentIndex: number | null;
  setActiveMovieHandler: (movie: IMovieData, index: number) => void;
}> = ({ movies, currentIndex, setActiveMovieHandler }) => {
  return (
    <List data-testid="movie-list">
      {movies &&
        movies.map((movie, index) => (
          <ListItem
            style={{
              backgroundColor: currentIndex === index ? "#007bff" : "#f5f5f5",
            }}
            onClick={() => setActiveMovieHandler(movie, index)}
            key={index}
          >
            {movie.title}
          </ListItem>
        ))}
    </List>
  );
};

export default MovieList;
