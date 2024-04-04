import { useState, useEffect } from 'react';

function PomodoroClock() {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [play, setPlay] = useState(false);
    const [timingType, setTimingType] = useState("SESSION");
    const [timeLeft, setTimeLeft] = useState(1500);

    const timeout = setTimeout(() => {
        if(timeLeft && play){
            setTimeLeft(timeLeft - 1)
        }
    }, 1000);

    const handleBreakIncrease = () => {
        if(breakLength < 60){
            setBreakLength(breakLength + 1);
        }
    }

    const handleSessionIncrease = () => {
        if(sessionLength < 60){
            setSessionLength(sessionLength + 1);
            setTimeLeft(timeLeft + 60);
        }
    }

    const handleBreakDecrease = () => {
        if(breakLength > 1){
            setBreakLength(breakLength - 1);
        }
    }

    const handleSessionDecrease = () => {
        if(sessionLength > 1){
            setSessionLength(sessionLength - 1);
            setTimeLeft(timeLeft - 60);
        }
    }

    const handlePlay = () => {
        clearTimeout(timeout);
        setPlay(!play);
    }

    const handleReset = () => {
        clearTimeout(timeout);
        setPlay(false);
        setTimeLeft(1500);
        setBreakLength(5);
        setSessionLength(25);
        setTimingType("SESSION");
        const audio = document.getElementById("beep");
        audio.pause();
        audio.currentTime = 0;
    }

    const resetTimer = () => {
        const audio = document.getElementById("beep");
        if(!timeLeft && timingType === "SESSION") {
            setTimeLeft(breakLength * 60);
            setTimingType("BREAK");
            audio.play();
        }
        if(!timeLeft && timingType === "BREAK"){
            setTimeLeft(sessionLength * 60);
            setTimingType("SESSION")
            audio.pause();
            audio.currentTime = 0;
        }
    }

    const clock = () => {
        if(play){
            timeout;
            resetTimer();
        } else {
            clearTimeout(timeout);
        }
    }

    useEffect(() => {
        clock()
    }, [play, timeLeft, timeout])

    const timeFormatter = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft - minutes * 60;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    const title = timingType === "SESSION" ? "Session" : "Break"; 

    return (
        <div>
            <div className="wrapper">
                <h2>Pomodoro Clock</h2>
                <div className="break-session-length">
                    <div>
                        <h3 id="break-label">Break</h3>
                        <div>
                            <button id="break-increment" className="btn btn-success" disabled={play} onClick={handleBreakIncrease}>+</button>
                                <p id="break-length">{breakLength}</p>
                            <button id="break-decrement" className="btn btn-warning" disabled={play} onClick={handleBreakDecrease}>-</button>
                        </div>
                    </div>
                    <div>
                        <h3 id="session-label">Session</h3>
                        <div>
                            <button id="session-increment" className="btn btn-success" disabled={play} onClick={handleSessionIncrease}>+</button>
                                <p id="session-length">{sessionLength}</p>
                            <button id="session-decrement" className="btn btn-warning" disabled={play} onClick={handleSessionDecrease}>-</button>
                        </div>
                    </div>
                </div>
            <div className="timer-wrapper">
                <div className="timer">
                    <h2 id="timer-label">{title}</h2>
                    <h3 id="time-left">{timeFormatter()}</h3>
                </div>
                <button id="start_stop" className="btn btn-primary" onClick={handlePlay} >Start/Stop</button>
                <button id="reset" className="btn btn-danger" onClick={handleReset}>reset</button>
            </div>
            </div>
            <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>
    );
}

export default PomodoroClock;