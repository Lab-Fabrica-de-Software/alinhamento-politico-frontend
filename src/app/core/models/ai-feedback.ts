export interface AiFeedback {
    id: number;
    aiTextId: number;
    feedback: boolean | null;
    text?: string;
}