import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import { CSSTransition } from 'react-transition-group';
import { useTransition, useSpring , useChain, config, useSpringRef , animated } from '@react-spring/web';

import './ButtonFourSeasons.scss';
import { 
    changeSpring , 
    changeAutumn , 
    changeWinter ,
    changeSummer , 
} from '../../redux/actions';

const ButtonFourSeasons = () => {
    const dispatch = useDispatch();

    const [animation , setAnimation] = React.useState(false);
    const [animationString , setAnimationString] = React.useState(false);
    const [animationSummer , setAnimationSummer] = React.useState(false);
    const [animationAutumn , setAnimationAutumn] = React.useState(false);
    const [animationWinter , setAnimationWinter] = React.useState(false);

    const springApi = useSpringRef();
    const { size} = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { size: "40%"},
        to: {
        size: animation ? "90%" : "40%",
        }
    });

    const transApi = useSpringRef();
    const transition = useTransition(animation , {
        ref: transApi,
        trail: 400,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 }
    });

    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(animation ? [springApi, transApi] : [transApi, springApi], [
        0,
        animation ? 0.1 : 0.6
    ]);

    useChain(animation ? [springApi , transApi] : [transApi , springApi] , [0 , animation ? 0.1 : 0.6]);

    const spring = useSelector((state) => state.springState);
    const { springMode , springValue , summerValue , autumnValue , winterValue } = spring;

    const summer = useSelector((state) => state.summerState);
    const { summerMode  } = summer;

    const autumn = useSelector((state) => state.autumnState);
    const { autumnMode } = autumn;

    const winter = useSelector((state) => state.winterState);
    const { winterMode } = winter;

    const [clickSpring , setClickSpring] = React.useState(false);

    const [clickSummer , setClickSummer] = React.useState(false);

    const [clickAutumn , setClickAutumn] = React.useState(false);

    const [clickWinter , setClickWinter] = React.useState(false);





////////////////// đang tu sửa //////////////////////////



    const buttonSpringHandler = () => {
        if(springValue === 0) dispatch(changeSpring(springMode , 30));
        else if(springValue === 0)
        {
            if(summerValue > 0 && autumnValue === 0 && winterValue === 0)
            {
                dispatch(changeSummer(summerMode , 30));
            }
            else if(autumnValue > 0 && winterValue === 0 && summerValue === 0)
            {
                dispatch(changeAutumn(autumnMode , 30));
            }
            else if(winterValue > 0 && summerValue === 0 && autumnValue === 0)
            {
                dispatch(changeWinter(winterMode , 30));
            }
        }
        else dispatch(changeSpring(springMode , 0));
        setClickSpring(!clickSpring);
    };

    const buttonAutumnHandler = () => {
        if(autumnValue === 0) dispatch(changeAutumn(autumnMode , 30));
        else if(autumnValue === 0)
        {
            if(summerValue > 0 && springValue === 0 && winterValue === 0)
            {
                dispatch(changeSummer(summerMode , 30));
            }
            else if(springValue > 0 && winterValue === 0 && summerValue === 0)
            {
                dispatch(changeSpring(springMode , 30));
            }
            else if(winterValue > 0 && summerValue === 0 && springValue === 0)
            {
                dispatch(changeWinter(winterMode , 30));
            }
        }
        else dispatch(changeAutumn(autumnMode , 0));
        setClickAutumn(!clickAutumn);
    };

    const buttonWinterHandler = () => {
        if(winterValue === 0) dispatch(changeWinter(winterMode , 30));
        else if(winterValue === 0)
        {
            if(summerValue > 0 && autumnValue === 0 && springValue === 0)
            {
                dispatch(changeSummer(summerMode , 30));
            }
            else if(autumnValue > 0 && winterValue === 0 && summerValue === 0)
            {
                dispatch(changeAutumn(autumnMode , 30));
            }
            else if(springValue > 0 && summerValue === 0 && autumnValue === 0)
            {
                dispatch(changeSpring(springMode , 30));
            }
        }
        else dispatch(changeWinter(winterMode , 0));
        setClickWinter(!clickWinter);
    };

    const buttonSummerHandler = () => {
        if(summerValue === 0) dispatch(changeSummer(summerMode , 30));
        else if(summerValue === 0)
        {
            if(springValue > 0 && autumnValue === 0 && winterValue === 0)
            {
                dispatch(changeSpring(springMode , 30));
            }
            else if(autumnValue > 0 && winterValue === 0 && summerValue === 0)
            {
                dispatch(changeAutumn(autumnMode , 30));
            }
            else if(winterValue > 0 && summerValue === 0 && autumnValue === 0)
            {
                dispatch(changeWinter(winterMode , 30));
            }
        }
        else dispatch(changeSummer(summerMode , 0));
        setClickSummer(!clickSummer);
    };




//////////////// đang tu sửa //////////////////////////////






    return(
        <div className="containerWrap">
            <animated.div 
                style = {{width: size , height: size}}
                className="button dropdown" onClick = {() => {
                    setAnimation(animation => !animation);     
            }}>
                    <div className="icon">
                        <i className="fab fa-soundcloud"></i>
                    </div>
            {/* {animation ? <div className = "button" /> : ''} */}


            {transition((style , item) =>

                item ? 
            
                    <animated.div style={style} className="button spring" onClick={buttonSpringHandler}>
                    {clickSpring && (
                        <ReactAudioPlayer 
                            preload='auto'
                            loop
                            autoPlay
                            src = './assets/sounds/Spring.mp3'
                            volume = {springValue / 100}
                        />
                    )}
                        <div className="icon">
                            <i className='fas fa-cloud-sun'></i>
                        </div>
                    </animated.div>
        
                 : ''
            )}
            
            {transition((style , item) =>

            item ? 

                <animated.div style={style} className="button summer" onClick={buttonSummerHandler}>
                {clickSummer && (
                    <ReactAudioPlayer 
                        preload='auto'
                        loop
                        autoPlay
                        src = './assets/sounds/Summer.mp3'
                        volume = {summerValue / 100}
                    />
                )}
                    <div className="icon">
                        <i className='fas fa-cloud-rain'></i>
                    </div>
                </animated.div>

            : ''
            )}

            {transition((style , item) =>

            item ? 

                <animated.div style={style} className="button autumn" onClick={buttonAutumnHandler}>
                {clickAutumn && (
                    <ReactAudioPlayer 
                        preload='auto'
                        loop
                        autoPlay
                        src = './assets/sounds/Autumn.mp3'
                        volume = {autumnValue / 100}
                    />
                )}
                    <div className="icon">
                        <i className='far fa-sun'></i>
                    </div>
                </animated.div>

            : ''
            )}

            {transition((style , item) =>

            item ? 

                <animated.div style={style} className="button winter" onClick={buttonWinterHandler}>
                {clickWinter && (
                    <ReactAudioPlayer 
                        preload='auto'
                        loop
                        autoPlay
                        src = './assets/sounds/Night.mp3'
                        volume = {winterValue / 100}
                    />
                )}
                    <div className="icon">
                        <i className='far fa-snowflake'></i>
                    </div>
                </animated.div>

            : ''
            )}
            </animated.div>
                {/* {animation && (
                    <div className="dropdown-content">
                    {clickSpring && (
                    <ReactAudioPlayer 
                        preload='auto'
                        loop
                        autoPlay
                        src = './assets/sounds/Spring.mp3'
                        volume = {springValue / 100}
                    />
                    )}
            
                    <div className="button spring" onClick={buttonSpringHandler}>
                        <div className="icon">
                            <i className='fas fa-cloud-sun'></i>
                        </div>
                    </div>
       
                    

                    {clickSummer && (
                        <ReactAudioPlayer 
                            preload='auto'
                            loop
                            autoPlay
                            src = './assets/sounds/Summer.mp3'
                            volume = {summerValue / 100}
                        />
                    )}
   
                    <div className="button summer" onClick={buttonSummerHandler}>
                        <div className="icon">
                            <i className="fas fa-cloud-rain"></i>
                        </div>
                    </div>
            
                    

                    {clickAutumn && (
                        <ReactAudioPlayer 
                            preload='auto'
                            loop
                            autoPlay
                            src = './assets/sounds/Autumn.mp3'
                            volume = {autumnValue / 100}
                        />
                    )}
                   
                    <div className="button autumn" onClick={buttonAutumnHandler}>
                        <div className="icon">
                            <i className='far fa-sun'></i>
                        </div>
                    </div>
                 
                    

                    {clickWinter && (
                        <ReactAudioPlayer 
                            preload='auto'
                            loop
                            autoPlay
                            src = './assets/sounds/Night.mp3'
                            volume = {winterValue / 100}
                        />
                    )}
                
                    <div className= "button winter"  onClick={buttonWinterHandler}>
                        <div className="icon">
                            <i className='far fa-snowflake'></i>
                        </div>
                    </div>
          
                    
                </div>
                )}   */}

            
        </div>
    );
}

export default ButtonFourSeasons;