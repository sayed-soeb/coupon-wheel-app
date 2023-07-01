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
        }, 2000);
        if (spinCount ===0 && !spinning){
          setTimeout(() => {
            alert('Try again,Best of luck');
          }, 2150);
        }
      }
      // Second spin - Display result
      else if (spinCount === 1) {
        setTimeout(() => {
          setSpinning(false);
        }, 3000);  
        if (spinCount ===1 && !spinning){
          setTimeout(() => {
            alert('Congratulation,You have win a coupon.');
          }, 3150);
        }
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
