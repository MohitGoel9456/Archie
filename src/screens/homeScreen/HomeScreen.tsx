import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import bookings from 'db/bookingData.json';
import chatData from 'db/chat.json';
import { BookingData, Room } from 'types/user';
import { RoomItem } from '@components/organisms/room';
import { Header } from '@components/organisms/header';
import { UserItem } from '@components/organisms/user';
import { CustomButton } from '@components/atoms/button';
import { black, colors } from 'constants/colors';
import { BottomSheet } from '@components/molecules/bottomSheet';
import { Chat } from '@components/pages/chat';
import julie from '@assets/images/julie.png';
import { ChatFooter } from '@components/molecules/chatFooter';
import { Separator } from '@components/atoms/separator';
import { screenHeight } from 'utils/dimension';
import { heightPixel, widthPixel } from 'utils/normalizeUtils';

const HomeScreen: React.FC = () => {

    const [expanded, setExpanded] = useState<string[]>([]);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState<boolean>(false);

    const renderRoomList = ({ item }: { item: Room }): React.ReactNode => {
        return (
            <View style={styles.roomListContainer}>
                <RoomItem data={item} />
            </View>
        )
    }

    const handleShowMore = (id: string): void => {
        setExpanded([...expanded, id]);
    }

    const renderRoomWithShowMore = (item: Room, id: string): React.ReactNode => {
        return (
            <View style={styles.singleRoomItem}>
                <RoomItem data={item} />
                <View style={styles.showMoreButton}>
                    <CustomButton
                        textStyle={styles.buttonTextStyle}
                        title="Show 2 more bookings"
                        onPress={() => handleShowMore(id)}
                        textsize="extraSmall"
                        textType='bold'
                    />
                </View>
            </View>
        )
    }

    const renderUserList = ({ item }: { item: BookingData }): React.ReactNode => {
        const userId = item.user.userId;
        return (
            <View style={styles.listContainer}>
                <UserItem item={item.user}
                />
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
            <>
                <TouchableOpacity style={styles.homeIndicator} onPress={onBottomSheetClosePress} />
                <Header
                    containerStyles={styles.headerContainer}
                    logoStyle={styles.headerLogo}
                    isShowPencilIcon={false}
                    title='julie'
                    logo={julie}
                />
                <Separator />
                <Chat chatList={chatData} />
                <Separator />
                <ChatFooter />
            </>
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
            {isBottomSheetVisible && <StatusBar barStyle="light-content" />}
            <BottomSheet
                visible={isBottomSheetVisible}
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
        backgroundColor: colors.separator,
        marginTop: 16,
    },
    headerContainer: {
        height: screenHeight * 0.07
    },
    headerLogo: {
        height: heightPixel(24),
        width: widthPixel(24),
        borderRadius: 8
    },
    homeIndicator: {
        width: widthPixel(32),
        height: heightPixel(5),
        alignSelf: 'center',
        backgroundColor: black.black5,
        marginTop: 8
    },
    showMoreButton: {
        marginTop: 8
    },
    roomListContainer: {
        marginTop: 4,
        marginLeft: 52
    },
    singleRoomItem: {
        alignItems: 'center',
        marginLeft: 52,
        marginRight: 24
    },
    buttonTextStyle: {
        lineHeight: 18
    }
})

export default HomeScreen;