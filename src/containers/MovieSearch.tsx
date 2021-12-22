import React, { ChangeEvent } from "react";
import { Button } from "../components/Button";
import { RownDiv } from "../components/RowDiv";
import { SearchBar } from "../components/SearchBar";

const MovieSearch: React.FC<{
  currentSearchInput: string;
  onChangeSearchTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchByTitleHandler: () => void;
}> = ({ currentSearchInput, onChangeSearchTitle, fetchByTitleHandler }) => {
  return (
    <RownDiv>
      <SearchBar
        type="search"
        placeholder="Search by title"
        value={currentSearchInput}
        onChange={onChangeSearchTitle}
      />
      <Button type="button" onClick={fetchByTitleHandler}>
        Search
      </Button>
    </RownDiv>
  );
};

export default MovieSearch;
