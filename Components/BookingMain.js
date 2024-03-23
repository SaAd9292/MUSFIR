import React, { useState } from "react";
import style from "../styles/bookingMain.module.css";
import { useRouter } from "next/router";
const BookingMain = () => {
  const [destination, setDestination] = useState("");
  const [arrival, setArrival] = useState("");
  const [departureTDate, setDepartureDate] = useState("");
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const formSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/buses?destination=${destination}&arrival=${arrival}&departureDate=${departureTDate}`
    );
  };
  return (
    <section id="booking" className={style.booking_section}>
      <div className={style.container}>
        <h1>Book a bus ticket</h1>
        <div>
          <form onSubmit={formSubmit}>
            <select
              name="departure"
              id="departure"
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value=" ">Select Departure</option>
              <option value="Peshawar ">Peshawar</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Quetta">Quetta</option>
            </select>
            <select
              required="required"
              name="arrival"
              onChange={(e) => setArrival(e.target.value)}
            >
              <option value="">Select Arrival</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Quetta">Quetta</option>
            </select>
            <input
              required="required"
              type="date"
              name="departure_date"
              onChange={(e) => setDepartureDate(e.target.value)}
              id={style.departure_date}
              min={today}
            />
            <button className="book_btn" type="submit">
              Book seat
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingMain;
