import React, { useState, useEffect } from 'react';
import '../utils/css/produits.css';
import NotificationBar from '../composants/NotificationBar'
import ChatBot from '../composants/ChatBot'


export default function ChatBotNotifBar() {
    const [showChat, setShowChat] = useState(false);
    const [hasNotification, setHasNotification] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [notificationBarStyle, setNotificationBarStyle] = useState({});
    const [, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight, })
        if (windowSize.height < 700) {
            setNotificationBarStyle({
                bottom: showChat ? '560px' : '20px',
                cursor: showChat ? 'default' : 'pointer',
            });
        } else {
            setNotificationBarStyle({
                bottom: showChat ? '722px' : '20px',
                cursor: showChat ? 'default' : 'pointer',
            });
        }
    }, [windowSize.height, showChat]);


    const handleNotificationClick = () => {
        setShowChat(true);
    };

    const handleCloseChat = () => {
        setShowChat(false);
        setHasNotification(false)
    };

    const handleNewMessage = () => {
        setHasNotification(true);
    };

    return (
        <div className='container-all'>
            <div className="app">
                <div>
                    <NotificationBar hisOpen={showChat} hasNotification={hasNotification} onClose={handleCloseChat} onClick={handleNotificationClick} style={notificationBarStyle} />
                    {showChat && <ChatBot hisOpen={showChat} onNewMessage={handleNewMessage} />}
                </div>
            </div>
        </div>
    );
}
