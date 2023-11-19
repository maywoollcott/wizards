import React, { useEffect, useState } from 'react';
import { Sidebar } from '../sidebar/Sidebar';

import './Widget.css';
import personsData from '../../data/persons.json';
import boxScoresData from '../../data/boxscores.json';
import { InfoModal } from '../infoModal/InfoModal';
import { BoxScoreModal } from '../boxScoreModal/BoxScoreModal';
import { Button } from '../button/Button';

export const Widget = () => {
  const [activePlayer, setActivePlayer] = useState(personsData[0]);
  const [currentModal, setCurrentModal] = useState('infoModal');
  const [activePlayerBoxScore, setActivePlayerBoxScore] = useState(null);

  const setActivePlayerHandler = (player) => {
    setActivePlayer(player);
    const arrayByPlayer = boxScoresData.filter(
      (arrayPlayer) => player.personId === arrayPlayer.personId
    );
    setActivePlayerBoxScore(arrayByPlayer);
  };

  useEffect(() => {
    const startingBoxScore = boxScoresData.filter(
      (player) => player.personId === personsData[0].personId
    );
    setActivePlayerBoxScore(startingBoxScore);
  }, []);

  return (
    <div className='widget'>
      <Sidebar
        players={personsData}
        activePlayerId={activePlayer.personId}
        setActivePlayer={setActivePlayerHandler}
      />
      <div className='mainPanel'>
        {currentModal === 'infoModal' ? (
          <InfoModal player={activePlayer} />
        ) : (
          <BoxScoreModal
            player={activePlayer}
            arrayByPlayer={activePlayerBoxScore}
          />
        )}
        <div className='buttonContainer'>
          <Button
            label={'Basic Info'}
            onClick={() => setCurrentModal('infoModal')}
            isActive={currentModal === 'infoModal'}
          />

          <Button
            label={'Box Scores'}
            onClick={() => setCurrentModal('boxScoreModal')}
            isActive={currentModal === 'boxScoreModal'}
          />
        </div>
      </div>
    </div>
  );
};
