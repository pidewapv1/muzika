import React from 'react';

import './Spinner.css';

export const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__bounce--1" />
      <div className="spinner__bounce--2" />
    </div>
  );
};
