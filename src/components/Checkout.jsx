import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStore } from '../store/seatStore';

const Checkout = () => {
  const seatData = useStore((state) => state.seatData);
  const [filter, setFilter] = useState(false);
  useEffect(() => {
    let filteredSeats = seatData.filter((ele) => ele.isSelected == true);
    setFilter(filteredSeats);
  }, [seatData]);

  return (
    <div>
      {filter
        ? filter.map((ele, index) => <div key={ele.id}>{ele.name}</div>)
        : 'not filled'}
    </div>
  );
};

export default Checkout;
