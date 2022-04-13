import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ route }) => {
    const { blogTitle, blogId, blogContent } = route.params

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: `${blogTitle}`
        })
    })

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.navigate('Edit', { id: blogId })}
                >
                    <FontAwesome name="edit" size={24} color="black" />
                </TouchableOpacity>
            )
        })
    })

    return <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={{fontWeight: 'bold'}}>{blogTitle}</Text>
        </View>
        <View style={styles.contentContainer}>
            <Text>{blogContent}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        
    },
    titleContainer: {
        margin: 5,
        marginBottom: -2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: 'lightgrey',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        margin: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'lightgrey',
        padding: 10
    }
})

export default ShowScreen ;