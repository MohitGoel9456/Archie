import React from 'react';
import {
    View,
    StyleSheet,
    ViewStyle
} from 'react-native';
import ChatBubble from '@components/atoms/chatBubble';
import FriendLogo from '@assets/images/friend.svg';
import { TextView } from '@components/atoms/text';
import { black } from 'constants/colors';
import PhotoCollection from '@assets/images/photoCollection.svg';

interface IProps {
    passedStyle?: ViewStyle,
    message: string,
    dateAndTime: string,
    isUser?: boolean;
    imageUrl?: boolean;
    isDateVisible?: boolean;
    onPress?: () => void;
}

export const LeftMessageBubble: React.FC<IProps> = (props) => {

    const { message, passedStyle, dateAndTime, imageUrl, isDateVisible = false, onPress } = props;

    return (
        <>
            {imageUrl && <View style={styles.imageContainer}>
                <PhotoCollection />
            </View>}
            <View style={[styles.container, passedStyle]}>
                <FriendLogo />
                <ChatBubble
                    style={styles.bubble}
                    message={message}
                    onPress={onPress}
                />
            </View>
            {isDateVisible &&
                <TextView
                    style={styles.date}
                    title={dateAndTime}
                    textType={'extraLight'}
                    textsize='xxs'
                />}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 8
    },
    bubble: {
        marginLeft: 8
    },
    date: {
        color: black.black3,
        lineHeight: 16,
        marginLeft: 28,
        paddingBottom: 8,
        paddingLeft: 8
    },
    imageContainer: { marginLeft: 28, marginBottom: 8 }
})