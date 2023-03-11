import React, { useState, useRef } from "react";
import "./input.scss";


export const Input = () => {
    const [message, setMessage] = useState("");
    const inputRef = useRef<HTMLDivElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
        setMessage(event.target.innerText);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setMessage("");
        }
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {};

    return (
        <div className="input-component">
            <div className="input-wrapper" ref={inputRef}>
                <div
                    contentEditable
                    className="input"
                    placeholder="Type message"
                    onInput={handleChange}
                    onKeyDown={handleKeyDown}
                    style={{ height: "80px" }}
                />

            </div>
            <div className="button-wrapper">
                <button className="button" onClick={handleButtonClick}>
                    <img src="Pin.png" alt='pin'/>
                </button>
                <button className="button-send" onClick={handleButtonClick}>
                    <img src="Send.png" alt='send' />
                </button>
            </div>
        </div>
    );
};
