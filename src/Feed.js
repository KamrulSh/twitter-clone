import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
    return (
        <div className="feed">
            <h2 className="feed__header">Home</h2>
            <TweetBox />
            <Post
                displayName="Shahin"
                avatar="https://avatars.githubusercontent.com/u/44506464?s=60&v=4"
                userName="@shahin333"
                verified
                text="Hello from the post"
                image="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
            />
        </div>
    );
}

export default Feed;
