import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
    return (
        <div className="feed">
            <h2 className="feed__header">Home</h2>
            <TweetBox />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;
