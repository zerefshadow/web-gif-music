import React , { useState } from 'react';

import './RightButtonBoardGIF.scss';

const RightButtonBoardGIF = () => {
    const [openRightForm , setOpenRightForm] = useState(false);
    
    const openRightFormHandler = () => {
        setOpenRightForm(!openRightForm);
    };

    return(
        <>
            <div className={`RightButtonBoardGIF ` + (openRightForm + 'openRightForm')}>
                <div className = 'ButtonBoardGIF'>
                    <div className = {`iconButton ` + (openRightForm + 'active')}>
                        <i className = "" onClick = {openRightFormHandler}></i>
                    </div>
                    {/* { openRightForm && ( */}
                        <div className = 'RightButtonBoardGIFBox'>

                        </div>
                    {/* )} */}
                </div>
            </div>
        </>
    );
};

export default RightButtonBoardGIF;