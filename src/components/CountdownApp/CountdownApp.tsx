import React, {useState} from 'react';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import CountdownForm from '../CountdownForm/CountdownForm';
import SpeedOptions from '../SpeedOptions/SpeedOptions';
import DeploymentSchedule from '../DeploymentSchedule/DeploymentSchedule';
import CountdownMessage from '../CountdownMessage/CountdownMessage'
import './CountdownApp.scss';

const CountdownApp = () => {

  return (
    <div data-testid="countdown-app" className='countdown-app'>
      <CountdownForm/>

      <CountdownMessage />
      <CountdownTimer/>
      <SpeedOptions />
      
      <DeploymentSchedule />
    </div>
  )
}

export default CountdownApp
