import React, {useState, useContext, useEffect} from 'react'
import { AppContext } from '../../Context';
import './CountdownForm.scss';


const CountdownForm = () => {
  const [buttonText, setButtonText] = useState<'start' | 'stop'>('start');
  const {countDownIsRunning, toggleCountdown, inputTime, setInputTime} = useContext(AppContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(parseInt(inputTime) < 1){
      return;
    }
    
    toggleButtonText();
    toggleCountdown();
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = parseInt(e.currentTarget.value) || 0;
    setInputTime(targetValue);
  }

  const toggleButtonText = () => {
      const newButtontext = countDownIsRunning ? 'stop' : 'start'; 
      setButtonText(newButtontext);
  }

  useEffect( () => {
    toggleButtonText();
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[countDownIsRunning]);

  return (
    <div data-testid="countdown-form" className='countdown-form__container'>
      <form className='countdown-form__form'>

       <label>Countdown:</label>
       <input
        data-testid="countdown-form-input"
        className='countdown-form__input' 
        placeholder='1'
        type="text"
        value={inputTime}
        disabled={countDownIsRunning}
        onChange={handleInputChange}
       />

       <input
        className={`countdown-form__button--${buttonText}`}
        type="submit"
        value={buttonText}
        onClick={handleSubmit}
        disabled={parseInt(inputTime) < 1}
       />
      </form>
    </div>
  )
}

export default CountdownForm;
