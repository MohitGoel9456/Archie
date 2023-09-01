import React from "react";
import {
    StyleSheet,
    View
} from 'react-native';
import { colors } from "constants/colors";

export const Separator: React.FC = () => {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: colors.separator,
    }
})