import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import CountdownTimer from './CountdownTimer';
import { AppProvider } from '../../Context';

test('Should render Countdown Timer component without crashing', () => {
    render(<AppProvider><CountdownTimer/></AppProvider>);
    const element = screen.getByTestId('countdown-timer');
    expect(element).toBeInTheDocument();
}); 
  
/* 
    Yeah... I know there is a better way to test a timer but you got me here, this is the only thing that worked for me... 
    Let me reflect on my mistakes while you wait for the test to finish.
*/
jest.setTimeout(55000);
test('Countdown turns red when there are 20 seconds left and starts blinking when there are 10 seconds left', async () => {
    render(<AppProvider><CountdownTimer/></AppProvider>);
    const button = await screen.findByTestId('countdown-timer-button');
    const timer = await screen.findByTestId('countdown-timer-time');

    userEvent.click(button);
    await new Promise((res) => setTimeout(res, 41000));
 
    expect(timer).toHaveClass('countdown-timer__time--red-text');

    await new Promise((res) => setTimeout(res, 10000));

    expect(timer).toHaveClass('countdown-timer__time--blink');
    
});




