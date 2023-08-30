import React from "react";
import { View, Text, StyleSheet, TextStyle } from "react-native";

interface TextViewProps {
    textType?: 'regular' | 'bold' | 'light';
    style?: TextStyle | TextStyle[];
    textsize?: 'small' | 'medium' | 'large';
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
        fontFamily: 'sans-serif',
        fontWeight: "600"
    },
    bold: {
        fontFamily: 'sans-serif',
        fontWeight: "700"
    },
    light: {
        fontFamily: 'sans-serif',
        fontWeight: "500"
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
    default: {
        fontFamily: 'Cochin',
        fontSize: 14,
        color: "#000",
    }
});
