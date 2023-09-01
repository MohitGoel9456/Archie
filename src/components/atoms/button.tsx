import React from "react";
import {
    TouchableOpacity,
    TextStyle,
    StyleSheet
} from 'react-native';
import { TextView } from "./text";
import { colors } from "constants/colors";
import { heightPixel } from "utils/normalizeUtils";

interface ButtonProps {
    textType?: 'regular' | 'bold' | 'light' | 'extraLight';
    textStyle?: TextStyle | TextStyle[],
    textsize?: 'small' | 'medium' | 'large' | 'extraSmall' | 'xxs';
    containerStyle?: React.CSSProperties,
    title: string,
    onPress?: () => void
}

export const CustomButton = (props: ButtonProps): JSX.Element => {
    const { textType, textStyle, textsize, title, containerStyle, onPress } = props;
    const passedStyles = { ...styles.container, ...containerStyle };
    const passedTextStyles = { ...styles.text, ...textStyle };
    return (
        <>
            <TouchableOpacity
                style={passedStyles}
                onPress={onPress}
                {...props}
            >
                <TextView
                    {...props}
                    style={passedTextStyles}
                    title={title}
                    textType={textType}
                    textsize={textsize}
                />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: heightPixel(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.extraLight,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    text: {
        color: colors.blueMain
    }
});