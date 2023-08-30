import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BLUE_MAIN } from 'constants/colors';
import Pencil from 'assets/images/pencil.svg'

export const PencilIcon = () => {
    return (
        <>
            <View style={styles.container}>
                <Pencil />
            </View>
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