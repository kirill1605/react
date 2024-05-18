import { UniversityData } from "./types";

describe("interface", () => {
  it("проверка корректности значений", () => {
    const university: UniversityData = {
      country: "China",
      name: "Hunan University",
    };

    expect(university.country).toBe("China");
    expect(university.name).toBe("Hunan University");
  });
});
