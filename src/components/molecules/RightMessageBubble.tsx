import React from 'react';
import {
    View,
    StyleSheet,
    ViewStyle,
    Image
} from 'react-native';
import ChatBubble from '@components/atoms/chatBubble';
import FriendLogo from '@assets/images/friend.svg';
import { TextView } from '@components/atoms/text';
import { black, colors } from 'constants/colors';
import PhotoCollection from '@assets/images/photoCollection.svg';

interface IProps {
    passedStyle?: ViewStyle,
    message: string,
    dateAndTime: string,
    isUser?: boolean,
    imageUrl?: boolean
}

export const RightMessageBubble: React.FC<IProps> = (props) => {

    const { message, passedStyle, dateAndTime, imageUrl } = props;

    return (
        <View style={styles.container}>
            {<View style={styles.imageContainer}>
                <PhotoCollection />
            </View>}
            <View style={[styles.messageContainer, passedStyle]}>
                <ChatBubble
                    style={styles.bubble}
                    message={message}
                    passedTextStyle={styles.chatText}
                />
                <FriendLogo />
            </View>
            <TextView
                style={styles.date}
                title={dateAndTime}
                textType={'extraLight'}
                textsize='xxs'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end'
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    bubble: {
        marginRight: 8,
        backgroundColor: colors.blueMain,
        marginLeft: 'auto',
    },
    date: {
        color: black.black3,
        lineHeight: 16,
        marginRight: 28,
        padding: 8,
        textAlign: 'right'
    },
    chatText: {
        color: '#fff'
    },
    imageContainer: { marginRight: 20, marginBottom: 8 }
})