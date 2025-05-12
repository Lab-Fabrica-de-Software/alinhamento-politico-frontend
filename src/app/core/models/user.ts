export interface User {
    id: number,
    name: string,
    photo: string,
    verified?: boolean,
    unreadNotifications?: number,
    partyId?: number, 
    partyName?: string,
    partyPosition?: string, 
}