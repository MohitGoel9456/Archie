import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from 'constants/colors';
import Pencil from 'assets/images/pencil.svg';
import { screenHeight, screenWidth } from 'utils/dimension';

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
        width: screenWidth * 0.106,
        height: screenHeight * 0.049,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: "center",
    }
})