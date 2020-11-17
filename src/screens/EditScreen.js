import React, {useContext, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = (props) => {

    const {state, editBlogPost} = useContext(BlogContext);
    const blogPost = state.find(blogPost => blogPost.id === props.navigation.getParam('id'))

    const navigationCallback = () => {
        props.navigation.navigate('IndexScreen');
    }

    const onSubmit = (title, content) => {
        editBlogPost({title: title, content: content, id: blogPost.id}, navigationCallback);
    }

    return (
        <BlogPostForm
            initialValues={{
                title: blogPost.title,
                content: blogPost.content
            }}
            onSubmit={onSubmit}
        />
    )
};

const styles = StyleSheet.create({});

export default EditScreen;
