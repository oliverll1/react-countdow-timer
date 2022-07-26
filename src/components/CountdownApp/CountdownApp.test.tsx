import {render, screen, fireEvent} from '@testing-library/react';
import CountdownApp from './CountdownApp';
import { AppProvider } from '../../Context';

test('Should render Countdown App component without crashing', () => {
    render(<AppProvider><CountdownApp/></AppProvider>);
    const appElement = screen.getByTestId('countdown-app');
    expect(appElement).toBeInTheDocument();
});


test('Timer should change when entering a new time', async () => {
    render(<AppProvider><CountdownApp/></AppProvider>);

    const formInput = await screen.findByTestId('countdown-form-input');
    const timer = await screen.findByTestId('countdown-timer-time');

    expect(timer).toHaveTextContent('1:00');
    fireEvent.change(formInput, {target: {value: '5'}});

    expect(timer).toHaveTextContent('5:00');
});
