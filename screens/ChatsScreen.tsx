import {FlatList, StyleSheet, Text, View} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import ChatListItem from "../components/ChatListItem";
import chatRooms from '../data/ChatRooms';
import ChatRooms from "../data/ChatRooms";

export default function ChatsScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container} >
     <FlatList
          data={ChatRooms}
          renderItem={({item}) => <ChatListItem chatRoom={item} />}
          keyExtractor={(item) => item.id}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
    //justifyContent: 'center',
  },

});
