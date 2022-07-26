/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react'
export const AppContext = createContext<any>('');

export const AppProvider = ({children}: any) => {
    const [timer, setTimer] = useState<number>(60);
    const [currentSpeed, setCurrentSpeed] = useState<number>(1);
    const [intervalId, setIntervalId] = useState<number>(0);
    const [inputTime, setInputTime] = useState<string>('1');
    const seconds = Math.floor((parseInt(inputTime, 10) * 60));

    const [countDownIsRunning, setCountDownIsRunning] =  useState<boolean>(false);

    // Pause the countdown by clearing the interval.
    const pauseCountdown = () => {
        if(intervalId) {
            clearInterval(intervalId);
            setIntervalId(0);
            setCountDownIsRunning(false);
            return;
          }  
    }

    // Starts the countdown interval.
    const startCountdown = () => {
        const newIntervalId = window.setInterval(() =>{
        setTimer((prevTime) => {
            if (prevTime <= 0){
                clearInterval(newIntervalId);
                setCountDownIsRunning(false);
                setInputTime('0');
                return prevTime;
            }
            return prevTime - 1;
        });

    }, 1000 / currentSpeed );

    setIntervalId(newIntervalId);
    setCountDownIsRunning(true);
    }

    // Toogles the countdown interval.
    const toggleCountdown = () => { 
        if(countDownIsRunning){
            pauseCountdown();
            return;
        }

        startCountdown();
    }

    // Modifies the speed of the Interval.
    const changeSpeed = (newSpeed: number) => {
        setCurrentSpeed(newSpeed);
    }

   // When the speed changes restart the interval.
    useEffect(()=>{
        if(!countDownIsRunning){
            return
        }

        pauseCountdown();
        startCountdown();

    },[currentSpeed, countDownIsRunning])

    return (
        <AppContext.Provider
        value={{inputTime,
            setInputTime,
            setCurrentSpeed,
            seconds,
            toggleCountdown,
            currentSpeed,
            changeSpeed, 
            timer,
            setTimer,
            countDownIsRunning,
            setCountDownIsRunning,
         }}>
            {children}
        </AppContext.Provider>
    )
}
