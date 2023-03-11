import { FC } from "react";
import { IMessage } from "./interface";
import "./message.scss";
import { Avatar } from "../Avatar";
import { TIME } from "../TIME";

export const Message: FC<IMessage> = (props: IMessage) => {
    const { My, Main, Edited, firstName, lastName, messageText, src, time } = props;
    const className = `component-message ${!Main ? "" : "right"}`;

    return (
        <div className={className}>
            {!Main && <Avatar size="sm" src={src} />}
            <div className="container">
                {!Main &&<span className="name-surname">{firstName} {lastName}</span>}
                <div className="message-text-wrapper">
                    <div className="message-text">{messageText}</div>
                    <div className="time-block">
                        {Edited && <div className="edited">Edited</div>}
                        <TIME My={My} format='hours' time={time} />
                    </div>
                </div>
            </div>
        </div>
    );
};
