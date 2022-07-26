import {render, screen} from '@testing-library/react';
import CountdownMessage from './CountdownMessage';
import { AppProvider } from '../../Context';

test('Should not render a message in the CountdownMessage Component initially', () => {
    render(<AppProvider><CountdownMessage/></AppProvider>);
    const element = screen.queryByTestId('countdown-message');
    expect(element).not.toBeTruthy();
});
