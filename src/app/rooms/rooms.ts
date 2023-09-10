export interface Room {
    totalRooms: number;
    availableRooms : number;
    bookedRooms : number;
}

export interface RoomList{
    Number: number,
    Type: string,
    Price: number,
    amenities: string[],
    ChekingTime: Date
}