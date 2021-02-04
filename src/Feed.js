import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("postId", "desc")
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    return (
        <div className="feed">
            <h2 className="feed__header">Home</h2>
            <TweetBox />
            {posts.map((post) => (
                <Post
                    key={post.postId}
                    displayName={post.displayName}
                    avatar={post.avatar}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    date={new Date(post.postId).toLocaleString()}
                />
            ))}
        </div>
    );
}

export default Feed;
