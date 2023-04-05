import Bookingform from "./BookingForm";
import { useState, useReducer } from "react";

const reducer = (prevState, action) => {
  const state = prevState.filter((t) => {
    return t !== action.time;
  });
  return state;
};

const Main = () => {
  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const handleSubmit = (t) => {
    dispatch({ time: t });
  };

  const [state, dispatch] = useReducer(reducer, initialTimes);

  const [time, setTime] = useState("17:00");
  const handleTime = (time) => {
    setTime(time);
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
  return (
    <>
      <Bookingform
        onTimeChange={handleTime}
        time={time}
        initialTimes={state}
        submitHandler={handleSubmit}
      ></Bookingform>
    </>
  );
};

export default Main;
