import React from 'react';
import { View , Text, Image, TouchableWithoutFeedback }  from 'react-native';
import Users from '../../data/Users';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export type ContactChatListItemProps = {
    user: Users;

}

const ContactChatListItem = (props: ContactChatListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();

    const onClick = () => {
     // navigate to chat room with the seleced user
    }

    return( 
        <TouchableWithoutFeedback onPress={onClick} >
            <View style={styles.container}>
                <View style={styles.leftContainer}>
            
                    <Image source= {{uri: user.imageUri }} style={styles.avatar}/>
                
                    <View style={styles.midContainer}>
                        <Text style={styles.userName}>{user.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactChatListItem;