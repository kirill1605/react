import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Form } from "./form";

describe("Form", () => {
  test("отображение формы с полями ввода", () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText("Введите ваше имя");
    const ageInput = screen.getByPlaceholderText("Введите ваш возраст");
    const emailInput = screen.getByPlaceholderText("Введите вашу почту");
    const phoneInput = screen.getByPlaceholderText("Введите номер вашего телефона");
    const submitButton = screen.getByRole("button", { name: "Сохранить" });

    expect(nameInput).toBeTruthy();
    expect(ageInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(phoneInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });
});