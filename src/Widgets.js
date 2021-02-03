import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's trending</h2>
                <TwitterTweetEmbed tweetId="1356998095733579776" />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="UWBadgers"
                    options={{ height: 600 }}
                />
            </div>
        </div>
    );
}

export default Widgets;
