import { Avatar } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import React from "react";
import "./Post.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post() {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://avatars.githubusercontent.com/u/44506464?s=60&v=4" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Shahin{" "}
                            <span className="post__headerSpecial">
                                <VerifiedUser className="post__badge" /> @shahin
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Hello from the post</p>
                    </div>
                </div>
                <img
                    src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
