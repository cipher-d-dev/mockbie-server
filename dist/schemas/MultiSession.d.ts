import mongoose, { type Document, type Model } from "mongoose";
export interface ICheatingIncident {
    type: string;
    severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
    timestamp: Date;
    metadata?: string;
}
export interface IParticipant {
    userId: mongoose.Types.ObjectId;
    studentName: string;
    email: string;
    matriculationNumber?: string;
    joinedAt: Date;
    submittedAt?: Date;
    isKicked: boolean;
    kickReason?: string;
    isFlagged: boolean;
    warnCount: number;
    cheatingIncidents: ICheatingIncident[];
    totalIncidentCount: number;
    answers: Array<{
        questionId: string;
        selectedOption: string | string[];
        answeredAt: Date;
    }>;
    score?: number;
    percentage?: number;
    passed?: boolean;
}
export interface IMultiSession extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    createdBy: mongoose.Types.ObjectId;
    inviteCode: string;
    questions: Array<{
        questionText: string;
        options: string[];
        correctAnswer: string;
        explanation: string;
        type: "mcq" | "theory";
        points: number;
    }>;
    shuffleSeed: number;
    startTime: Date;
    duration: number;
    securityConfig: {
        browserLock: boolean;
        maxTabSwitches: number;
        captureSnapshots: boolean;
    };
    status: "draft" | "published" | "active" | "ended" | "cancelled";
    sourcePdf?: {
        name: string;
        url: string;
        publicId: string;
    };
    participants: IParticipant[];
    scoresReleased: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface IMultiSessionModel extends Model<IMultiSession> {
}
export declare const MultiSession: IMultiSessionModel;
//# sourceMappingURL=MultiSession.d.ts.map