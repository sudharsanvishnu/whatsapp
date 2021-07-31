/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName , View} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors';
import { Entypo, EvilIcons, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Contacts from '../screens/Contacts';
// import { } from 'react-native-pager-view';
// import { } from 'react-native-reanimated';
// import { } from 'react-native-tab-view';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontSize: 20
      }
    }}>
      <Stack.Screen 
        name="Root" 
        component={MainTabNavigator} 
        options={{
           title:'Whatsapp',
           headerRight: () => {
             return <View style={{
               flexDirection: 'row',
               width: 60, 
               alignItems: 'center', 
               justifyContent: 'space-between', 
               marginRight: 5
               }}>
               <EvilIcons name="search" size={28} color="white" />
               <Entypo name="dots-three-vertical" size={20} color="white" />
             </View>;
           }
      }}
        />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({ route }) =>({
          title: route.params.name,
          // title: route.params.imageUri
          headerRight: () => {
            return <View style={{
              flexDirection: 'row',
              width: 120, 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              marginRight: 5
              }}>
              <MaterialIcons name="call" size={26} color="white" />
              <FontAwesome5 name="video" size={20} color="white" />
              <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
            </View>;
          }
        })} 
        />
        <Stack.Screen
            name="Contacts" 
            component={Contacts} 
            options={{ title: 'select contact' }} 
              />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
