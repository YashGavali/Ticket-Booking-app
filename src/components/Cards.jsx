import React from 'react';

const Cards = ({ cardData }) => {
  console.log(cardData);
  return (
    <div
      style={{
        backgroundColor: '#25316D',
        margin: '10px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0px 7px 19px -10px rgba(0,0,0,1',
        borderRadius: '3px',
      }}
    >
      <div>{cardData.name}</div>
      <div
        style={{ color: 'white', fontWeight: '700' }}
      >{`₹${cardData.price}`}</div>
    </div>
  );
};

export default Cards;
