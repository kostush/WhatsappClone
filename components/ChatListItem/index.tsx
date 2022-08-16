import React from "react";
import styles from "./style";
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {ChatRoom} from "../../types";
import moment from "moment";
import {useNavigation} from "@react-navigation/native";
import ChatRooms from "../../data/ChatRooms";

export type ChatListItemProps ={
    chatRoom :ChatRoom
}

const ChatListItem = (props : ChatListItemProps) => {
    const { chatRoom } = props;
    const navigation = useNavigation();
    const  user = chatRoom.users[1];
    // console.log(user.imageUri);
    const onClick =() => {
       navigation.navigate('ChatRoom',{ id: chatRoom.id, name: user.name});
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{uri:user.imageUri}} style={styles.avatar}  />
                    <View style ={styles.midContainer}>
                        <Text style={styles.username}> {user.name}  </Text>
                        <Text style={styles.lastMessage}> {chatRoom.lastMessage.content} </Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.time}>
                        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                    </Text>
                </View>
           </View>
        </TouchableWithoutFeedback>

    )
}

export default ChatListItem