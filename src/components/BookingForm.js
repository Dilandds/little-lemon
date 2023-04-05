import { useState, useEffect } from "react";
import React from "react";

const Bookingform = (props) => {
  const fetchData = async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    );
    //   const data = await response.json();
    console.log(response.text());
  };

  fetchData();

  const [check, setCheck] = useState({
    dateFilled: false,
    countFilled: false,
    occasionFilled: false,
    timeFilled: false,
    disableButton: true,
  });

  const [date, setDate] = useState("");
  const handleDate = (e) => {
    setDate(e.target.value);
    // setCheck({ ...check, dateFilled: true });
    // console.log(check);

    // if (
    //   check.dateFilled &&
    //   check.countFilled &&
    //   check.occasionFilled &&
    //   check.timeFilled
    // ) {
    //   console.log("a");
    //   setCheck({ ...check, disableButton: false });
    // }
  };
  console.log(date);

  const handleTime = (e) => {
    props.onTimeChange(e.target.value);
    // console.log(check);
    // if (
    //   check.dateFilled &&
    //   check.countFilled &&
    //   check.occasionFilled &&
    //   check.timeFilled
    // ) {
    //   console.log("b");
    //   setCheck({ ...check, disableButton: false });
    // }
  };
  const [count, setCount] = useState("1");
  const handleCount = (e) => {
    setCount(e.target.value);
    // setCheck({ ...check, countFilled: true });
    // console.log(check);

    // if (
    //   check.dateFilled &&
    //   check.countFilled &&
    //   check.occasionFilled &&
    //   check.timeFilled
    // ) {
    //   console.log("c");
    //   setCheck({ ...check, disableButton: false });
    // }
  };
  const [occasion, setOccation] = useState("Birthday");
  const handleOccasion = (e) => {
    setOccation(e.target.value);
    // setCheck({ ...check, occasionFilled: true });
    // console.log(check);

    // if (
    //   check.dateFilled &&
    //   check.countFilled &&
    //   check.occasionFilled &&
    //   check.timeFilled
    // ) {
    //   console.log("d");
    //   setCheck({ ...check, disableButton: false });
    // }
  };

  useEffect(() => {
    setCheck({ ...check, timeFilled: true });
  }, [props.time]);
  useEffect(() => {
    setCheck({ ...check, dateFilled: true });
  }, [date]);
  useEffect(() => {
    setCheck({ ...check, occasionFilled: true });
  }, [occasion]);
  useEffect(() => {
    setCheck({ ...check, countFilled: true });
  }, [count]);
  useEffect(() => {
    console.log(check);
    if (
      check.dateFilled &&
      check.countFilled &&
      check.occasionFilled &&
      check.timeFilled
    ) {
      console.log("c");
      setCheck({ ...check, disableButton: false });
    }
  }, [
    check.countFilled,
    check.dateFilled,
    check.occasionFilled,
    check.timeFilled,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitHandler(props.time);
  };

  return (
    <>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={handleDate} />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={handleTime}>
          {/* <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option> */}
          {props.initialTimes.map((t) => {
            return <option key={t}>{t}</option>;
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={handleCount}
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={handleOccasion}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          type="submit"
          disabled={check.disableButton}
          value="Make Your reservation"
        />
      </form>
    </>
  );
};

export default Bookingform;
