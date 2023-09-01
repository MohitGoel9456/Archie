import React from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";
import { black } from "constants/colors";
import { fontPixel } from "utils/normalizeUtils";

interface TextViewProps {
    textType?: 'regular' | 'bold' | 'light' | 'extraLight';
    style?: TextStyle | undefined;
    textsize?: 'small' | 'medium' | 'large' | 'extraSmall' | 'xxs';
    title?: string;
}

export const TextView: React.FC<TextViewProps> = ({
    textType = 'light',
    style = {},
    textsize = 'small',
    title = '',
    ...props
}) => {
    const textStyle = {
        ...styles.default,
        ...styles[textType],
        ...styles[textsize],
        ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
    };

    return (
        <View>
            <Text style={[textStyle]} {...props}>
                {title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    regular: {
        fontWeight: "600"
    },
    bold: {
        fontWeight: "700"
    },
    light: {
        fontWeight: "500"
    },
    extraLight: {
        fontWeight: "400"
    },
    small: {
        fontSize: fontPixel(14),
        lineHeight: 14
    },
    medium: {
        fontSize: fontPixel(16),
        lineHeight: 16
    },
    large: {
        fontSize: fontPixel(18),
        lineHeight: 18
    },
    extraSmall: {
        fontSize: fontPixel(13),
        lineHeight: 13
    },
    xxs: {
        fontSize: fontPixel(11),
        lineHeight: 15
    },
    default: {
        fontFamily: 'sans-serif', //need to add required font style
        fontSize: fontPixel(14),
        lineHeight: 14,
        color: black.black1,
        fontWeight: "400"
    }
});
