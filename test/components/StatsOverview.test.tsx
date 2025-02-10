import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StatsOverview from "../../src/components/StatsOverview";
import React from "react";

describe("StatsOverview Component", () => {
  it("renders with correct props", () => {
    render(<StatsOverview title="Users" value={150} updatedAt="2 hours ago" />);

    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("150")).toBeInTheDocument();
    expect(screen.getByText("Updated 2 hours ago")).toBeInTheDocument();
  });

  it("applies default background and text colors", () => {
    const { container } = render(
      <StatsOverview title={""} value={""} updatedAt={""} />
    );

    expect(container.firstChild).toHaveClass("bg-violet-100");
  });

  it("applies custom background and text colors", () => {
    const { container } = render(
      <StatsOverview
        title="Orders"
        value={320}
        updatedAt="Yesterday"
        bgColor="bg-violet-200"
        textColor="text-violet-900"
      />
    );

    expect(container.firstChild).toHaveClass("bg-violet-200");
    expect(screen.getByText("Orders")).toHaveClass("text-violet-900");
  });
});
