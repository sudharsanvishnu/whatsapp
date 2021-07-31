import React from 'react';
import { Text, View , ImageBackground} from  'react-native';
import { useRoute } from '@react-navigation/native';
import ChatMessage from '../components/ChatMessage';
import { FlatList } from 'react-native-gesture-handler';
import ChatRoomData from '../data/Chats'
import BG from '../assets/images/BG.png';
import InputBox from '../components/InputBox';

const ChatRoomScreen = () => {

    const route = useRoute();

   
    return(
       <ImageBackground  style={{width: '100%', height: '100%'}} source = {BG}>
           <FlatList
        data={ChatRoomData.messages}
        renderItem={({item }) => <ChatMessage message={item}/>}
        keyExtractor={(item) => item.id}
        inverted
       />
       <InputBox/>
       </ImageBackground>
    )
};

export default ChatRoomScreen;