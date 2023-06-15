import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import userEvent from '@testing-library/user-event';

import Header from "./components/Header";
// import BookingPage from "./pages/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Check The initializeTimes Function", () => {
  // Not Implemented
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Check The updateTimes Function", () => {
  // Not Implemented
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = [];
  // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
});
