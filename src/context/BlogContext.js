import createDataContext from './createDataContext';

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

export const {Context, Provider} = createDataContext(
    reducer,
    {addBlogPost, deleteBlogPost},
    []
)
