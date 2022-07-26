import React, {useState, useContext, useEffect} from 'react'
import './CountdownMessage.scss';
import { AppContext } from '../../Context';


const CountdownMessage = () => {
  const [message, setMessage] = useState('');
  const {timer, countDownIsRunning, seconds} = useContext(AppContext);

 useEffect(() => {

  if(!countDownIsRunning){
    return;
  }

  if(timer <= 0){
    setMessage(`Time's Up!`);
  }else if(timer <= (seconds / 2)){
    setMessage('More than halfway there!');
  }else{
    setMessage('');
  }
 
 },[timer,seconds, countDownIsRunning]);

  return message ? (
    <div id="countdown-message" data-testid="countdown-message" className='countdown-message__container'>
      <span className='countdown-message__message-text'>{message}</span>
    </div>
  ) : null
}

export default CountdownMessage;
