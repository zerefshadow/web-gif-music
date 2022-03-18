import React from "react";

import './GifBeautiful.scss';
import LeftButtonBoard from '../../components/LeftButtonBoard/LeftButtonBoard';
import RightButtonBoardGIF from "../../components/RightButtonBoardGIF/RightButtonBoardGIF";

const GifBeautiful = () => {

    return(
        <>
            <video className="gifBeautiful" loop muted autoPlay>
                <source src = "/assets/video/LiveAutumn.mp4" type = "video/mp4"/>
            </video>
            <LeftButtonBoard />
            <RightButtonBoardGIF />
        </>
    );
};

export default GifBeautiful;