import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="errordiv">
        <div>
          <h1>Oops! You seem to be lost</h1>
          <p>Here are some helpful links: </p>
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
