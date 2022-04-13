import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const SingleBlog = ({ blogTitle, blogId, deleteBlog }) => {
    return <View style={styles.container}>
        <Text>(id: {blogId}) {blogTitle}</Text>
        <TouchableOpacity
            style={styles.iconContainer}
            activeOpacity={0.4}
            onPress={() => deleteBlog(blogId)}
        >
            <MaterialIcons name="delete" size={28} color="black" />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 50,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SingleBlog ;