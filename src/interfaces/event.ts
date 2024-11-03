export interface EventCardProps {
    event: {
        id: string;
        name: string;
        description: string;
        type: string;
        format: string;
        starts: Date;
        ends: Date;
        subs_starts: Date;
        subs_ends: Date;
        participants_limit: number;
        participants: { id: string }[];
    }
}
