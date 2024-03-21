import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../utils/css/pdvsoon.css'
import liposome from '../images/general/liposome-transparent.png'

export default function PDVsoon() {
    const location = useLocation();
    const targetDate = new Date("march 14, 2024").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const isSmallScreen = window.innerWidth <= 900;
    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        return {
            days,
            hours,
            minutes,
            seconds
        };
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
            <div className='pdvsoon-container'>
                <img className='pdvsoon-liposome' src={liposome} />
                <div className="pdvsoon-bleu">
                    <div>
                    <h2 className='pdvsoon-title'>LA LISTE</h2>
                    <h2 className='pdvsoon-title'>DES POINTS </h2>
                    <h2 className='pdvsoon-title'>DE VENTE ARRIVE</h2>
                    </div>
                </div>
                <div className="pdvsoon-map">
                    <div className='filter'></div>
                    <div className='countdown'>
                        <div className='countdown-part'>
                            <h2 className='pdvsoon-countdown-h2'>{timeLeft.days}</h2>
                            <h3 className='pdvsoon-countdown-h3'>Jours</h3>
                        </div>
                        <h2 className='pdvsoon-countdown-h2'>:</h2>
                        <div className='countdown-part'>
                            <h2 className='pdvsoon-countdown-h2'>{timeLeft.hours}</h2>
                            <h3 className='pdvsoon-countdown-h3'>Heures</h3>
                        </div>
                        <h2 className='pdvsoon-countdown-h2'>:</h2>
                        <div className='countdown-part'>
                            <h2 className='pdvsoon-countdown-h2'>{timeLeft.minutes}</h2>
                            <h3 className='pdvsoon-countdown-h3'>Minutes</h3>
                        </div>
                        <h2 className='pdvsoon-countdown-h2'>:</h2>
                        <div className='countdown-part'>
                            <h2 className='pdvsoon-countdown-h2'>{timeLeft.seconds}</h2>
                            <h3 className='pdvsoon-countdown-h3'>Secondes</h3>
                        </div>
                    </div>
                </div>
            </div>
    );
}
