import { TextView } from '@components/atoms/text';
import { black } from 'constants/colors';
import React from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

interface Iprops {
    name: string,
    officeDescription: string,
    imageUrl?: string
}


export const UserItem: React.FC<Iprops> = (props) => {

    const { imageUrl, name, officeDescription } = props;

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} />
            </View>

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
        flexDirection: 'row'
    },
    imageContainer: {
        width: 40,
        height: 40,
        borderRadius: 12,
        overflow: 'hidden'
    },
    textContainer: {
        marginLeft: 8,
        alignItems: "flex-start"
    },
    description: {
        color: black.black3,
        marginTop: 4
    }
})