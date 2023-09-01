import { screenHeight } from 'utils/dimension';
import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';
import { black } from 'constants/colors';

interface IProps {
    visible: boolean;
    children: React.ReactNode;
    onClose?: () => void;
}

export const BottomSheet: React.FC<IProps> = (props) => {
    const { visible, children, onClose } = props
    return (
        <Modal
            style={styles.modalContent}
            visible={visible}
            animationType="slide"
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {children}
                    </View>
                </View>
            </TouchableWithoutFeedback>
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