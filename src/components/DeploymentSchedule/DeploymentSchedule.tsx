import React, {useState, useContext, useEffect} from 'react';
import DeploymentScheduleMessage from './DeploymentScheduleMessage/DeploymentScheduleMessage';
import './DeploymentSchedule.scss';
import { DateTime } from 'luxon';

import { AppContext } from '../../Context';

const DeploymentSchedule = () => {
  const [deploymentTimeZones, setDeploymentTimeZones] = useState<{zone: string, date: string}[]>([]);
  const {currentSpeed, seconds} = useContext(AppContext);

  useEffect(() => {
    const format = 'cccc, MMM. dd @ hh:mm a';

    const londonDate  = DateTime.fromObject({}, {zone: 'Europe/London'}).plus({ seconds: seconds / currentSpeed }).toFormat(format);
    const newYorkDate =  DateTime.fromObject({}, {zone: 'America/New_York'}).plus({ seconds: seconds / currentSpeed }).toFormat(format);
    const saltLakeCityDate = DateTime.fromObject({}, {zone: 'America/Denver'}).plus({ seconds: seconds / currentSpeed }).toFormat(format);

    const timeZones = [
      {
        zone: 'London',
        date: londonDate,
      },
      {
        zone: 'New York',
        date: newYorkDate,
      },
      {
        zone: 'Salt Lake City',
        date: saltLakeCityDate,
      }
    ]

    setDeploymentTimeZones(timeZones);
  }, [seconds, currentSpeed])

  return (
    <div data-testid='deployment-schedule' className='deployment-schedule__container'>

      <span className='deployment-schedule__label'>Est. Deployment Time:</span>

      <ul className='deployment-schedule__list'>
        {deploymentTimeZones.map( (deploymentTimeZone: any) => {
          return <DeploymentScheduleMessage
            className='deployment-schedule__messages'
            zone={deploymentTimeZone.zone}
            date={deploymentTimeZone.date}
            key={deploymentTimeZone.zone}
          />
        })}
      </ul>
    </div>
  )
}

export default DeploymentSchedule