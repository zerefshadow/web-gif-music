import React from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";

import { changeMorningNight} from "../../redux/actions";
import './Header.scss';
import ChangeSeasons from "../ChangeSeasons/ChangeSeasons";

const Header = () => {
  const [fullScreen , setFullScreen] = React.useState(false);
  // const dispatch = useDispatch();
  // const springWinter = useSelector((state) => state.springState);

  //const { springMode } = springWinter;

  // const handleChangeMorningNight = () => {
  //   dispatch(changeMorningNight(springMode));
  // };

  const fullScreenHandler = () => {
    if(!fullScreen){
      setFullScreen(true);
      const e = document.documentElement;
      e.requestFullscreen();
    }
    else{
      setFullScreen(false);
      if(!document.exitFullscreen){
        document.exitFullscreen();
      }
      else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
      }
      else if(document.msExitFullscreen){
        document.msExitFullscreen();
      }
    }
  };
  
  return(
    <nav className="wrap">
      <Link to = '/'>
        <img src = '/assets/icons/lofi-logo.gif' alt = ''/>
      </Link>

      <div className="nav-menu">
        <Link to = '/GIF'>
          <span><i className="fab-light fa-gif"></i> GIF beautiful</span>
        </Link>

        <Link to = '/Mind'>
          <span><i></i> à thì để suy nghĩ</span>
        </Link>
      </div>

      <div className="nav-menu">
          {/* <div onClick={handleChangeMorningNight}>
            <ChangeSeasons theme = {springMode}/>
          </div> */}

          <button className="fullscreen" onClick = {fullScreenHandler}>
            <i className="fas fa-expand fa-lg"></i>
          </button>
      </div>
    </nav>
  );
};

export default Header;