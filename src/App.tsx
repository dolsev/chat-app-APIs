import React from 'react';
import { useState, useEffect } from 'react';
import {PageIndex} from "./pages/index";
import {ChatItemList} from "./components/ChatItemList";
import './App.css'
import {Message} from "./components/Message";
import {Header} from "./components/Header";
import {Input} from "./components/Input";
import {NewMessage} from "./components/NewMessage";
import axios from "axios";

function App() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 700);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [chatList, setChatList] = useState([]);
    useEffect(() => {
        axios.get('https://api.lenzaos.com/test/chat.get?offset=0&limit=20')
            .then(response => {
                const chats = response.data.response.map((chat:any) => (
                    <ChatItemList setCurrentChatId={setCurrentChatId} chatId={chat.id} src={chat.avatar} key={chat.id} chatName={chat.title} message={chat.last_message.message} time={chat.last_message.created_at}/>
                ));
                setChatList(chats);
            })
            .catch(error => console.log(error));
    }, []);

    const [currentChatId, setCurrentChatId] = useState(null);
    const [currentChatMessages, setCurrentChatMessages] = useState([]);
    useEffect(() => {
        if (currentChatId) {
            axios.get(`https://api.lenzaos.com/test/message.get?chat_id=${currentChatId}&offset=0&limit=10`)
                .then(response => {
                    setCurrentChatMessages(response.data.response);
                })
                .catch(error => console.log(error));
        }
    }, [currentChatId]);
    return (
        <div className='sorry'>
            {isMobile ? (
                <div>ПРОСТИТЕ, НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</div>
            ) : (
                    <div className="App">
                        <div className='chat-list-wrapper'>
                            <Header icon={false} text='All chats'/>

                            <div className='chat-list'>
                                {chatList}
                            </div>
                        </div>

                        <div className='current-chat'>
                            <Header icon={true} text='Great Project'/><div className='chat-window'>
                            {currentChatMessages.some((message:any) => message.is_new) && (
                                <NewMessage />
                            )}
                            {currentChatMessages.map((message:any) => (
                                <React.Fragment key={message.id}>
                                    <Message
                                        isNew={message.is_new}
                                        time={message.created_at}
                                        Main={message.user.you}
                                        My={message.user.you}
                                        firstName={message.user.name}
                                        lastName={message.user.surname}
                                        messageText={message.message}
                                        src={message.user.avatar}
                                    />
                                </React.Fragment>
                            ))}
                        </div>

                            <Input/>
                        </div>
                    </div>
            )}
        </div>

  );
}

export default App;
