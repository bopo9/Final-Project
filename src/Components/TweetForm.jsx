import React, {Component, useEffect} from "react";

class TweetForm extends Component{

    constructor() {
        super();
        this.state = {
            content: ''
        }
    }

    onContentInput = e => {
        this.setState({
            content: e.target.value
        });
    };

    onTweetSubmit = () => {
        this.props.onSubmit(this.state)
        this.setState(
            {
                content: ''
            }
        )
    };


       render() {
           const { content } = this.state;
           return <div className="tweet__form">
               <label htmlFor="tweet-form" >Tweet</label>
               <textarea onInput={this.onContentInput} value={content} className="tweet__textArea isDark" placeholder={'What\'s new ?'} wrap={'hard'} maxLength={255} name="tweet-form"
                         id="tweet-form" cols="40" rows="10"/>
               <button onClick={this.onTweetSubmit} className={'tweet__btn btn-md btn-pink'}>Send</button>
           </div>
       }

}

export default TweetForm;