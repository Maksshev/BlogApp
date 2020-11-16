import React, {useContext} from 'react';
import {View, Text, FlatList, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {Context as BlogContext} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreens = (props) => {

    const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext);

    const openBlogPost = (blogPostId) => {
        props.navigation.navigate('ShowScreen', {id: blogPostId})
    }

    return (
        <View>
            <Button
                onPress={addBlogPost}
                title="Add blogpost"
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => openBlogPost(item.id)}
                        >
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};

IndexScreens.navigationOptions = (props) => (
    {
        headerRight: () => {

            const innerStyles = StyleSheet.create({
                plusSign: {
                    paddingRight: 10
                }
            });

            return (
                <TouchableOpacity
                    onPress={
                        () => {
                            props.navigation.navigate('CreateScreen')
                        }
                    }
                    style={innerStyles.plusSign}
                >
                    <Feather
                        name="plus"
                        size={30}
                    />
                </TouchableOpacity>
            )
        }
    }
)

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreens;
