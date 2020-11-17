import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = (props) => {

    const [title, setTitle] = useState(props.initialValues.title);
    const [content, setContent] = useState(props.initialValues.content);

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
                onPress={
                    () => {
                        props.onSubmit(title, content)
                    }
                }
            />
        </View>
    )
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

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

export default BlogPostForm;
