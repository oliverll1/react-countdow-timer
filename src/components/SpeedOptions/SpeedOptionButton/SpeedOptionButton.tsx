import React from 'react';

import './SpeedOptionButton.scss';

type SpeedOptionButtonProps = {
  speedOption:number,
  changeSpeed: Function,
  currentSpeed: number,
}

const SpeedOptionButton = ({speedOption, changeSpeed, currentSpeed} : SpeedOptionButtonProps) => {
 

  const handleClick = () => {
    changeSpeed(speedOption);
  }

  return (
    <button className={`speed-option-button ${speedOption === currentSpeed ? 'active' : ''}`}  onClick={handleClick}>{`${speedOption}X`}</button>
  )
}


export default SpeedOptionButton