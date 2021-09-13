import React from 'react';
import {connect} from "react-redux";

import { createPost as createPostAction } from "../redux/modules/posts";
import {TweetForm} from "./index";

const CreatePost = ({ createPost }) => {
    const onSubmit = (values) => {
        console.log('values', values)
        createPost(values);
    }

    return <TweetForm
        onSubmit={onSubmit}
    >
    </TweetForm>

};

export default connect(
    null,
    {
        createPost: createPostAction,
    }
)(CreatePost);