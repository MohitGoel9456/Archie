import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';
import MockData from 'db/mockData.json';
import { BookingData, Room } from 'types/user';
import { RoomItem } from '@components/organisms/room';
import { Header } from '@components/organisms/header';
import { UserItem } from '@components/organisms/user';
import { CustomButton } from '@components/atoms/button';
import { black } from 'constants/colors';

const HomeScreen: React.FC = () => {

    const [expanded, setExpanded] = useState<string[]>([]);

    const renderRoomList = ({ item }: { item: Room }) => {
        return (
            <RoomItem data={item} />
        )
    }

    const handleShowMore = (id: string): void => {
        console.log("iuser id ", id);
        setExpanded([...expanded, id]);
    }

    const renderRoomWithShowMore = (item: Room, id: string) => {
        return (
            <>
                <RoomItem data={item} />
                <CustomButton title="Show More" onPress={() => handleShowMore(id)} />
            </>
        )
    }

    const renderUserList = ({ item }: { item: BookingData }) => {
        const userId = item.user.id;
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

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={MockData}
                renderItem={renderUserList}
                keyExtractor={item => item.user.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
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