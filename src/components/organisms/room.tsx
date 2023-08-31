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

export interface Iprops {
    data: Room
}

export const RoomItem: React.FC<Iprops> = (props) => {

    const { name, dateTime } = props.data;

    return (
        <View style={styles.container}>
            <RoomIcon style={{ flex: 0.5 }} />

            <View style={styles.textContainer}>
                <TextView
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
            <NavigationIcon style={{ flex: 0.5 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 48,
        marginRight: 8
    },
    textContainer: {
        marginLeft: 8,
        alignItems: "flex-start",
        flex: 7
    },
    description: {
        color: black.black3,
        marginTop: 4
    }
})