import { screenHeight } from 'utils/dimension';
import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { black } from 'constants/colors';

interface IProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const BottomSheet: React.FC<IProps> = (props) => {
    const { visible, onClose, children } = props
    return (
        <Modal
            style={styles.modalContent}
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
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
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },
    closeButtonText: {
        color: 'blue',
    },
});