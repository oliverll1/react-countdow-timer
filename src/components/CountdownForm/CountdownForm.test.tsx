import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import CountdownForm from './CountdownForm';
import { AppProvider } from '../../Context';


test('Should render Countdown Form component without crashing', () => {
    render(<AppProvider><CountdownForm/></AppProvider>);
    const element = screen.getByTestId('countdown-form');
    expect(element).toBeInTheDocument();
});

test('Form button should be disabled when the input time is below 1 or empty', async () => {
    render(<AppProvider><CountdownForm/></AppProvider>);

    const button = await screen.findByText('start');
    const input = await screen.findByTestId('countdown-form-input');

    fireEvent.change(input, {target: {value: ''}})
    expect(button).toBeDisabled();
});

test('Form input time text should be disabled when the timer has started', async () => {
    render(<AppProvider><CountdownForm/></AppProvider>);

    const button = await screen.findByText('start');
    const input = await screen.findByTestId('countdown-form-input');

    userEvent.click(button);
    expect(input).toBeDisabled();
});
