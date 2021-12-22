import BaseApi from "./Api";

const searchByTitle = (title: string, page: number) => {
  return BaseApi.get<any>(
    `?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${title}&page=${page}`
  );
};

const MovieService = {
  findByTitle: searchByTitle,
};

export default MovieService;
