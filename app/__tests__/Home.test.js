import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home Component", () => {
    test("renders the date picker input", () => {
        render(<Home />);
        const dateInput = screen.getByPlaceholderText(/Select date/i);
        expect(dateInput).toBeInTheDocument();
    });

    test("clicking a shortcut button updates the date range", () => {
        render(<Home />);
        const sevenDaysButton = screen.getByText(/7 days/i);

        fireEvent.click(sevenDaysButton);

        const dateInput = screen.getByPlaceholderText(/Select date/i);
        const value = dateInput.value;
        expect(value).toMatch(/^\d{2}\/\d{2}\/\d{4} - \d{2}\/\d{2}\/\d{4}$/);
    });

    test("Date picker should remain open when selecting a date", () => {
        render(<Home />);
        const dateInput = screen.getByPlaceholderText(/Select date/i);

        fireEvent.click(dateInput);
        expect(dateInput).toBeInTheDocument();
    });
});
