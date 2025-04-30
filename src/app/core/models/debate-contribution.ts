export interface DebateContribution {
    id: number;
    userName: string;
    userPhoto: string;
    userParty?: string;
    userPosition?: string;
    userVerified?: boolean;
    openDate: Date;
    opinion: boolean;
    likes: number;
    dislikes: number;
    text: string;
}