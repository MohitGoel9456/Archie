export interface Chat {
    messageId: string,
    message: string,
    date: string,
    time: string,
    userId: string,
    userImageUrl: boolean,
    userName: string
}

export interface ChatList {
    list: Chat[]
}