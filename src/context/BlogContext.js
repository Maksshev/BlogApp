import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOGPOST':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'DELETE_BLOGPOST':
            return state.filter(blogpost => blogpost.id !== action.payload);
        case 'EDIT_BLOGPOST':
            const newState = [...state];
            const blogPostIndex = newState.findIndex(blogpost => action.payload.id = blogpost.id);

            newState[blogPostIndex] = action.payload;

            return newState;
        case 'GET_BLOGPOSTS':
            return action.payload;
        default:
            return state;
    }
}


const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({
            type: 'ADD_BLOGPOST',
            payload: {
                title,
                content
            }
        })

        callback();
    }
};

const deleteBlogPost = (dispatch) => {
    return (blogPostId) => dispatch({
        type: 'DELETE_BLOGPOST',
        payload: blogPostId
    })
}

const editBlogPost = (dispatch) => {
    return (editedBlogPost, callback) => {
        dispatch({
            type: 'EDIT_BLOGPOST',
            payload: editedBlogPost
        })

        callback();
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        try {
            const blogPosts = await jsonServer.get('/blogposts');
            dispatch({
                type: 'GET_BLOGPOSTS',
                payload: blogPosts.data
            })
        } catch (e) {
            //TODO: Add error handling
            console.log(e);
        }
    }
}

//TODO: Remove inital state, make it []
export const {Context, Provider} = createDataContext(
    reducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    []
)
