import React from "react";

const TweetForm = props => (
    <div className="tweet__form">
        <label htmlFor="tweet-form" >Tweet</label>
        <textarea className="tweet__textArea isDark" placeholder={'What\'s new ?'} wrap={'hard'} maxLength={255} name="tweet-form"
                  id="tweet-form" cols="40" rows="10"/>
        <button className={'tweet__btn btn_tweet'}>Send</button>
    </div>
);

export default TweetForm;