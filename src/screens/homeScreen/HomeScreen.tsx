import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';
import bookings from 'db/bookingData.json';
import chatData from 'db/chat.json';
import { BookingData, Room } from 'types/user';
import { RoomItem } from '@components/organisms/room';
import { Header } from '@components/organisms/header';
import { UserItem } from '@components/organisms/user';
import { CustomButton } from '@components/atoms/button';
import { black } from 'constants/colors';
import { BottomSheet } from '@components/molecules/bottomSheet';
import { Chat } from '@components/pages/chat';

const HomeScreen: React.FC = () => {

    const [expanded, setExpanded] = useState<string[]>([]);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState<boolean>(false);

    const renderRoomList = ({ item }: { item: Room }): React.ReactNode => {
        return (
            <RoomItem data={item} />
        )
    }

    const handleShowMore = (id: string): void => {
        console.log("iuser id ", id);
        setExpanded([...expanded, id]);
    }

    const renderRoomWithShowMore = (item: Room, id: string): React.ReactNode => {
        return (
            <View style={{ alignItems: 'center' }}>
                <RoomItem data={item} />
                <CustomButton title="Show More" onPress={() => handleShowMore(id)} />
            </View>
        )
    }

    const renderUserList = ({ item }: { item: BookingData }): React.ReactNode => {
        const userId = item.user.userId;
        return (
            <View style={styles.listContainer}>
                <UserItem item={item.user} />
                {expanded.includes(userId) ?
                    <FlatList
                        data={item.bookings}
                        renderItem={renderRoomList}
                        keyExtractor={item => item.id}
                    />
                    :
                    renderRoomWithShowMore(item.bookings[0], userId)
                }
            </View>
        )
    }

    const onPencilIconPress = (): void => {
        setIsBottomSheetVisible(true);
    }

    const onBottomSheetClosePress = (): void => {
        setIsBottomSheetVisible(false);
    }

    const renderBottomSheet = (): React.ReactNode => {
        return (
            <Chat chatList={chatData} />
        )
    }

    return (
        <View style={styles.container}>
            <Header onPress={onPencilIconPress} />
            <FlatList
                data={bookings}
                renderItem={renderUserList}
                keyExtractor={item => item.user.userId}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            <BottomSheet
                visible={isBottomSheetVisible}
                onClose={onBottomSheetClosePress}
            >
                {renderBottomSheet()}
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    listContainer: {
        marginTop: 16
    },
    separator: {
        height: 1,
        backgroundColor: black.black5,
        marginTop: 16,
    }
})

export default HomeScreen;