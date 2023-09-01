import { TextView } from '@components/atoms/text';
import { black } from 'constants/colors';
import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import UserIcon from "@assets/images/user.svg";
import { User } from 'types/user';

interface Iprops {
    item: User,
}


export const UserItem: React.FC<Iprops> = (props) => {
    const { imageUrl, name, officeDescription } = props.item;

    return (
        <View style={styles.container}>
            <UserIcon />

            <View style={styles.textContainer}>
                <TextView
                    title={name}
                    textType='bold'
                />
                <TextView
                    style={styles.description}
                    title={officeDescription}
                    textType='extraLight'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        marginLeft: 8,
        alignItems: "flex-start"
    },
    description: {
        color: black.black3,
        marginTop: 4,
        opacity: 0.8
    }
})