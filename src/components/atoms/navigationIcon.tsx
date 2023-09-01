import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from 'constants/colors';
import { heightPixel, widthPixel } from 'utils/normalizeUtils';
import { NavigationLogo } from '@assets/images/navigationLogo';

interface Iprops {
    onPress?: () => void;
}

export const NavigationIcon: React.FC<Iprops> = ({ onPress }) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <NavigationLogo />
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