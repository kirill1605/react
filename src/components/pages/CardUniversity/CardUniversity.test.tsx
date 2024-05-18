import { render } from "@testing-library/react";
import { Index } from "./index";
import { UniversityData } from "../DynamicPagination/types";

describe("CardUniversity component", () => {
  const university: UniversityData = {
    name: "Test University",
    country: "Test Country",
  };

  it("отображение названия и страны универаситета", () => {
    const { getByText } = render(<Index data={university} />);
    expect(getByText(university.name)).toBeInTheDocument();
    expect(getByText(university.country)).toBeInTheDocument();
  });
});
