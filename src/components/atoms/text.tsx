import React from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";
import { black } from "constants/colors";

interface TextViewProps {
    textType?: 'regular' | 'bold' | 'light' | 'extraLight';
    style?: TextStyle | TextStyle[];
    textsize?: 'small' | 'medium' | 'large' | 'extraSmall';
    title?: string;
}

export const TextView: React.FC<TextViewProps> = ({
    textType = 'regular',
    style = {},
    textsize = 'medium',
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
        fontSize: 14,
        lineHeight: 14
    },
    medium: {
        fontSize: 16,
        lineHeight: 16
    },
    large: {
        fontSize: 18,
        lineHeight: 18
    },
    extraSmall: {
        fontSize: 13,
        lineHeight: 13
    },
    default: {
        fontFamily: 'sans-serif',
        fontSize: 14,
        lineHeight: 14,
        color: black.black1,
    }
});
