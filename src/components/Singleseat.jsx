import React from 'react';
import { Button } from '@mui/material';
const Singleseat = ({ element, seatClickHandler }) => {
  const { id, name, price, isSelected } = element;
  return (
    <div>
      <Button
        style={{}}
        color={isSelected ? 'success' : 'error'}
        variant="contained"
        onClick={() => {
          seatClickHandler(id);
        }}
      >
        {name}
      </Button>
    </div>

    // <div
    //   style={{
    //     backgroundColor: isSelected ? 'green' : 'maroon',
    //     margin: '5px',
    //     width: '200px',
    //   }}
    //   onClick={() => {
    //     seatClickHandler(id);
    //   }}
    // ></div>
  );
};

export default Singleseat;
