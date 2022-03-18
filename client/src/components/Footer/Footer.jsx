import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './Footer.scss';
import Player from '../PlayerWithPosts/Player/Player';
import dataSongs from '../../data/dataSongs';

const Footer = () => {
  const [currentId , setCurrentId] = useState(0);

  return (
    <div className='footer'>
      <div className='author'>
          <span>Name music: {dataSongs[currentId].name}</span>
      </div>
        <div className='controller'>
          <Player songs = {dataSongs} currentId = {currentId} setCurrentId = {setCurrentId}/>  
        </div>
    </div>
  );
};

export default Footer;