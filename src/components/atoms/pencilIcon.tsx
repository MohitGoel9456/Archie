import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Pencil from 'assets/images/pencil.svg';
import { colors } from 'constants/colors';
import { heightPixel, widthPixel } from 'utils/normalizeUtils';

interface Iprops {
    onPress?: () => void;
}

export const PencilIcon: React.FC<Iprops> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Pencil />
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