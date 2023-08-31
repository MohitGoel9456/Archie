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
}

export const LeftMessageBubble: React.FC<IProps> = (props) => {

    const { message, passedStyle, dateAndTime } = props;

    return (
        <>
            {<View style={styles.imageContainer}>
                <PhotoCollection />
            </View>}
            <View style={[styles.container, passedStyle]}>
                <FriendLogo />
                <ChatBubble
                    style={styles.bubble}
                    message={message}
                />
            </View>
            <TextView
                style={styles.date}
                title={dateAndTime}
                textType={'extraLight'}
                textsize='xxs'
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    bubble: {
        marginLeft: 8
    },
    date: {
        color: black.black3,
        lineHeight: 16,
        marginLeft: 28,
        padding: 8,
    },
    imageContainer: { marginLeft: 28, marginBottom: 8 }
})