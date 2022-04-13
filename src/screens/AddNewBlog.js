import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BlogContext from '../context/BlogContext'

const AddNewBlog = () => {

    const { addBlog } = useContext(BlogContext)
    const [newBlogTitle, setNewBlogTitle] = useState('')
    const [content, setContent] = useState('')

    const navigation = useNavigation()

    return <View style={styles.container}>
        <Text style={styles.textContainer}>Enter the blog title</Text>
        <TextInput
            style={styles.textInputContainer}
            placeholder='Blog Title'
            value={newBlogTitle}
            onChangeText={(updatedBlogTitle) => setNewBlogTitle(updatedBlogTitle)}
        />
        <Text style={styles.textContainer}>Enter blog Content</Text>
        <TextInput
            style={styles.textInputContainer}
            placeholder='Blog Content'
            value={content}
            onChangeText={(updatedContent) => setContent(updatedContent)}
        />
        <TouchableOpacity
            activeOpacity={0.4}
            style={{
                marginVertical: 10,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onPress={() => {
                addBlog(newBlogTitle, content)
                navigation.navigate('Home')
            }}
        >
            <Text style={{color: '#38b6ff'}}>Add Blog</Text>
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

export default AddNewBlog ;