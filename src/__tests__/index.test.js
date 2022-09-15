import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

const MockApp = <App />;
const arrayOfTask = ["task one", "task two", "task three"];
const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Enter a Task/i);
  const btnElement = screen.getByRole("button", { name: /GO/i });
  tasks.map((item) => {
    fireEvent.change(inputElement, { target: { value: item } });
    fireEvent.click(btnElement);
  });
};
describe("add tasks", () => {
  it("should render same task passed into inputfield", () => {
    render(MockApp);
    const inputElement = screen.getByPlaceholderText(/Enter a Task/i);
    const btnElement = screen.getByRole("button", { name: /GO/i });
    fireEvent.change(inputElement, { target: { value: "task one !" } });
    fireEvent.click(btnElement);
    const taskDivElement = screen.getByText("task one !");
    expect(taskDivElement).toBeInTheDocument();
  });

  it("should render multiple tasks without crash", () => {
    render(MockApp);
    addTask(arrayOfTask);
    const items = screen.getAllByTestId("todos-single");
    expect(items).toHaveLength(3);
  });

  it("task should initially be not done", () => {
    render(MockApp);
    addTask(["task one"]);
    const itemDiv = screen.getByTestId("task-active");
    expect(itemDiv).toBeTruthy();
  });

  // it("task should be removed", () => {
  //   render(MockApp);
  //   addTask(["task one"]);

  //   let btn = screen.getByTestId("button-delete");

  //   fireEvent.click(btn);
  //   const itemsDivAfter = screen.getByTestId("todos-single");

  //   expect(itemsDivAfter.length).toBe(0);
  // });
});
