import React, { useState } from "react";
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

    const [showDateTimeforMessage, setShowDateTimeforMessage] = useState<string[]>([]);

    const { chatList } = props;
    let currentUser = '234';

    const handleOnPressOnMessage = (messageId: string) => {
        if (!showDateTimeforMessage.includes())
            setShowDateTimeforMessage([...showDateTimeforMessage, messageId]);
    }

    const renderChatItem = ({ item }: { item: ChatItem }): React.ReactNode => {
        const isCurrentUser = item.userId === currentUser;
        if (isCurrentUser) {
            return (
                <RightMessageBubble
                    message={item.message}
                    dateAndTime={item.date}
                    imageUrl={item.userImageUrl}
                    onPress={() => handleOnPressOnMessage(item.messageId)}
                    isDateVisible={showDateTimeforMessage.includes(item.messageId)}
                />
            )
        }
        return (
            <LeftMessageBubble
                message={item.message}
                dateAndTime={item.date}
                imageUrl={item.userImageUrl}
                onPress={() => handleOnPressOnMessage(item.messageId)}
                isDateVisible={showDateTimeforMessage.includes(item.messageId)}
            />
        )
    }

    return (
        <>
            <FlatList
                data={chatList}
                renderItem={renderChatItem}
                keyExtractor={item => item.messageId}
            />
        </>
    )
}