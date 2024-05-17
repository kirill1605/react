import { HOME_ROUTE, CONTACTS_ROUTE, ABOUT_ROUTE, PRODUCTS_ROUTE, PDF_ROUTE, PAGINATION_ROUTE } from "./configs";

describe("Route Constants", () => {
  it("проверка корректности", () => {
    expect(HOME_ROUTE).toBe("home");
    expect(CONTACTS_ROUTE).toBe("contacts");
    expect(ABOUT_ROUTE).toBe("about");
    expect(PRODUCTS_ROUTE).toBe("products");
    expect(PDF_ROUTE).toBe("pdf");
    expect(PAGINATION_ROUTE).toBe("pagination");
  });
});
