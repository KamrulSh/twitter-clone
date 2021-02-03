import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/44506464?s=60&v=4" />
                    <input placeholder="What's happening?" type="" />
                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image url"
                    type=""
                />
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
