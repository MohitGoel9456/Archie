export interface Room {
    id: string,
    name: string,
    dateTime: string
}


export interface User {
    userId: string,
    name: string,
    imageUrl?: string,
    officeDescription: string
}

export interface BookingData {
    user: User,
    bookings: Room[]
}

