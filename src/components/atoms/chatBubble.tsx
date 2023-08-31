import { black, colors } from 'constants/colors';
import React from 'react';
import { View, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { TextView } from './text';

interface IProps {
    message: string,
    style?: ViewStyle,
    passedTextStyle?: TextStyle | TextStyle[]
}

const ChatBubble: React.FC<IProps> = (props) => {
    const { message, style, passedTextStyle = {} } = props;
    return (
        <View style={[styles.container, style]}>
            <TextView title={message} style={[styles.defaultText, passedTextStyle]} textType="extraLight" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 232,
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
        backgroundColor: black.black6,
    },
    defaultText: {
        color: black.black3,
        lineHeight: 20,
    }
});

export default ChatBubble;
