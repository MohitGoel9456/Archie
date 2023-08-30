import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BLUE_MAIN } from 'constants/colors';
import NavIcon from 'assets/images/navIcon.svg'

export const NavigationIcon = () => {
    return (
        <>
            <View style={styles.container}>
                <NavIcon />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BLUE_MAIN,
        width: 44,
        height: 40,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        gap: 8,
        alignItems: 'center',
        justifyContent: "center",
        margin: 20
    }
})