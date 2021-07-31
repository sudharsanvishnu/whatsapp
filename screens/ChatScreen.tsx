import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
       
       <FlatList 
         style={{width: '100%'}}
         data={ChatRooms}
         renderItem={({ item }) => <ChatListItem chatRoom={item} />}
         keyExtractor={ ( item ) => item.id}
       />
        <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  }
});
