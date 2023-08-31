import React from "react";
import {
    FlatList,
} from 'react-native';
import { Chat as ChatItem, ChatList } from "types/chat";
import { LeftMessageBubble } from "@components/molecules/LeftMessageBubble";
import { RightMessageBubble } from "@components/molecules/RightMessageBubble";

interface Iprops {
    chatList: ChatList
}

export const Chat: React.FC<Iprops> = (props) => {
    const { chatList } = props;
    let currentUser = '234';

    const renderChatItem = ({ item }: { item: ChatItem }): React.ReactNode => {
        const isCurrentUser = item.userId === currentUser;
        if (isCurrentUser) {
            return (
                <RightMessageBubble
                    message={item.message}
                    dateAndTime={item.date}
                />
            )
        }
        return (
            <LeftMessageBubble
                message={item.message}
                dateAndTime={item.date}
            />
        )
    }

    return (
        <>
            <FlatList
                data={chatList}
                renderItem={renderChatItem}
                keyExtractor={item => item.messageId}
            // contentContainerStyle={}
            />
        </>
    )
}