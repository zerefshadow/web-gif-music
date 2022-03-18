import React from "react";
import { useDispatch , useSelector } from "react-redux";
import FileBase64 from 'react-file-base64';
import { createPost , updatePost } from '../../redux/actions/index';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import './FormMusic.scss';

const FormMusic = ({ currentId , setCurrentId } , props) => {
    const [postData , setPostData] = React.useState({ name: '' , selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();

    React.useEffect(() => {
        if(post) setPostData(post);
    } , [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ name: '' , selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();

        dispatch(createPost(postData));
    
        
        // if (currentId === 0) {
        //   dispatch(createPost(postData));
        //   clear();
        // } else {
        //   dispatch(updatePost(currentId, postData));
        //   clear();
        // }
    };

    return(
        <>
            <div className = "formBox">
                <form autoComplete = 'off' noValidate className = "form_test">
                    <h5>tạo nhạc của bạn</h5>
                    {/* <div className="form__title" onChange = {(e) => setPostData({ ...postData , title: e.target.value})}>
                        <label for="ftitle">TITLE</label>
                        <input type="text" id="ftitle" name="ftitle" />
                    </div> */}
                    <div className="form__name" onChange = {(e) => setPostData({ ...postData , name: e.target.value })}>
                        <label htmlFor="fname">name music</label>
                        <input type="text" id="fname" name="fname" />
                    </div>
                    <div className = "formFileBase">
                        <FileBase64 
                        accept = 'audio/*'
                        multiple = {false}
                        type = 'file'
                        value = { postData.selectedFile }
                        onDone = {({ base64 }) => setPostData({ ...postData , selectedFile: base64 })}
                    ></FileBase64>
                    </div>
                    
                    {/* <div className="form__File" onDone = {(e) => setPostData({ ...postData , selectedFile: e.target.value })}>
                        <label>
                            <input type="file"/>
                            <span>+</span>
                        </label>
                    </div> */}
                    {/* <div> */}
                        {/* <button className="form__submit" type = "button">Submit</button> */}
                        {/* <div style = {{width: 80 , height: 80}}>
                            <CircularProgressbar
                                value={singleProgress}
                                text={`${singleProgress}%`}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    strokeLinecap: 'butt',
                                    textSize: '16px',
                                    pathTransitionDuration: 0.5,
                                    pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                    textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            />
                        </div> */}
                    {/* </div> */}
                    <button className="form__submit" type = "submit" onClick = {() => handleSubmit()}>Submit</button>
                    <button className="form__clear" type = "submit" onClick = {clear}>Clear</button>
                    
                </form>
            </div>
        </>
            
    );
};

export default FormMusic;