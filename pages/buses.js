import React, { useState } from "react";
import style from "../styles/buses.module.css";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const Buses = () => {
  const [showSeats, setShowSeats] = useState(false);
  const [totalseats, setTotalSeats] = useState(40); // seat  numbers come from here 
  const [selectSeat, setSelectSeat] = useState(null);
  const router = useRouter();
  const params = router.query;
  const rendered = [];
  const array = ["12:00pm", "1:00pm", "2:00pm", "3:00pm"];

  for (let i = 1; i <= totalseats; i++) {
    rendered.push(
      <button
        style={{ backgroundColor: selectSeat === i ? "red" : "" }}
        onClick={() => setSelectSeat(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <Head>
        <title>Express Bus -- Available Buses</title>
        <meta
          name="description"
          content="This is ticket reservation project -- available page"
        />
      </Head>
      <section
        className={`${style.available_seats_section} ${
          showSeats ? "buses_blur__a_F5e" : ""
        }`}
      >
        <h1 className={style.heading}>
          {params.destination} to {params.arrival}
        </h1>
        <h1>Available Buses</h1>
        {array.map((element) => {
          return (
            <>
              <div className={style.available_bus_wrapper}>
                <div>
                  <div>
                    <p>
                      Type: <b>Luxury</b>
                    </p>
                    <p>
                      Total Seats: <b>{totalseats}</b>
                    </p>
                    <p>
                      Date : <b>{params.departureDate}</b>
                    </p>
                    <p>
                      Time: <b>{element}</b>
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className={style.book_btn}
                    type="submit"
                    onClick={() => {
                      setShowSeats(true);
                      const params = new URLSearchParams(
                        window.location.search
                      );
                      params.set("total_seats", totalseats);
                      window.history.replaceState(
                        {},
                        "",
                        decodeURIComponent(
                          `${window.location.pathname}?${params}`
                        )
                      );
                    }}
                  >
                    Book Seat
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>

      <div
        className={`${style.seats_wrapper} ${
          showSeats ? "buses_show__At34N" : ""
        }`}
      >
        <h2>Available seats</h2>

        <div className={style.seatsplan}>{rendered}</div>
        <button id={style.cancel_btn} onClick={() => setShowSeats(false)}>
          <FaTimes />
        </button>
        {selectSeat != null && (
          <Link
            href={`/booking?destination=${params.destination}&arrival=${params.arrival}&departureDate=${params.departureDate}&seat=${selectSeat}`}
            passHref
          >
            <button className={style.seatPlanBtn} type="submit">
              Book Ticket
            </button>
          </Link>
        )}
      </div>
    </>
  );
};

export default Buses;
