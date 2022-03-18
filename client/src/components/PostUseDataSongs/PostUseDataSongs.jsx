import React from "react";
import { useSelector } from "react-redux";

import UseMusicDataSongs from "./useMusicDataSongs/useMusicDataSongs";

const PostUseDataSongs = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return(
        <>
            <h5>Lists nhạc của bạn</h5>
            <div className="backgroundNoise">
                {posts.map((post) => (
                    <div className="noise-option" key={post._id}>
                        <UseMusicDataSongs post = {post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PostUseDataSongs;