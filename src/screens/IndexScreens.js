import React, {useContext} from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';
import {Context as BlogContext} from "../context/BlogContext";
import {object} from "../helpers/object";

const IndexScreens = (props) => {

    const {state, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>
                Index Screen
            </Text>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (<Text>
                        {item.title}
                    </Text>)
                }}
            />
            <Button
                onPress={addBlogPost}
                title="Add blogpost"
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default IndexScreens;
