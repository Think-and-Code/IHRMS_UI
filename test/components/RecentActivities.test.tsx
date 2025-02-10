import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RecentActivities from "../../src/components/RecentActivities";
import React from "react";

describe("RecentActivities Component", () => {
  it("renders without crashing", () => {
    render(<RecentActivities />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
  });

  it("adds a new task", () => {
    render(<RecentActivities />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Test Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("removes a task", () => {
    render(<RecentActivities />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task to remove" } });
    fireEvent.click(addButton);

    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    expect(screen.queryByText("Task to remove")).not.toBeInTheDocument();
  });

  it("toggles task completion", () => {
    render(<RecentActivities />);

    const input = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "Task to complete" } });
    fireEvent.click(addButton);

    const toggleButton = screen.getByText("Mark as Complete");
    fireEvent.click(toggleButton);

    expect(screen.getByText("Undo")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Undo"));
    expect(screen.getByText("Mark as Complete")).toBeInTheDocument();
  });
});
