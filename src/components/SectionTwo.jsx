import React from 'react';

const SectionTwo = (props) => {
  const firstword = props.firstword;
  const secondword = props.secondword;
  const thirdword = props.thirdword;
  const label = props.label;
  const img = props.img;
  return (
    <div className='section-2' id='part-section'>
      <div className='section-two'>
        <h1 className='firstword'>{firstword}</h1>
        <h4 className='secondword'> {secondword} </h4>
        <p className='thirdword'>{thirdword} </p>
        <button className='btn'>{label}</button>
      </div>
      <div>
        <img src={img} alt='woman-eating' />
      </div>
    </div>
  );
};

export default SectionTwo;
