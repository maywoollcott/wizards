import React from 'react';

import './Button.css';

export const Button = ({ onClick, label, isActive }) => {
  return (
    <div
      className={isActive ? 'buttonContainerActive' : 'buttonContainerInactive'}
      onClick={() => onClick()}
    >
      <p className='buttonLabel'>{label}</p>
    </div>
  );
};
