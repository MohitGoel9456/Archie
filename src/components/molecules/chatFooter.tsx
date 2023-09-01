import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import CTAIcon from '@assets/images/cta.svg';
import { black } from 'constants/colors';
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical } from 'utils/normalizeUtils';
import { NavigationIcon } from '@components/atoms/navigationIcon';

export const ChatFooter: React.FC = () => {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <CTAIcon />
            <TextInput
                multiline
                value={text}
                placeholder='Aa'
                onChangeText={setText}
                style={styles.input}
                textAlignVertical="bottom"
            />
            {text.length > 0 && <NavigationIcon />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: pixelSizeHorizontal(8),
        paddingVertical: pixelSizeVertical(16),
        marginBottom: 8
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