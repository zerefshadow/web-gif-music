import React , { useState } from "react";

import './LeftButtonBoard.scss';
import PostUseDataSongs from '../PostUseDataSongs/PostUseDataSongs'
import FormMusic from "../FormMusic/FormMusic";

const LeftButtonBoard = () => {
    const [currentId , setCurrentId] = useState(0);
    const [openFormMusic , setOpenFormMusic] = React.useState(false);
 

    const openFormMusicHandler = () => {
        setOpenFormMusic(!openFormMusic);
    };

    return(
        <div className = {`buttonBoard ` + (openFormMusic && 'FormMusic')}>
            <div className = "buttonBoard__icon">
                <div className = {`icon ` + (openFormMusic && 'active')}>
                    <i onClick = {openFormMusicHandler} className = "fas fa-headphones"></i>
                </div>
                { openFormMusic && (
                    <div className = "buttonBoardBox">
                        <FormMusic currentId = {currentId} setCurrentId = {setCurrentId} />
                        <PostUseDataSongs setCurrentId = {setCurrentId} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LeftButtonBoard;