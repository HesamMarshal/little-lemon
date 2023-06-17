// TODO: test for
// 1. Heading in Booking Form
// 2. read and write in localhost
// 3. initializeTimes & updateTimes

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

import BookingForm from "./components/Booking/BookingForm";
import { BrowserRouter } from "react-router-dom";

// Mount and Unmount from DOM
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Test App
it("renders App", () => {
  act(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      container
    );
  });

  // const headingElement = screen.getByText("Little Lemon");
  // expect(headingElement).toBeInTheDocument();
  expect(container.textContent).toBe("Little Lemon");

  // act(() => {
  //   render(<Hello name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});

// it("renders with or without a name", () => {
//   act(() => {
//     render(<BookingForm />, container);
//   });
//   expect(container.textContent).toBe("Hey, stranger");

//   act(() => {
//     render(<Hello name="Jenny" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Jenny!");

//   act(() => {
//     render(<Hello name="Margaret" />, container);
//   });
//   expect(container.textContent).toBe("Hello, Margaret!");
// });

// import { fireEvent, render, screen } from "@testing-library/react";
// import { useEffect, useReducer, useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";

// import { fetchAPI, submitAPI } from "./api/WebApi";

// import { BrowserRouter } from "react-router-dom";
// import userEvent from '@testing-library/user-event';
// import Header from "./components/Header";

// import BookingPage from "./pages/BookingPage";

// Test
// test("Check The initializeTimes Function", () => {
//   // Not Implemented
//   render(<BookingPage />);

//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();

//   const results = initializeTimes();
//   expect(results).toHaveLength(0);
// });

// test("Renders the BookingForm heading", () => {
//   // const navigate = useNavigate();

//   const submitForm = (formData) => {
//     console.log("submited");
//   };

//   useEffect(() => {
//     localStorage.setItem("bookingData", JSON.stringify(bookingData));
//   }, [bookingData]);

//   const initialState = initializeTimes();
//   const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

//   render(
//     <BookingForm
//       availableTimes={availableTimes}
//       dispatch={dispatch}
//       submitForm={submitForm}
//     />
//   );
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
