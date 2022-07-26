import {render, screen, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { AppProvider } from '../../Context';
import SpeedOptions from './SpeedOptions';


test('Should render Speed Option Buttons with the given data without crashing', () => {
    render(<AppProvider><SpeedOptions /></AppProvider>);
    const option1 = screen.getByText('1X');
    const option2 = screen.getByText('1.5X');
    const option3 = screen.getByText('2X');

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
});


test('The first Speed Option Button should be set to active by default', () => {
    render(<AppProvider><SpeedOptions /></AppProvider>);
    const option1 = screen.getByText('1X');

    expect(option1).toHaveClass('active');
});


test('Speed Option Button should be set to active when selected', () => {
    render(<AppProvider><SpeedOptions /></AppProvider>);
    const option3 = screen.getByText('2X');


    userEvent.click(option3);
    


    expect(option3).toHaveClass('active');
});

