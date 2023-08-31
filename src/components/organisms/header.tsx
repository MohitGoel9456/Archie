import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import { TextView } from '@components/atoms/text';
import LogoSvg from "@assets/images/logo.svg";
import { PencilIcon } from '@components/atoms/pencilIcon';

interface IProps {
    onPress: () => void
}

export const Header: React.FC<IProps> = ({ onPress }) => {

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <LogoSvg />
                <TextView
                    style={styles.title}
                    title='Who is coming'
                    textType='bold'
                    textsize='large'
                />
            </View>
            <PencilIcon onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 4
    }
})