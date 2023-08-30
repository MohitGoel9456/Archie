import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BLUE_MAIN } from 'constants/colors';
import Pencil from 'assets/images/pencil.svg';

interface Iprops {
    onPress?: () => void;
}

export const PencilIcon: React.FC<Iprops> = ({ onPress }) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Pencil />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BLUE_MAIN,
        width: 40,
        height: 40,
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 16,
        gap: 8,
        alignItems: 'center',
        justifyContent: "center",
        margin: 20
    }
})