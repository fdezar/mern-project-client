import { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import appThemeProvider from "../pages/theme/appThemeProvider";
import { ThemeProvider } from "@mui/material";

const Wrapper = styled('div')({
    textAlign: 'center',
    padding: '20px 20px 20px 0',
  });
  
  const LengthControl = styled('div')({
    display: 'flex',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '200px'
  });
  
  const Timer = styled('div')({
    marginBottom: '16px',
  });

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
      <ThemeProvider theme={appThemeProvider}>
        <Wrapper>
      <Typography variant="h6" style={{ display: 'flex', alignItems: 'flex-start', margin: '0 0 10px 20px'}}>Pomodoro</Typography>
      <hr style={{ marginBottom: '40px' }}/>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <LengthControl>
            <Typography variant="h6" color="primary" sx={{ width: '100px' }}>Break</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <Button variant="outlined" color="secondary" disabled={play} onClick={handleBreakDecrease}>-</Button>
              <Typography variant="body1" sx={{ margin: '8px 10px 5px 10px' }}>{breakLength}</Typography>
              <Button variant="outlined" color="primary" disabled={play} onClick={handleBreakIncrease}>+</Button>
            </div>
          </LengthControl>
        </Grid>
        <Grid item xs={12} sm={12} style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
          <LengthControl>
            <Typography variant="h6" color="primary" sx={{ width: '100px' }}>Session</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <Button variant="outlined" color="secondary" disabled={play} onClick={handleSessionDecrease}>-</Button>
              <Typography variant="body1" sx={{ margin: '8px 10px 5px 10px' }}>{sessionLength}</Typography>
              <Button variant="outlined" color="primary" disabled={play} onClick={handleSessionIncrease}>+</Button>
            </div>
          </LengthControl>
        </Grid>
      </Grid>
      <Timer>
        {/* <Typography variant="h4" id="timer-label">{title}</Typography> */}
        <Typography variant="h4" id="timer-label">{title}</Typography>
        <Typography variant="h3" id="time-left">{timeFormatter()}</Typography>
      </Timer>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '30px'}}>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="primary" id="start_stop" onClick={handlePlay}>{play ? 'Stop' : 'Start'}</Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="contained" color="secondary" id="reset" onClick={handleReset}>Reset</Button>
        </Grid>
      </Grid>
      <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </Wrapper>
    </ThemeProvider>
    );
}

export default PomodoroClock;