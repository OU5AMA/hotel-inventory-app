export interface Room {
    totalRooms: number;
    availableRooms : number;
    bookedRooms : number;
}

export interface RoomList{
    Number: number;
    Type: string;
    Price: number;
    amenities: string[];
    CheckInTime: Date;
    CheckOutTime: Date;
    booked: boolean;
}