import React, { useState, ChangeEvent, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

import MovieDataService from "../services/MovieService";
import IMovieData from "../types/Movie";
import IResponseData from "../types/Response";

import Spinner from "react-bootstrap/Spinner";
import MovieResponseHelper from "../utility/MovieResponseHelper";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import MoviePagination from "./MoviePagination";

import { ColumnDiv } from "../components/ColumnDiv";
import { RownDiv } from "../components/RowDiv";
import { HeadingText } from "../components/HeadingText";
import { ErrorText } from "../components/ErrorText";

const Main: React.FC = () => {
  const [movies, setMovies] = useState<IMovieData[]>([]);
  const [currentMovie, setCurrentMovie] = useState<IMovieData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [totalMovies, setTotalMovies] = useState<number | null>(null);

  const [currentSearchInput, setCurrentSearchInput] = useState<string>("");
  const [previousSearchInput, setPreviousSearchInput] = useState<string>("");

  const [apiPage, setApiPage] = useState<number>(1);
  const [paginationPage, setPaginationPage] = useState<number>(0);
  const [isPageChange, setIsPageChange] = useState<Boolean>(false);

  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { width } = useWindowDimensions();

  const itemsPerPage = 10;
  let pageCount = 0;

  if (totalMovies) {
    pageCount = Math.ceil(totalMovies / itemsPerPage);
  }

  const handlePageClick = (event: { selected: number }) => {
    setApiPage(event.selected + 1);
    setPaginationPage(event.selected);
    setIsPageChange(true);
  };

  const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setCurrentSearchInput(e.target.value);

  const setActiveMovieHandler = (movie: IMovieData, index: number) => {
    setCurrentMovie(movie);
    setCurrentIndex(index);
  };

  const fetchByTitleHandler = async () => {
    let response: any;

    try {
      setIsLoading(true);
      setError(null);

      if (currentSearchInput === previousSearchInput && isPageChange)
        response = await MovieDataService.findByTitle(
          currentSearchInput,
          apiPage
        );

      if (currentSearchInput !== previousSearchInput) {
        response = await MovieDataService.findByTitle(currentSearchInput, 1);
        setPreviousSearchInput(currentSearchInput);
        setPaginationPage(0);
        setApiPage(1);
      }

      if (!response) throw Error("Please enter a new title");

      if (response) {
        setMovies([]);
        setTotalMovies(null);
        setCurrentMovie(null);
        setCurrentIndex(-1);

        const data: IResponseData = MovieResponseHelper(response.data);

        if (data.isResponse === true && data.movie && data.totalResults) {
          setMovies(data.movie);
          setTotalMovies(data.totalResults);
        } else {
          throw Error("Incorrect Search Title! Please Try Again");
        }
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setIsPageChange(false);
    }
  };

  useEffect(() => {
    fetchByTitleHandler();
    // eslint-disable-next-line
  }, [apiPage]);

  return (
    <>
      <MovieSearch
        data-testid="movie-search"
        currentSearchInput={currentSearchInput}
        onChangeSearchTitle={onChangeSearchTitle}
        fetchByTitleHandler={fetchByTitleHandler}
      />
      <ColumnDiv>
        <HeadingText>Movies List</HeadingText>
        {error && <ErrorText>{error}</ErrorText>}
        {width < 600 && <MovieDetail currentMovie={currentMovie} />}
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <RownDiv>
            <MovieList
              movies={movies}
              currentIndex={currentIndex}
              setActiveMovieHandler={setActiveMovieHandler}
            />
            {width >= 600 && <MovieDetail currentMovie={currentMovie} />}
          </RownDiv>
        )}
        {pageCount > 1 && (
          <MoviePagination
            pageCount={pageCount}
            paginationPage={paginationPage}
            handlePageClick={handlePageClick}
          />
        )}
      </ColumnDiv>
    </>
  );
};

export default Main;
