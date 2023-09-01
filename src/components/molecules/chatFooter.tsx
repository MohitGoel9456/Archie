import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import CTAIcon from '@assets/images/cta.svg';
import { black } from 'constants/colors';
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical } from 'utils/normalizeUtils';

export const ChatFooter: React.FC = () => {
    const [text, setText] = useState("Aa");

    return (
        <View style={styles.container}>
            <CTAIcon />
            <TextInput
                multiline
                value={text}
                onChangeText={setText}
                style={styles.input}
                textAlignVertical="bottom"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: pixelSizeHorizontal(16),
        paddingVertical: pixelSizeVertical(16)
    },
    input: {
        borderWidth: 1,
        borderColor: black.black5,
        backgroundColor: black.black5,
        flex: 1,
        borderRadius: 12,
        marginLeft: 8,
        minHeight: heightPixel(40),
        padding: 10,
        paddingTop: 10
    }
})