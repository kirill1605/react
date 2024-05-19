/* eslint-disable prettier/prettier */
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from "./index";

describe("Navbar component", () => {
  it("отображение навигации", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
  });

  it("displays the correct links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("PDF")).toBeInTheDocument();
    expect(getByText("Pagination")).toBeInTheDocument();
  });

  it("проверка входа и выхода", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    fireEvent.click(getByText("Войти"));
    expect(getByText("Выйти")).toBeInTheDocument();

    fireEvent.click(getByText("Выйти"));
    expect(getByText("Войти")).toBeInTheDocument();
  });
});