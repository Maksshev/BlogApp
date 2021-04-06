import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = (props) => {

    const {addBlogPost} = useContext(BlogContext);

    const navigationCallback = () => {
        props.navigation.navigate('IndexScreen');
    }

    const onSubmit = (title, content) => {
        addBlogPost(title, content, navigationCallback);
    }

    return (
        <BlogPostForm
            onSubmit={onSubmit}
        />
    )
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;
