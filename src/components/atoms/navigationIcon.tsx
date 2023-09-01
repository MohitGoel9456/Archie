import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from 'constants/colors';
import NavIcon from 'assets/images/navIcon.svg'
import { heightPixel, widthPixel } from 'utils/normalizeUtils';

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
        width: widthPixel(40),
        height: heightPixel(40),
        borderRadius: 8,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: "center",
    }
})