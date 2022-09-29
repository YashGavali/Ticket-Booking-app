import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStore } from '../store/seatStore';

const Checkout = () => {
  const defaultData = [
    {
      id: 1,
      name: 'A1',
      price: 300,
      isSelected: false,
    },
    {
      id: 2,
      name: 'A2',
      price: 300,
      isSelected: false,
    },
    {
      id: 3,
      name: 'A3',
      price: 300,
      isSelected: false,
    },
    {
      id: 4,
      name: 'B1',
      price: 700,
      isSelected: false,
    },
    {
      id: 5,
      name: 'B2',
      price: 700,
      isSelected: false,
    },
    {
      id: 6,
      name: 'B3',
      price: 700,
      isSelected: false,
    },
    {
      id: 7,
      name: 'C1',
      price: 700,
      isSelected: false,
    },
    {
      id: 8,
      name: 'C2',
      price: 700,
      isSelected: false,
    },
    {
      id: 9,
      name: 'C3',
      price: 700,
      isSelected: false,
    },
  ];
  const seatData = useStore((state) => state.seatData);
  const timer = useStore((state) => state.timer);
  const setTimer = useStore((state) => state.setTimer);
  const seatStatusUpdated = useStore((state) => state.seatStatusUpdated);
  const [filter, setFilter] = useState([]);
  const [summarizedData, setSummarizedData] = useState('list is empty');

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer(timer); //setTimer((prev)=>prev-1)
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (timer.time === 0) {
      seatStatusUpdated(defaultData);
      //   resetSeatData(seatData);
    }
  }, [timer]);

  useEffect(() => {
    let filteredSeats = seatData.filter((ele) => ele.isSelected == true);
    setFilter(filteredSeats);
  }, [seatData]);

  const setFilterData = () => {
    console.log(filter);
    const summarizedData = filter.map((ele, index) => {
      return <div key={ele.id}>{`${ele.name} : ${ele.price}`}</div>;
    });
    return summarizedData;
  };
  return (
    <div>
      {filter.length != 0 ? setFilterData() : 'empty'}

      <div>{timer.time}</div>
    </div>
  );
};

export default Checkout;
