import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

import Time from '../Time/Time';
import './RightButtonBoard.scss';

const RightButtonBoard = ({
    seconds,
    minutes,
    hours,
    isRunning,
    pause,
    resume,
    restart,
    setTimerHandler,
    setTimerStart,
    timerStart,
}) => {
    const dispatch = useDispatch();
    const dataMood = useSelector((state) => state.moodState);
    const [openSounds , setOpenSounds] = React.useState(false);
    const [openBoardComplete , setOpenBoardComplete] = React.useState(false);

    // mình cho đống sounds này vô firebase rồi lấy nó ra xài cho đỡ dài dòng
    const [cityTraffic, setCityTraffic] = React.useState(0);
    const [cityRain, setCityRain] = React.useState(0);
    const [fireplace, setFireplace] = React.useState(0);
    const [snow, setSnow] = React.useState(0);
    const [summerStorm, setSummerStorm] = React.useState(0);
    const [fan, setFan] = React.useState(0);
    const [forestNight, setForestNight] = React.useState(0);
    const [wave, setWave] = React.useState(0);
    const [wind, setWind] = React.useState(0);
    const [people, setPeople] = React.useState(0);
    const [river, setRiver] = React.useState(0);
    const [rainForest, setRainForest] = React.useState(0);

    const soundsHandler = () => {
        setOpenSounds(!openSounds);
        setOpenBoardComplete(false);
    };
    const boardCompleteHandler = () => {
        setOpenBoardComplete(!openBoardComplete);
        setOpenSounds(false);
    };

    return(
        <>
            <div className={`rightButtonBoard ` + (openSounds && 'sounds ') + (openBoardComplete && ' boardComplete ')}>
                <div className = 'rightButtonBoard__icon'>
                    <div className = { `icon ` + (openSounds && 'active')}>
                        <i onClick={soundsHandler} className = "fas fa-sliders-h fa-2x"></i>
                    </div>

                    { openSounds && (
                        <div className = 'rightButtonBoardBox'>
                            <h5>Hãy kết hợp âm thanh với nhạc nào</h5>
                            <div className = "backgroundNoise">
                                <div className = "noise-option">
                                    <p>City traffic</p>
                                    <ReactAudioPlayer 
                                        preload='auto'
                                        loop
                                        autoPlay
                                        src='./assets/sounds/city_traffic.mp3'
                                        volume = {cityTraffic / 100}
                                    />
                                    <Slider 
                                        className = "slider"
                                        value = {cityTraffic}
                                        onChange = {(e) => setCityTraffic(e.target.value)}
                                    />
                                </div>
                                <div className = "noise-option">
                                    <p>city rain</p>
                                    <ReactAudioPlayer 
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/rain_city.mp3'
                                        loop
                                        volume={cityRain / 100}
                                    />
                                    <Slider 
                                        className = "slider"
                                        value = {cityRain}
                                        onChange = {(e) => setCityRain(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Fireplace</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/fireplace.mp3'
                                        loop
                                        volume={fireplace / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={fireplace}
                                        onChange={(e) => setFireplace(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Snow</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/snow.mp3'
                                        loop
                                        volume={snow / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={snow}
                                        onChange={(e) => setSnow(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Summer Storm</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/summer_storm.mp3'
                                        loop
                                        volume={summerStorm / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={summerStorm}
                                        onChange={(e) => setSummerStorm(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Fan</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/fan.mp3'
                                        loop
                                        volume={fan / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={fan}
                                        onChange={(e) => setFan(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Forest Night</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/forest_night.mp3'
                                        loop
                                        volume={forestNight / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={forestNight}
                                        onChange={(e) => setForestNight(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Wave</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/waves.mp3'
                                        loop
                                        volume={wave / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={wave}
                                        onChange={(e) => setWave(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Wind</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/wind.mp3'
                                        loop
                                        volume={wind / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={wind}
                                        onChange={(e) => setWind(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>People</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/people_talk_inside.mp3'
                                        loop
                                        volume={people / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={people}
                                        onChange={(e) => setPeople(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>River</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/river.mp3'
                                        loop
                                        volume={river / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={river}
                                        onChange={(e) => setRiver(e.target.value)}
                                    />
                                </div>
                                <div className='noise-option'>
                                    <p>Rain Forest</p>
                                    <ReactAudioPlayer
                                        preload='auto'
                                        autoPlay
                                        src='./assets/sounds/rain_forest.mp3'
                                        loop
                                        volume={rainForest / 100}
                                    />
                                    <Slider
                                        className='slider'
                                        value={rainForest}
                                        onChange={(e) => setRainForest(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className = 'rightButtonBoard__icon'>
                    <div className = {`icon ` + (openBoardComplete && 'active')}>
                        <i className = "fas fa-book-reader fa-2x" onClick = {boardCompleteHandler}></i>
                    </div>
                </div>
                    {openBoardComplete && (
                        <div className = 'rightButtonBoardBox'>
                            <h4>Damn it Mode</h4>
                            <Time
                                seconds={seconds}
                                minutes={minutes}
                                hours={hours}
                                isRunning={isRunning}
                                pause={pause}
                                resume={resume}
                                restart={restart}
                                setTimerHandler={setTimerHandler}
                                setTimerStart={setTimerStart}
                                timerStart={timerStart}
                            />
                        </div>
                    )}
            </div>
        </>
    );
};

export default RightButtonBoard;
