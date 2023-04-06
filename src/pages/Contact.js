import React, { useState, useEffect } from "react";
import "./TableBooking.css";
import { fetchAPI } from "../pages/api";
import { useNavigate } from "react-router-dom";

function BookingForm({ submitForm }) {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [times, setTimes] = useState([]);

  useEffect(() => {
    initializeTimes();
  }, []);

  const initializeTimes = async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
  
    const dateStr = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  
    const availableTimes = await fetchAPI(dateStr);
    setTimes(availableTimes);
  };

  const handleDateChange = async (event) => {
    const selectedDate = event.target.value;
    const availableTimes = await fetchAPI(selectedDate);
    console.log("Available times:", availableTimes);
    setTimes(availableTimes);
    setDate(selectedDate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { date, time, guests, occasion };
    const isSubmitted = await submitForm(formData);
    if (isSubmitted) {
      navigate("/confirmed-booking");
    } else {
      alert("Booking submission failed. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Table Booking Form</h2>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </label>
      <label>
        Time:
        <select
          value={time}
          onChange={(event) => setTime(event.target.value)}
          required
        >
          <option value="">Select a time</option>
          {times && times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of guests:
        <input
          type="number"
          value={guests}
          onChange={(event) => setGuests(event.target.value)}
          required
        />
      </label>
      <label>
        Occasion:
        <input
          type="text"
          value={occasion}
          onChange={(event) => setOccasion(event.target.value)}
        />
      </label>
      <button type="submit">Submit Reservation</button>
    </form>
  );
}

export default BookingForm;

