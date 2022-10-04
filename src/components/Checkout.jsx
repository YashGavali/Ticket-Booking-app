import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStore } from '../store/seatStore';
import Cards from './Cards';
import CountDownTimer from './CountDownTimer';
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
  // const [totalPrice,setTotalPrice] = useData(0)
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer(timer); //setTimer((prev)=>prev-1)
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    if (timer.time === 0) {
      seatStatusUpdated([...defaultData]);
      //   resetSeatData(seatData);
    }
  }, [timer]);

  useEffect(() => {
    let filteredSeats = seatData.filter((ele) => ele.isSelected === true);
    setFilter(filteredSeats);
  }, [seatData]);

  const setFilterData = () => {
    const summarizedData = filter.map((ele, index) => {
      return <Cards key={ele.id} cardData={ele} />;
    });
    return summarizedData;
  };

  let totalPrice =
    0 ||
    filter.reduce((acc, current) => {
      return acc + current.price;
    }, 0);

  return (
    <div
      style={{
        // position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#16213E',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-beetween',
          //   position: 'absolute',
          top: '40px',
          backgroundColor: '#DFF6FF',
          width: '500px',
          minHeight: '100%',
          boxShadow: ' 0px 10px 22px -3px rgba(0,0,0,1)',
          borderRadius: '10px',
        }}
      >
        <h3
          style={{ fontWeight: '700', fontSize: '20px', textAlign: 'center' }}
        >
          Ticket Summary
        </h3>
        {filter.length !== 0 ? (
          setFilterData()
        ) : (
          <div
            style={{
              textAlign: 'center',
              color: 'red',
              // paddingLeft: '20px',
              lineHeight: '50px',
              fontWeight: '700',
              fontSize: '20px',
              margin: '50px',
            }}
          >
            No tickets selected
          </div>
        )}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'white',
            background: '#16213E',
            margin: '10px',
            borderRadius: '5px',
            padding: '15px',
          }}
        >
          <div>total</div>
          <div>{`Rs ${totalPrice}`}</div>
        </div>
      </div>
      {timer.time !== 0 && <CountDownTimer />}
    </div>
  );
};

export default Checkout;
