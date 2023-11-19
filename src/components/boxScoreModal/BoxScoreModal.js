import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './BoxScoreModal.css';

export const options = {
  chart: {},
  hAxis: { title: 'DataType' },
  vAxis: { title: 'Date' },
  colors: ['#002A5C'],
  legend: {
    position: 'none',
  },
  axes: {
    x: {
      0: { side: 'bottom', label: '' },
    },
  },
};

export const BoxScoreModal = ({ player, arrayByPlayer }) => {
  //paired tuples pulled from filtered array of players by personId [date, points]

  const [selectedDataArray, setSelectedDataArray] = useState([]);
  const [selectedDataType, setSelectedDataType] = useState('points');
  const [selectedIncrement, setSelectedIncrement] = useState('total');

  useEffect(() => {
    const generateArray = (dataType, total) => {
      const header = [['DataType', 'Points']];
      const totalDataArray = arrayByPlayer.map((game) => {
        if (total) {
          return [game.gameDate.split(' ')[0], game[dataType]];
        } else {
          return [game.gameDate.split(' ')[0], game[`${dataType}Per36MP`]];
        }
      });
      const finalArr = header.concat(totalDataArray);
      setSelectedDataArray(finalArr);
    };

    generateArray(
      selectedDataType,
      selectedIncrement === 'total' ? true : false
    );
  }, [arrayByPlayer, selectedDataType, selectedIncrement]);

  const handleDataTypeSelectionChange = (event) => {
    setSelectedDataType(event.target.value);
  };

  const handleIncrementSelectionChange = (event) => {
    setSelectedIncrement(event.target.value);
  };

  return (
    <div className='boxScoreModalContainer'>
      <div className='selectionContainer'>
        <FormControl size='small'>
          <InputLabel sx={{ fontSize: 12 }} id='demo-simple-select-label'>
            Data Type
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='selectBox'
            value={selectedDataType}
            label='Data Type'
            onChange={handleDataTypeSelectionChange}
            sx={{ fontSize: 12, marginRight: '5px' }}
          >
            <MenuItem sx={{ fontSize: 12 }} value={'points'}>
              Points
            </MenuItem>
            <MenuItem sx={{ fontSize: 12 }} value={'fieldGoalsAttempted'}>
              Field Goals Attempted
            </MenuItem>
            <MenuItem sx={{ fontSize: 12 }} value={'plusMinus'}>
              Plus Minus
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl size='small'>
          <InputLabel id='demo-simple-select-label' sx={{ fontSize: 12 }}>
            Increment
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='selectBox'
            value={selectedIncrement}
            label='Increment'
            onChange={handleIncrementSelectionChange}
            sx={{ fontSize: 12 }}
          >
            <MenuItem sx={{ fontSize: 12 }} value={'total'}>
              Total
            </MenuItem>
            <MenuItem sx={{ fontSize: 12 }} value={'per26MinsPlayed'}>
              Per 26 Mins Played
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <Chart
        chartType='Scatter'
        width='90%'
        height='350px'
        data={selectedDataArray}
        options={options}
        loader={<p>Loading...</p>}
        style={{ display: 'flex', justifyContent: 'center' }}
      />
    </div>
  );
};
