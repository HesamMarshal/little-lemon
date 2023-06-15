import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
// import BookingPage from "./pages/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
