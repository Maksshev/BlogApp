import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BLOGPOST':
            return [...state, {
                id: action.payload.id,
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
    return async (title, content, callback) => {

        try {
            const response = await jsonServer.post('/blogposts', {
                title,
                content
            });

            dispatch({
                type: 'ADD_BLOGPOST',
                payload: {
                    title: response.data.title,
                    content: response.data.content,
                    id: response.data.id
                }
            })

            callback();
        } catch (e) {
            //TODO: Add error handling
            console.log(e);
        }
    }
};

const deleteBlogPost = (dispatch) => {
    return async (blogPostId) => {
        try {
            await jsonServer.delete(`/blogposts/${blogPostId}`);
            dispatch({
                type: 'DELETE_BLOGPOST',
                payload: blogPostId
            })
        } catch (e) {
            console.log(e);
        }
    }
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

export const {Context, Provider} = createDataContext(
    reducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    []
)
