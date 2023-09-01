import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from 'constants/colors';
import { heightPixel, widthPixel } from 'utils/normalizeUtils';
import { PencilLogo } from '@assets/images/pencilLogo';

interface Iprops {
    onPress?: () => void;
}

export const PencilIcon: React.FC<Iprops> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <PencilLogo />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blueMain,
        width: widthPixel(40),
        height: heightPixel(40),
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: "center",
    }
})