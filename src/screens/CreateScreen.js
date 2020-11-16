import React, {useState, useContext} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';

const CreateScreen = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(BlogContext);

    const addBlogPostCallback = () => {
        props.navigation.navigate('IndexScreen');
    }

    const handleAddBlogPostButton = () => {
        addBlogPost(title, content, addBlogPostCallback );
    }

    return (
        <View>
            <Text
                style={styles.label}
            >
                Enter title:
            </Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.input}
            />
            <Text
                style={styles.label}
            >
                Enter Content:
            </Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.input}
            />
            <Button
                title="Add Blog Post"
                onPress={handleAddBlogPostButton}
            />
        </View>
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
