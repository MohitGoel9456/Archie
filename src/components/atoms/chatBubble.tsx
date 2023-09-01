import React from 'react';
import { black } from 'constants/colors';
import { StyleSheet, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { TextView } from './text';
import { pixelSizeHorizontal, pixelSizeVertical, widthPixel } from 'utils/normalizeUtils';

interface IProps {
    message: string,
    style?: ViewStyle,
    passedTextStyle?: TextStyle | TextStyle[]
    onPress?: () => void;
}

const ChatBubble: React.FC<IProps> = (props) => {
    const { message, style, passedTextStyle = {}, onPress } = props;
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <TextView title={message} style={[styles.defaultText, passedTextStyle]} textType="extraLight" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: widthPixel(232),
        paddingVertical: pixelSizeVertical(12),
        paddingHorizontal: pixelSizeHorizontal(12),
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
