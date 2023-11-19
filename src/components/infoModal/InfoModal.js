import React from 'react';

import './InfoModal.css';

export const InfoModal = ({ player }) => {
  return (
    <div className='infoModalContainer'>
      <img src={player.imageUrl} className='headshot' alt='headshot' />
      <div className='infoBoardContainer'>
        <p className='nameHeader'>{player.playerName}</p>
        <div className='divider'></div>
        <div className='individualInfoContainer'>
          <p className='infoHeader'>Birthdate: </p>
          <p className='infoText'>{player.birthDate.split(' ')[0]}</p>
        </div>
        <div className='individualInfoContainer'>
          <p className='infoHeader'>Years Pro-Service: </p>
          <p className='infoText'>{player.yearsProService}</p>
        </div>
        <div className='individualInfoContainer'>
          <p className='infoHeader'>Height: </p>
          <p className='infoText'>{player.height}</p>
        </div>
        <div className='individualInfoContainer'>
          <p className='infoHeader'>Weight: </p>
          <p className='infoText'>{`${player.weight} lbs`}</p>
        </div>
      </div>
    </div>
  );
};
