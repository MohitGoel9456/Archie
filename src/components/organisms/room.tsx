import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Room } from 'types/user';
import { NavigationIcon } from '@components/atoms/navigationIcon';
import { TextView } from '@components/atoms/text';
import { black } from 'constants/colors';
import RoomIcon from '@assets/images/room.svg';
import { screenWidth } from 'utils/dimension';

export interface Iprops {
    data: Room
}

export const RoomItem: React.FC<Iprops> = (props) => {

    const { name, dateTime } = props.data;

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <RoomIcon />

                <View style={styles.textContainer}>
                    <TextView
                        style={styles.textName}
                        title={name}
                        textType='bold'
                    />
                    <TextView
                        style={styles.description}
                        title={dateTime}
                        textType='extraLight'
                        textsize='extraSmall'
                    />
                </View>
            </View>
            <NavigationIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: screenWidth * 0.74,
    },
    textContainer: {
        marginLeft: 8,
        alignItems: "flex-start",
    },
    description: {
        color: black.black3,
        marginTop: 4,
    },
    textName: {
        lineHeight: 18
    },
    subContainer: {
        flexDirection: 'row'
    }
})