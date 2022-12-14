import React from 'react';
import { useEffect } from 'react';
import { useStore } from '../../store/seatStore';
import Singleseat from '../Singleseat';
import { Container, Grid } from '@mui/material';
import { initialTime } from '../defaultData';
import CountDownTimer from '../CountDownTimer';

const TicketBooker = () => {
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
  let timer = useStore((state) => state.timer);
  const setTimer = useStore((state) => state.setTimer);
  const seatStatusUpdated = useStore((state) => state.seatStatusUpdated);
  const setDisplayTimer = useStore((state) => state.setDisplayTimer);
  const resetTimer = useStore((state) => state.resetTimer);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTimer(initialTime); //setTimer((prev)=>prev-1)
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  useEffect(() => {
    if (timer.time === 0) {
      seatStatusUpdated(defaultData);
      //   resetSeatData([...defaultData]);
    }
  }, [timer]);

  const seatClickHandler = (id) => {
    const list = [...seatData];
    const itemIndex = list.findIndex((ele) => ele.id === id);
    list[itemIndex].isSelected = !list[itemIndex].isSelected;
    seatStatusUpdated(list);
    setDisplayTimer();
    resetTimer();
  };

  const ticketStatus = seatData.map((element, index) => {
    return (
      <Grid item lg={4}>
        <Singleseat
          key={element.id}
          element={element}
          seatClickHandler={seatClickHandler}
        />
      </Grid>
    );
  });

  const isTimerDisplayed = false || (timer.time !== 0 && <CountDownTimer />);

  return (
    <div>
      <div style={{ perspective: '800px' }}>
        <div
          style={{
            backgroundColor: 'white',
            width: '500px',
            margin: '0 auto',
            padding: '80px 0',
            transform: 'rotateX(-45deg)',
            boxShadow: '0 3px 10px rgba(255,255,255,0.75)',
          }}
        ></div>
        <div style={{ paddingTop: '80px' }}>
          <Container style={{ width: '300px' }}>
            <Grid container spacing={3}>
              {ticketStatus}
            </Grid>
          </Container>
        </div>
      </div>

      {timer.displayTimer && isTimerDisplayed}
      {/* {timer.time !== 0 && <CountDownTimer />} */}
    </div>
  );
};

export default TicketBooker;
