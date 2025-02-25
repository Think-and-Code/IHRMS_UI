import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../../src/components/Header";
import { describe, it, expect } from "vitest";
import React from "react";

describe("Header Component", () => {
  it("renders the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();
  });

  it("updates search input value when typed", () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText("Search...") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Test Query" } });
    expect(searchInput.value).toBe("Test Query");
  });

  it("renders the Time and Date components", () => {
    render(<Header />);
    expect(screen.getByText(/am|pm/i)).toBeInTheDocument(); 
    expect(screen.getByText(/\d{4}/)).toBeInTheDocument(); 
  });

});
