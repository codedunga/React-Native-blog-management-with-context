import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import BlogContext from '../context/BlogContext'
import SingleBlog from '../components/SingleBlog'
import { Entypo } from '@expo/vector-icons';

const HomeScreen = () => {
    const { data, deleteBlog } = useContext(BlogContext)
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => {
                        navigation.navigate('AddNew')
                    }}
                >
                    <Entypo name="plus" size={30} color="black" />
                </TouchableOpacity>
            )
        })
    })

    return <View style={styles.container}>
        {
            data.length === 0
            ? <>
                <Text style={{alignSelf: 'center', marginTop: 25}}>0 Blogs.</Text>
                <Text style={{alignSelf: 'center', marginTop: 10}}>Click on + icon to add a new blog.</Text>
              </>
            : null
        }
        <FlatList
            data={data}
            keyExtractor={blog => blog.id}
            renderItem={({ item }) => {
                return <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => navigation.navigate('Show', {
                            blogTitle: item.title,
                            blogId: item.id,
                            blogContent: item.content
                        })}
                    >
                    <SingleBlog blogTitle={item.title} blogId={item.id} deleteBlog={deleteBlog} />
                    </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        
    },
    
})

export default HomeScreen ;