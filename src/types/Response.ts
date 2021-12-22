import IMovieData from "./Movie";

export default interface IResponseData {
  isResponse: Boolean;
  movie: IMovieData[] | null;
  totalResults: number | null;
}
