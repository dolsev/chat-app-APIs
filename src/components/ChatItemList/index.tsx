import { FC, useRef, useEffect, useState } from "react";
import { IChatItemList } from "./interface";
import "./ChatItemList.scss";
import { Avatar } from "../Avatar";
import {TIME} from "../TIME";

export const ChatItemList: FC<IChatItemList> = (props: IChatItemList) => {
    const { src, chatName, message, time, setCurrentChatId, chatId } = props;
    const [hovered, setHovered] = useState(false);
    const [selected, setSelected] = useState(false);

    const containerStyle = {
        backgroundColor: selected ? "#ddd" : hovered ? "#acacde" : "#fff",
        cursor: hovered ? "pointer" : "default",
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };


    const chatNameRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chatNameElem = chatNameRef.current;
        const messageElem = messageRef.current;

        if (chatNameElem && messageElem) {
            const chatNameText = chatNameElem.textContent;
            const messageText = messageElem.textContent;

            // Cut long chatName and message texts
            if (chatNameText && chatNameText.length > 40) {
                chatNameElem.textContent = chatNameText.substring(0, 37) + "...";
            }
            if (messageText && messageText.length > 93) {
                messageElem.textContent = messageText.substring(0, 89) + "...";
            }
        }
    }, []);

    const className = `component-chatItemList`;

    return (
        <div className={className}
             style={containerStyle}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             onClick={() => setCurrentChatId(chatId)}
        >
            <Avatar src={src} size={'md'}/>
            <div className="chatItemList__content">
                <div className="chatItemList__container">
                    <div className="chatItemList__name" ref={chatNameRef}>
                        {chatName}
                    </div>
                    <TIME format='date' time={time} />
                </div>
                <div className="chatItemList__message" ref={messageRef}>
                    {message}
                </div>

            </div>

        </div>
    );
};
