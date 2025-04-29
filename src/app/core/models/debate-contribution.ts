export interface DebateContribution {
    id: number;
    userName: string;
    userPhoto: string;
    userParty?: string;
    userPosition?: string;
    openDate: Date;
    Opion: boolean;
    likes: number;
    dislikes: number;
    text: string;
}