import React, { useState } from 'react';
import './CouponWheel.css';
import wheelImage from './wheel.jpg'; // Replace with your image path

const CouponWheel = () => {
  const [spinCount, setSpinCount] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);

      // First spin - "Try again"
      if (spinCount === 0) {
        setTimeout(() => {
          setSpinning(false);
          setSpinCount(1);
          alert('Try again');
        }, 2000);
      }
      // Second spin - Display result
      else if (spinCount === 1) {
        setTimeout(() => {
          setSpinning(false);
          alert('Congratulations! You won a gift card!');
        }, 3000);
      }
    }
  };

  return (
    <div className="coupon-wheel">
      <div className={`wheel ${spinning ? 'spinning' : ''}`}>
        <img src={wheelImage} alt="Wheel" className="wheel-image" />
      </div>
      <button className="spin-button" onClick={spinWheel} disabled={spinning}>
        Spin
      </button>
    </div>
  );
};

export default CouponWheel;
