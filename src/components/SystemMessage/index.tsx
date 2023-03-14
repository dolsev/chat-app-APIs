import React from 'react';
import './systemMessage.scss';

interface SystemMessageProps {
    time: any;
}

 const SystemMessage: React.FC<SystemMessageProps> = ({ time }) => {
    return (
        <div className="systemMessage">
            <div className="date">{time}</div>
        </div>
    );
};
