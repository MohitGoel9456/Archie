import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from 'constants/colors';
import NavIcon from 'assets/images/navIcon.svg'
import { screenHeight, screenWidth } from 'utils/dimension';

interface Iprops {
    onPress?: () => void;
}

export const NavigationIcon: React.FC<Iprops> = ({ onPress }) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <NavIcon />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blueMain,
        width: screenWidth * 0.106,
        height: screenHeight * 0.049,
        borderRadius: 8,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: "center",
    }
})