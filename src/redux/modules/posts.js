import {connect} from "react-redux";

const moduleName = 'posts';

const GET_POSTS = `${moduleName}/GET_POSTS`;
const DELETE_POST = `${moduleName}/DELETE_POST`;
const CREATE_POST = `${moduleName}/CREATE_POST`;
const GET_POSTS_PROFILE = `${moduleName}/GET_POSTS_PROFILE`;

const defaultState = {
    posts: [],
};



export default (state = {defaultState}, { type, payload }) => {
  switch (type){
      case GET_POSTS:
          return { ...state, posts: payload };
      case DELETE_POST:
          return { ...state, posts: state.posts.filter(post => post._id !== payload._id)};
      case CREATE_POST:
          return { ...state, posts: [...state.posts, payload] };
      case GET_POSTS_PROFILE:
          return { ...state, posts: payload.data.filter(post => post.authorId.email === payload.email)};
      default:
          return state;
  }
};

export const getProfilePosts = (email) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        await fetch('http://143.198.136.212/api/tweets/public'
        )
            .then(response => response.json())
            .then((data) => dispatch({ type: GET_POSTS_PROFILE, payload: {data, email}}));
    } catch (error) {
        console.log(error)
    }
};



export const getPosts = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        await fetch('http://143.198.136.212/api/tweets/public'
        )
            .then(response => response.json())
            .then((data) => dispatch({ type: GET_POSTS, payload: data}));
    } catch (error) {
        console.log(error)
    }
}

export const createPost = ({content}) => async (dispatch) => {
    try {
        const userData = JSON.parse(localStorage.getItem('userData'));

        fetch('http://143.198.136.212/api/tweets', {
            method: 'POST',
            body: JSON.stringify({
                content
            }),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${userData.token}`
            }
        })
            .then(response => response.json())
            .then((data) => dispatch({ type: CREATE_POST, payload: data}));
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const userData = JSON.parse(localStorage.getItem('userData'));

        await

            fetch(`http://143.198.136.212/api/tweets/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${userData.token}`
                }
            })
                .then(e => e.json())
                .then(e => {
                    if (e.ok){
                        dispatch({ type: DELETE_POST, payload: { id } });
                    }
                });
    } catch (error) {

    }
}

