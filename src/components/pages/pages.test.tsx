import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { About } from "./about/about";
import { Products } from "./products/products";
import { Pdf } from "./pdf/index";
import { Home } from "./home/home";

describe("Заголовок", () => {
  test("Рендер заголовка Home", () => {
    const { getByText } = render(<Home />);
    const heading = getByText(/Home/i);
    expect(heading).toBeInTheDocument();
  });

  test("Рендер заголовка About", () => {
    const { getByText } = render(<About />);
    const heading = getByText(/About/i);
    expect(heading).toBeInTheDocument();
  });

  test("Рендер заголовка Products", () => {
    const { getByText } = render(<Products />);
    const heading = getByText(/Products/);
    expect(heading).toBeInTheDocument();
  });

  test("Рендер заголовка Pdf", () => {
    const { getByText } = render(<Pdf />);
    const heading = getByText(/PDF/i);
    expect(heading).toBeInTheDocument();
  });
});
