import React, { useEffect, useState } from 'react';
import styles from './Seat.module.css';
const Seat = ({ subItems }) => {
  const [isSeatSelected, setIsSeatSelected] = useState(false);
  const [timer, setTimer] = useState(50000);
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      if (timer > 0) setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  useEffect(() => {
    if (timer % 5 == 0) {
      setIsSeatSelected(false);
      console.log('Matched');
    } else {
      setIsSeatSelected(true);
    }
  }, [timer]);

  const seatClickHandler = () => {
    setTimer(5);
    if (timer == 0) {
      clearInterval(intervalId);
    }
  };
  return (
    <div
      className={
        isSeatSelected
          ? styles.seatContainerUnselect
          : styles.seatContainerSelect
      }
      onClick={seatClickHandler}
    >
      {timer}
    </div>
  );
};

export default Seat;
