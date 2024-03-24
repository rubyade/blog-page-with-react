import React from 'react';

const SectionFirst = (props) => {
  const img = props.img;
  const topic = props.topic;
  const shorttext = props.shorttext;
  const link = props.link;
  return (
    <div>
      <div className='section-one'>
        <img className='img' src={img} alt='scooter' />
        <h1 className='topic' id='topic-1'>
          {topic}
        </h1>
        <p className='shorttext'> {shorttext} </p>
        <a className='linktext' href='#'>
          {link}{' '}
        </a>
      </div>
    </div>
  );
};

export default SectionFirst;
