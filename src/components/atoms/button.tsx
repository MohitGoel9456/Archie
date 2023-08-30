import React, { Children } from "react";
import {
    TouchableOpacity,
    TextStyle,
    StyleSheet
} from 'react-native';
import { TextView } from "./text";
import { BLUE_MAIN, EXTRA_LIGHT } from "constants/colors";

interface ButtonProps {
    textType?: 'regular' | 'bold' | 'light',
    textStyle?: TextStyle | TextStyle[],
    textsize?: 'small' | 'medium' | 'large',
    containerStyle?: React.CSSProperties,
    title: string,
    onPress?: any
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
        maxWidth: 280,
        height: 40,
        alignItems: 'center',
        backgroundColor: EXTRA_LIGHT,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8
    },
    text: {
        color: BLUE_MAIN
    }
});