import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import { black } from 'constants/colors';
import { heightPixel, pixelSizeHorizontal, pixelSizeVertical } from 'utils/normalizeUtils';
import { NavigationIcon } from '@components/atoms/navigationIcon';
import { CTALogo } from '@assets/images/ctaLogo';

export const ChatFooter: React.FC = () => {
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <CTALogo />
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
        marginBottom: 8,
        alignItems: 'flex-end'
    },
    input: {
        borderWidth: 1,
        borderColor: black.black6,
        backgroundColor: black.black6,
        flex: 1,
        borderRadius: 12,
        marginLeft: 8,
        height: heightPixel(40),
        padding: 10,
        paddingTop: 10
    }
})