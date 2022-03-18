import React, { useState, useRef, useEffect } from 'react';

import { useSelector } from 'react-redux';
import './Player.scss';
import ReactAudioPlayer from 'react-audio-player';


const Player = ({ currentId, setCurrentId , songs}) => {
  const volume = useSelector((state) => state.volumeState);

  const { volumeValue } = volume;

  const audioElement = useRef();
  const [playing , setPlaying] = useState(false);

  useEffect(() => {
    if(playing) {
      audioElement.current.play();
    }
    else{
      audioElement.current.pause();
    }
    audioElement.current.volume = volumeValue / 100;
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentId(() => {
        let temp = currentId;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentId(() => {
        let temp = currentId;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };
  
  return (
    <div className='music-player'>
      <audio src = {songs[currentId].src} ref = {audioElement}></audio>
      <div className='music-player--controls'>
        <button className='skip-btn'  onClick={() => SkipSong(false)}>
          <img src='/assets/icons/prev.svg' alt='' />
        </button>
        <button className='play-btn' onClick={() => setPlaying(!playing)}>
        { playing ? (
          <img src='/assets/icons/pause.svg' alt='' />
        ) : (
          <img src='/assets/icons/play.svg' alt='' />
        )}
        </button>
        <button className='skip-btn' onClick={() => SkipSong()}>
          <img src='/assets/icons/next.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default Player;
