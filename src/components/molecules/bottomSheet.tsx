import { screenHeight } from 'utils/dimension';
import React from 'react';
import {
    Modal,
    View,
    StyleSheet,
} from 'react-native';
import { black } from 'constants/colors';

interface IProps {
    visible: boolean;
    children: React.ReactNode;
}

export const BottomSheet: React.FC<IProps> = (props) => {
    const { visible, children } = props
    return (
        <Modal
            visible={visible}
            animationType="slide"
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: black.black1,
    },
    modalContent: {
        height: screenHeight * .9,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 16,
    }
});