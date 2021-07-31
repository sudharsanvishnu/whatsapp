import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

const InputBox = () => {

    const [message, setMessage ] = useState ('');

    const onMicrophonePress = () => {

    }

    const onSendPress = () => {

        // send message to back end
        setMessage( '');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress(); 
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name='laugh-beam' size={24} color='grey' />
                <TextInput 
                    placeholder='type a message'
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                    />
                <Entypo name= 'attachment' size={24} color='grey' style={styles.icon}/>
                {!message && <Fontisto name='camera' size={24} color='grey'style={styles.icon} />}
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message 
                  ? <MaterialCommunityIcons name='microphone' size={20} color= 'white' />
                  : <MaterialIcons name='send' size={20} color='white' />}  
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox
