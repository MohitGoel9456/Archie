import { NavigationIcon } from '@components/atoms/navigationIcon';
import { TextView } from '@components/atoms/text';
import { black } from 'constants/colors';
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export interface Iprops {
    roomName: string,
    dateAndTime: string
}

export const BookingItem: React.FC<Iprops> = (props) => {

    const { roomName, dateAndTime } = props;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            </View>

            <View style={styles.textContainer}>
                <TextView style={styles.linHeight}
                    title={roomName}
                    textType='bold'
                />
                <TextView
                    style={styles.description}
                    title={dateAndTime}
                    textType='extraLight'
                    textsize='extraSmall'
                />
            </View>
            <NavigationIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageContainer: {
        width: 40,
        height: 30
    },
    textContainer: {
        marginLeft: 8,
        alignItems: "flex-start"
    },
    description: {
        color: black.black3,
        marginTop: 4
    },
    linHeight: {
        lineHeight: 18
    }
})