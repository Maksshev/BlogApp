import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';


const ShowScreen = (props) => {

    const {state} = useContext(BlogContext)

    const blogPost = state.find(blogPost => blogPost.id === props.navigation.getParam('id'));

    return (
        <View>
            <Text>
                {blogPost.title}
            </Text>
            <Text>
                {blogPost.content}
            </Text>
        </View>
    )
};

ShowScreen.navigationOptions = (props) => (
    {
        headerRight: () => {

            const innerStyles = StyleSheet.create({
                editSign: {
                    paddingRight: 10
                }
            });

            return (
                <TouchableOpacity
                    onPress={
                        () => {
                            props.navigation.navigate('EditScreen', {id: props.navigation.getParam('id')})
                        }
                    }
                    style={innerStyles.editSign}
                >
                    <Feather
                        name="edit"
                        size={25}
                    />
                </TouchableOpacity>
            )
        }
    }
)

const styles = StyleSheet.create({});

export default ShowScreen;
