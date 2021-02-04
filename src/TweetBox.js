import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import { useState } from "react";
import db from "./firebase";

function TweetBox() {
    let [tweetMessage, setTweetMessage] = useState("");
    let [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            postId: Date.now(),
            displayName: "Kamrul Islam Shahin",
            avatar: "https://avatars.githubusercontent.com/u/44506464?s=60&v=4",
            userName: "sss123",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/44506464?s=60&v=4" />
                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"
                        type=""
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image url"
                    type=""
                />
                <Button onClick={sendTweet} className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
