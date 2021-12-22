import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Main from "../containers/Main";

import MovieDataService from "../services/MovieService";

jest.mock("../services/MovieService");

describe("Api Testing", () => {
  test("api should not be called when the page load", () => {
    MovieDataService.findByTitle.mockResolvedValueOnce({});
    render(<Main />);
    expect(MovieDataService.findByTitle).toBeCalledTimes(0);
  });

  test("api should called when searched with value", async () => {
    MovieDataService.findByTitle.mockResolvedValueOnce({});

    const { debug } = render(<Main />);
    const inputField = screen.getByPlaceholderText("Search by title");
    const searchButton = screen.getByText("Search");

    fireEvent.change(inputField, { target: { value: "title" } });

    fireEvent.click(searchButton);

    debug(searchButton);

    await waitFor(() => {
      expect(MovieDataService.findByTitle).toBeCalledTimes(1);
      expect(MovieDataService.findByTitle).toHaveBeenCalledWith("title", 1);
    });
  });
});
