import React, {useContext} from 'react';
import { AppContext } from '../../Context';
import SpeedOptionButton from './SpeedOptionButton/SpeedOptionButton';
import './SpeedOptions.scss';


const SpeedOptions = () => {
  const speedOptions: number[] = [1, 1.5, 2];
  const {changeSpeed, currentSpeed} = useContext(AppContext);

  return(
    <>
      {speedOptions.map((speedOption) => {
        return <SpeedOptionButton 
        key={speedOption} 
        speedOption={speedOption}
        changeSpeed={changeSpeed}
        currentSpeed={currentSpeed}
        />
      })}
    </>
  )
}

export default SpeedOptions
