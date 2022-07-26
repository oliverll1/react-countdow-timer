import React, {useEffect, useContext, useRef} from 'react'
import './CountdownTimer.scss'
import playIcon from '../../assets/play-svgrepo-com.svg';
import pauseIcon from '../../assets/pause-svgrepo-com.svg';
import { AppContext } from '../../Context';


const CountdownTimer = () => {
  const {toggleCountdown, timer, setTimer, countDownIsRunning, seconds} = useContext(AppContext);

  const Icon = countDownIsRunning ? <img key="pause-icon" src={pauseIcon} alt="pause-icon"/> : <img key="play-icon" src={playIcon} alt="play-icon"/>;

  const formatedMinutes = (Math.trunc((timer / 60))).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  const formatedSeconds = ((timer) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  const timerTime = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setTimer(seconds);
  },[seconds, setTimer]);

  return (
    <div data-testid='countdown-timer' className='countdown-timer__container'>
      <span data-testid='countdown-timer-time'
        className={
          `countdown-timer__time 
          ${timer <= 10 && timer !== 0 ? 'countdown-timer__time--blink': ''} 
          ${timer <= 20 && timer !== 0 ? 'countdown-timer__time--red-text': ''}`} 
        ref={timerTime}>{formatedMinutes}:{formatedSeconds}
      </span> 
      <button data-testid='countdown-timer-button' className='countdown-timer__button--play' onClick={toggleCountdown}>{Icon}</button>
    </div>
  )
}

export default CountdownTimer
