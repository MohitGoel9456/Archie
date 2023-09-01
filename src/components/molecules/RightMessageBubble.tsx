import React from 'react';
import {
    View,
    StyleSheet,
    ViewStyle,
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
    isDateVisible?: boolean;
    onPress?: () => void;
}

export const RightMessageBubble: React.FC<IProps> = (props) => {

    const { message, passedStyle, dateAndTime, imageUrl, isDateVisible = false, onPress } = props;

    return (
        <View style={styles.container}>
            {imageUrl && <View style={styles.imageContainer}>
                <PhotoCollection />
            </View>}
            <View style={[styles.messageContainer, passedStyle]}>
                <ChatBubble
                    style={styles.bubble}
                    message={message}
                    passedTextStyle={styles.chatText}
                    onPress={onPress}
                />
                <FriendLogo />
            </View>
            {isDateVisible &&
                <TextView
                    style={styles.date}
                    title={dateAndTime}
                    textType={'extraLight'}
                    textsize='xxs'
                />
            }
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
        marginBottom: 8
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
        paddingBottom: 8,
        paddingRight: 8,
        textAlign: 'right'
    },
    chatText: {
        color: '#fff'
    },
    imageContainer: { marginRight: 20, marginBottom: 8 }
})