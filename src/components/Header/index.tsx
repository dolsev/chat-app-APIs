import React from 'react';
import './header.scss'

interface HeaderProps {
    text: string,
    icon:boolean
}
export const Header:React.FC<HeaderProps> = ({text,icon}) => {
    return (
        <div className="header-component">
            <div className="title">
                {icon?<img src='Message.png' alt='message'/>:null}
                <div className="title-text">{text}</div>
            </div>
        </div>
    );
};
