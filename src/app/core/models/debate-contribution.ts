export interface DebateContribution {
    id: number;
    userName: string;
    userPhoto: string;
    userParty?: string;
    userPosition?: string;
    userVerified?: boolean;
    openDate: Date;
    opinion: boolean;
    ups: number;
    downs: number;
    text: string;
    userReaction: 'up' | 'down' | undefined;
}
