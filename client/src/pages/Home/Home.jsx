import React, { useState } from 'react';
import './Home.scss';
import { useDispatch , useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';

import { getPosts } from '../../redux/actions';
import Footer from '../../components/Footer/Footer'
import ButtonFourSeasonsSound from '../../components/ButtonFourSeasonsSound/ButtonFourSeasons';
import LeftButtonBoard from '../../components/LeftButtonBoard/LeftButtonBoard';
import RightButtonBoard from '../../components/RightButtonBoard/RightButtonBoard';


const Home = () => {
  const [currentId , setCurrentId] = useState(0);
  const [timerStart , setTimerStart] = useState(false);
  const dispatch = useDispatch(); 

  React.useEffect(() =>{
    dispatch(getPosts());
  } , [currentId , dispatch]);

  const MorningNight = useSelector((state) => state.springState);

  const { springMode } = MorningNight;
  

  const combineMode = `${springMode}`;

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0);

  const { seconds, minutes, hours, isRunning, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => setTimerStart(false),
    });

  const setTimerHandler = (hour, minute, second) => {
      const time = new Date();
      const setupTimer =
        Number(hour) * 3600 + Number(second) + Number(minute) * 60;
      time.setSeconds(time.getSeconds() + setupTimer);
      restart(time);
  };

  return (
    <>
      <video
        className={combineMode === 'winter' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Winter.mp4' type='video/mp4' />
      </video>

      <video
        className={combineMode === 'spring' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Spring.mp4' type='video/mp4' />
      </video>
      
      <video
        className={combineMode === 'summer' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Summer.mp4' type='video/mp4' />
      </video>
      <video
        className={combineMode === 'autumn' ? 'videoIn' : 'videoOut'}
        autoPlay
        loop
        muted
      >
        <source src='/assets/video/Autumn.mp4' type='video/mp4' />
      </video>
      <ButtonFourSeasonsSound />
      <LeftButtonBoard />
      <RightButtonBoard 
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
      <Footer />
    </>
  );
};

export default Home;
