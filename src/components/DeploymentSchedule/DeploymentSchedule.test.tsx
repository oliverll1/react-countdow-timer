import {render, screen} from '@testing-library/react';
import DeploymentSchedule from './DeploymentSchedule';
import { AppProvider } from '../../Context';

test('Should render DeploymentSchedule component without crashing', () => {
    render(<AppProvider><DeploymentSchedule/></AppProvider>);
    const element = screen.getByTestId('deployment-schedule');
    expect(element).toBeInTheDocument();
});


test('Should show the deployment time of each office', () => {
    render(<AppProvider><DeploymentSchedule/></AppProvider>);

    const london = screen.getByTestId('deployment-schedule-message-london');
    const newyork = screen.getByTestId('deployment-schedule-message-new-york');
    const saltlake = screen.getByTestId('deployment-schedule-message-salt-lake-city');

    expect(london).toBeInTheDocument();
    expect(newyork).toBeInTheDocument();
    expect(saltlake).toBeInTheDocument();

});
