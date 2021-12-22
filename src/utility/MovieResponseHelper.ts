import IMovieData from "../types/Movie";
import IResponseData from "../types/Response";

const MovieResponseHelper = (response: any) => {
  let isResponseData: Boolean = false;
  let totalResultsData: number | null = null;
  let movieData: IMovieData[] | null = null;

  if (response.Response === "True") isResponseData = true;

  if (!isNaN(Number(response.totalResults)))
    totalResultsData = Number(response.totalResults);

  if (Array.isArray(response.Search)) {
    movieData = [...response.Search].map((ele: any) => {
      const movie: IMovieData = {
        title: ele.Title,
        poster: ele.Poster,
        type: ele.Type,
        year: ele.Year,
        imdbID: ele.imdbID,
      };
      return movie;
    });
  }

  const data: IResponseData = {
    isResponse: isResponseData,
    movie: movieData,
    totalResults: totalResultsData,
  };

  return data;
};

export default MovieResponseHelper;
