import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='not-found'>
      404 Not Found
      <Link to='/'>Home</Link>
    </div>
  );
}

export default NotFound;
