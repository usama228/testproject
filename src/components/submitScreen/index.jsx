import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import { onSubmit } from "../../apiServices/graphQl/submit";

const SubmitScreen = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [image_url, setImageUrl] = useState('');
    const handleSubmit = async () => {
        setIsLoading(true)
        await onSubmit({ name, image_url, comment })
        setComment('')
        setName('')
        setImageUrl('')
        setIsLoading(false)
    }
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor={'#B8B9C1'}
                onChangeText={setName}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder="Comment"
                placeholderTextColor={'#B8B9C1'}
                onChangeText={setComment}
                value={comment}
            />
            <TextInput
                style={styles.input}
                placeholder="ImageUrl"
                placeholderTextColor={'#B8B9C1'}
                onChangeText={setImageUrl}
                value={image_url}
            />

            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                {isLoading ?
                    <ActivityIndicator color={"#fff"} />
                    :
                    <Text style={styles.btnText}>ADD</Text>
                }
            </TouchableOpacity>
        </View>
    )
}
export default SubmitScreen

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        marginHorizontal: 20,
        borderRadius: 5,
        borderColor: '#DEDEDE',
        backgroundColor: 'white',
        paddingLeft: 20,
        marginTop: 10
    },
    view: {
        flex: 1,
        backgroundColor: '#F1F1F1'
    },
    btn: {
        backgroundColor: '#3F2AD7',
        marginHorizontal: 20,
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20
    },
    btnText: {
        color: 'white',
    }
})