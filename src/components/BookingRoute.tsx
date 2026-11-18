
import Nav from "./Nav";

import Footer from "./Footer";
import BookingPage from "./BookingPage";

export default function BookingRoute() {
  return (
    <>
      <Nav />
      <BookingPage bookingUrl="https://booking.paxbooking.com/account/86c99d41-95f9-4f90-b325-0a9647998a58" />
      <Footer />
    </>
  );
}