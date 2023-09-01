import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ViewStyle,
    TextStyle,
    ImageStyle
} from 'react-native';
import { TextView } from '@components/atoms/text';
import { PencilIcon } from '@components/atoms/pencilIcon';
import headerLogo from '@assets/images/image.png';
import { heightPixel, widthPixel } from 'utils/normalizeUtils';

interface IProps {
    onPress?: () => void;
    logoStyle?: ImageStyle;
    textStyle?: TextStyle | undefined;
    isShowPencilIcon?: boolean;
    containerStyles?: ViewStyle;
    title?: string;
    logo?: string;
}

export const Header: React.FC<IProps> = (props) => {
    const { onPress, isShowPencilIcon = true, textStyle, logoStyle, containerStyles, title, logo } = props;
    const finalTitle = title ? title : 'Who is coming';
    const finalLogo = logo ? logo : headerLogo;
    return (
        <View style={[styles.container, containerStyles]}>
            <View style={styles.leftContainer}>
                <Image style={[styles.logo, logoStyle]}
                    source={finalLogo}
                />
                <TextView
                    style={[styles.title, textStyle]}
                    title={finalTitle}
                    textType='bold'
                    textsize='large'
                />
            </View>
            {isShowPencilIcon && <PencilIcon onPress={onPress} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: heightPixel(44),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 4,
        lineHeight: 24
    },
    logo: {
        width: widthPixel(40),
        height: heightPixel(40),
    }
})