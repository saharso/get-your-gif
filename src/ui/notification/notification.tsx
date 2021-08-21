import './notification.scss';
import React from 'react';

export interface INotificationProps {
    label: string;
}

const Notification: React.FunctionComponent<INotificationProps> = ({label})=>{
    return  (
        <h2 
            className="ui-notification"
        >
            {label}
        </h2>
    )
}

export default Notification;