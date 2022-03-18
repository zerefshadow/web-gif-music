import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Slider from '@mui/material/Slider';

import './useMusicDataSongs.scss';

const useMusicDataSongs = ({ post , setCurrentId }) => {
    const [volume , setVolume] = React.useState(0);

    return(
        <div className="backgroundNoise">
            <div className="noise-option">
                    <p>{post.name}</p>
                    <ReactAudioPlayer
                        preload="auto"
                        loop
                        autoPlay
                        src={post.selectedFile} 
                        volume = {volume / 100}
                    />
                    <Slider
                        className="slider" 
                        value = {volume}
                        onChange = {(e) => setVolume(e.target.value)}
                    />        
            </div>
        </div>
    );
};

export default useMusicDataSongs;