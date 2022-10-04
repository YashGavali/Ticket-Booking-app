import React from 'react';

import { Container, Grid, ButtonGroup, Button } from '@mui/material';
import { useStore } from '../store/seatStore';
const CountDownTimer = () => {
  let timer = useStore((state) => state.timer);

  return (
    <div style={{ padding: '10px', color: 'white' }}>
      {timer.time == 0 && <div>Timer has expired</div>}

      {timer.time !== 0 && (
        <div>
          Your tickets will expire in
          <span>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                size="small"
                color={timer.time < 10 ? 'error' : 'primary'}
              >{`${Math.floor(timer.time / 60).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}`}</Button>
              <Button color={timer.time < 10 ? 'error' : 'primary'}>{`${(
                timer.time % 60
              ).toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}`}</Button>
            </ButtonGroup>
            minutes
          </span>
        </div>
      )}
    </div>
  );
};

export default CountDownTimer;
