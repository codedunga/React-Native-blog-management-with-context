import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BlogContext from '../context/BlogContext'

const EditScreen = ({ route }) => {

    const { id } = route.params
    const { data, editBlog } = useContext(BlogContext)
    const navigation = useNavigation()

    const blog = data.find(blogPost => blogPost.id === id)

    const [newTitle, setNewTitle] = useState(blog.title)
    const [newContent, setNewContent] = useState(blog.content)

    const index = data.findIndex(blog => blog.id === id)

    useEffect(() => {
        navigation.setOptions({
            title: `Edit blog with id ${id}`
        })
    })

    return <View style={styles.container}>
        <Text style={styles.textContainer}>Enter the blog title</Text>
        <TextInput
            style={styles.textInputContainer}
            placeholder={`Blog title ${index+1}`}
            value={newTitle}
            onChangeText={(updatedBlogTitle) => setNewTitle(updatedBlogTitle)}
        />
        <Text style={styles.textContainer}>Enter blog Content</Text>
        <TextInput
            style={styles.textInputContainer}
            placeholder={`Blog content ${index+1}`}
            value={newContent}
            onChangeText={(updatedContent) => setNewContent(updatedContent)}
        />
        <TouchableOpacity
            activeOpacity={0.4}
            style={{
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={() => {
                editBlog(id, newTitle, newContent)
                navigation.pop()
                navigation.pop()
            }}
        >
            <Text style={{color: '#38b6ff'}}>Save Changes</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        
    },
    textContainer: {
        marginHorizontal: 6,
        marginTop: 5
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        marginVertical: 15,
        marginHorizontal: 6,
        fontSize: 22,
        padding: 4,
        paddingLeft: 6
    }
    
})

export default EditScreen ;