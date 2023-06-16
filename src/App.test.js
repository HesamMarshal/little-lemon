import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import userEvent from '@testing-library/user-event';
import Header from "./components/Header";

import BookingForm from "./components/Booking/BookingForm";
import BookingPage from "./pages/BookingPage";

// Test
test("Check The initializeTimes Function", () => {
  // Not Implemented
  render(<BookingPage />);

  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();

  // const results = initializeTimes();
  // expect(results).toHaveLength(0);
});

// test("Renders the BookingForm heading", () => {
//   render(<BookingForm />);
//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();
// });

// test("Check The updateTimes Function", () => {
//   // Not Implemented
//   render(<BookingForm />);

//   expect(headingElement).toBeInTheDocument();
// });

// test("Renders the Header heading", () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const headingElement = screen.getByText("Reserve Table");
//   expect(headingElement).toBeInTheDocument();

//   const reserveButton = screen.getByRole("button");
//   fireEvent.click(reserveButton);

//   const headingElementNew = screen.getByText("Choose Date");
//   expect(headingElementNew).toBeInTheDocument();
// });

// test("Initialize/Update Times", () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
//   const reserveButton = screen.getByRole("button");
//   fireEvent.click(reserveButton);

//   const testTime = [];
//   // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
//   // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
// });
