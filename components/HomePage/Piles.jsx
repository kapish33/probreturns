import React from 'react';

const Piles = ({ text, classes, bgcolor, size }) => {
  return (
    <div
      className={`${classes} ${bgcolor} ${size} m-2 text-white px-2 py-1 rounded-lg`}>
      {text}
    </div>
  );
};

export default Piles;
