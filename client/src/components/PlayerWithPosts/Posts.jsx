import React from "react";
import { useSelector } from "react-redux";

import './Posts.scss';
import UseMusicDataSongs from "../PostUseDataSongs/useMusicDataSongs/useMusicDataSongs";

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return(
        !posts.length ? <div></div> : (
            <div className="post-container">
                {posts.map((post) => (
                    <div className="post__form" key = {post._id}>
                        <UseMusicDataSongs post = {post} setCurrentId = {setCurrentId}/>           
                    </div>
                ))}
            </div>
        )
    );
};

export default Posts;