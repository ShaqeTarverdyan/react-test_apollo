import store from '../store';
import client from '../client';
import gql from 'graphql-tag';

const SET_INFO = gql`
{
    allUsers {
        id
        name
        email
    }
}`;
const GET_INFO = gql`
{
    allUsers {
        id
        name
        email
    }
}`;

const initialState = {
    posts: [],
    post: { name: '', email: '' }
}

const dispatchNewsReceived = (news) => {
    store.dispatch({ type: 'USERS_RECIEVED', payload: news })
}

// const dispatchNewsPost = (news) => {
//     store.dispatch({type:'USERS_POST',payload:news})
// }

const reducer = (state = initialState, action) => {

    if (action.type === 'GET_USERS') {
        client.query({ query: GET_INFO }).then(result => {
            dispatchNewsReceived(result.data.allUsers)
        })
    }
    else if (action.type === 'USERS_RECIEVED') {
        return { ...state, posts: action.payload }
    }
    else if (action.type === 'DELETE_ITEM') {
        const remainder = state.posts.filter(item => item.id !== action.deletedItemId);
        console.log(remainder)
        return { ...state, posts: remainder }
    }
    else if (action.type === 'UPDATE_POST') {
        const event = action.payload;
        const newPost = { ...state.post, [event.target.name]: event.target.value };
        console.log(newPost);
        return { ...state, post: newPost }
    }
    else if (action.type === 'ADD_POST') {
        const dataPosts = [...state.posts,
        {
            id: state.posts.length + 1,
            name: state.post.name,
            email: state.post.email
        }
        ]
        return { ...state, posts: dataPosts, post: { name: '', email: '' } }
        // client.mutate({ mutate:SET_INFO }).then(result => {

        // })
    }
    else {
        return state
    }

}

export default reducer;