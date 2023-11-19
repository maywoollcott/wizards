import React from 'react';

import './Sidebar.css';

export const Sidebar = ({ players, activePlayerId, setActivePlayer }) => {
  const onPlayerClickHandler = (player) => {
    setActivePlayer(player);
  };
  return (
    <div className='sidebar'>
      {players.map((player) => {
        return (
          <div
            key={player.personId}
            className={
              activePlayerId === player.personId
                ? 'activeNameContainer'
                : 'nameContainer'
            }
            onClick={() => {
              onPlayerClickHandler(player);
            }}
          >
            <p className='nameText'>{player.playerName}</p>
          </div>
        );
      })}
    </div>
  );
};
