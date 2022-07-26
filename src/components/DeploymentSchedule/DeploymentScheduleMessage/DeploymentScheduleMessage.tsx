import React from 'react'
import './DeploymentScheduleMessage.scss';


type DeploymentScheduleProps = { 
  zone: string, 
  date: string, 
  className: string,
}

const DeploymentScheduleMessage = ({zone, date}: DeploymentScheduleProps) => {
  return (
    <li data-testid={`deployment-schedule-message-${zone.replaceAll(' ', '-').toLowerCase()}`} className='deployment-schedule__message'>
        <span className='deployment-schedule__message__zone'>{`${zone}:`}</span> 
        <span className='deployment-schedule__message__date'> {`${date}`}</span>
    </li>
  )
}

export default DeploymentScheduleMessage
