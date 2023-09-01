import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { BookingData, Room } from 'types/user';
import { RoomItem } from '@components/organisms/room';
import { Header } from '@components/organisms/header';
import { UserItem } from '@components/organisms/user';
import { CustomButton } from '@components/atoms/button';
import { black, colors } from 'constants/colors';
import { BottomSheet } from '@components/molecules/bottomSheet';
import { Chat } from '@components/pages/chat';
import { ChatFooter } from '@components/molecules/chatFooter';
import { Separator } from '@components/atoms/separator';
import { screenHeight, screenWidth } from 'utils/dimension';
import { heightPixel, widthPixel } from 'utils/normalizeUtils';
import Vector from '@assets/images/vector.svg';
import Vector151 from '@assets/images/vector151.svg';
import julie from '@assets/images/julie.png';

import bookings from 'db/bookingData.json';
import chatData from 'db/chat.json';

const HomeScreen: React.FC = () => {

    const [expanded, setExpanded] = useState<string[]>([]);
    const [isBottomSheetVisible, setIsBottomSheetVisible] = useState<boolean>(false);

    const renderRoomList = ({ item, index }: { item: Room, index: number }): React.ReactNode => {
        return (
            <View style={styles.roomListContainer}>
                <View style={styles.vector}>
                    {index == -1 ?
                        <Vector /> : <Vector151 />
                    }

                </View>
                <View style={styles.roomItem}>
                    <RoomItem data={item} />
                </View>
            </View>
        )
    }

    const handleShowMore = (id: string): void => {
        setExpanded([...expanded, id]);
    }

    const showShowMoreButton = (size: number, userId: string): React.ReactNode => {
        return (
            <View style={styles.showMoreButton}>
                <CustomButton
                    textStyle={styles.buttonTextStyle}
                    title={`Show ${size - 1} more bookings`}
                    onPress={() => handleShowMore(userId)}
                    textsize="extraSmall"
                    textType='bold'
                />
            </View>
        )
    }

    const renderUserList = ({ item }: { item: BookingData }): React.ReactNode => {
        const userId = item.user.userId;
        const bookingsList = item.bookings;
        return (
            <View style={styles.listContainer}>
                <UserItem item={item.user}
                />
                <View>
                    <View style={{ marginTop: 12 }}>
                        {renderRoomList({ item: bookingsList[0], index: -1 })}
                    </View>

                    {!expanded.includes(userId) &&
                        showShowMoreButton(bookingsList.length, userId)
                    }
                    {expanded.includes(userId) ?

                        <FlatList
                            data={item.bookings.slice(1, bookingsList.length)}
                            renderItem={renderRoomList}
                            keyExtractor={item => item.id}
                        />

                        : null
                    }
                </View>
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
        marginTop: 16,
        width: screenWidth * 0.74,
        alignSelf: 'center',
        marginLeft: 20
    },
    roomListContainer: {
        marginTop: 4,
        flexDirection: 'row',
        marginLeft: 18
    },
    singleRoomItem: {
        alignItems: 'center',
        marginLeft: 52,
        marginRight: 24
    },
    buttonTextStyle: {
        lineHeight: 18
    },
    vector: {
        bottom: heightPixel(20),
        position: 'absolute'
    },
    roomItem: { marginLeft: 26 }
})

export default HomeScreen;