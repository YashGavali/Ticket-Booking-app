import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Singleseat from './Singleseat';

const TicketBox = () => {
  const defaultData = [
    {
      id: 1,
      name: 'A1',
      price: 400,
      isSelected: false,
    },
    {
      id: 2,
      name: 'A2',
      price: 500,
      isSelected: false,
    },
    {
      id: 3,
      name: 'A3',
      price: 700,
      isSelected: false,
    },
  ];

  const [timer, setTimer] = useState(60);
  const [displayTimer, setDisplayTimer] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(false);
  const [data, setData] = useState(defaultData);
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      console.log('timer running');
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    let selectedSeat = data.filter((ele, index) => {
      return ele.isSelected == true;
    });
    setSelectedSeats(selectedSeat);
  }, [data]);

  useEffect(() => {
    if (timer === 0) {
      setData(defaultData);
    }
  }, [timer]);

  const seatClickHandler = (id) => {
    const list = [...data];
    const itemIndex = list.findIndex((ele) => ele.id === id);
    list[itemIndex].isSelected = !list[itemIndex].isSelected;
    setData(list);
    setTimer(60);
    setDisplayTimer(true);
  };

  const ticketStatus = data.map((element, index) => {
    return (
      <Singleseat
        key={element.id}
        element={element}
        seatClickHandler={seatClickHandler}
      />
    );
  });

  return (
    <div style={{ margin: '0 40%' }}>
      {ticketStatus}

      <div>
        {selectedSeats
          ? selectedSeats.map((ele, index) => {
              return <div key={index}>{`${ele.name} - ${ele.price} `}</div>;
            })
          : 'isEmpty'}
      </div>
      <div>{displayTimer ? `${Math.floor(timer / 60)}:${timer % 60}` : ''}</div>
    </div>
  );
};

export default TicketBox;
