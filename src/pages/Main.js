import React from "react";
import { BrowserRouter as Router, Route, Switch, useNavigate } from "react-router-dom";
import "./App.css";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { submitAPI } from "./api";

function Main() {
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const isSubmitted = await submitAPI(formData);
    if (isSubmitted) {
      navigate("/booking-confirmed");
    } else {
      alert("Booking submission failed. Please try again later.");
    }
  };

  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact>
            <BookingForm onSubmitForm={submitForm} />
          </Route>
          <Route path="/booking-confirmed" exact>
            <ConfirmedBooking />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default Main;