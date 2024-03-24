import React from 'react';

const Button = (props) => {
  const label = props.label;
  const handleClick = props.handleClick;
  return (
    <div>
      <button className='home-btn' type='button' onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
