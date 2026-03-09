import { z } from "zod";
export declare const createMultiSessionSchema: z.ZodEffects<z.ZodObject<{
    title: z.ZodString;
    startTime: z.ZodString;
    duration: z.ZodNumber;
    maxParticipants: z.ZodDefault<z.ZodNumber>;
    securityConfig: z.ZodOptional<z.ZodObject<{
        browserLock: z.ZodDefault<z.ZodBoolean>;
        maxTabSwitches: z.ZodDefault<z.ZodNumber>;
        captureSnapshots: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        browserLock: boolean;
        maxTabSwitches: number;
        captureSnapshots: boolean;
    }, {
        browserLock?: boolean | undefined;
        maxTabSwitches?: number | undefined;
        captureSnapshots?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    startTime: string;
    duration: number;
    maxParticipants: number;
    securityConfig?: {
        browserLock: boolean;
        maxTabSwitches: number;
        captureSnapshots: boolean;
    } | undefined;
}, {
    title: string;
    startTime: string;
    duration: number;
    maxParticipants?: number | undefined;
    securityConfig?: {
        browserLock?: boolean | undefined;
        maxTabSwitches?: number | undefined;
        captureSnapshots?: boolean | undefined;
    } | undefined;
}>, {
    title: string;
    startTime: string;
    duration: number;
    maxParticipants: number;
    securityConfig?: {
        browserLock: boolean;
        maxTabSwitches: number;
        captureSnapshots: boolean;
    } | undefined;
}, {
    title: string;
    startTime: string;
    duration: number;
    maxParticipants?: number | undefined;
    securityConfig?: {
        browserLock?: boolean | undefined;
        maxTabSwitches?: number | undefined;
        captureSnapshots?: boolean | undefined;
    } | undefined;
}>;
export declare const updateSessionStatusSchema: z.ZodObject<{
    status: z.ZodEnum<["active", "ended", "cancelled"]>;
}, "strip", z.ZodTypeAny, {
    status: "active" | "ended" | "cancelled";
}, {
    status: "active" | "ended" | "cancelled";
}>;
export declare const generateQuestionsSchema: z.ZodEffects<z.ZodObject<{
    mcqCount: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>, number, string | undefined>, z.ZodNumber>;
    theoryCount: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodDefault<z.ZodString>, string, string | undefined>, number, string | undefined>, z.ZodNumber>;
    difficulty: z.ZodDefault<z.ZodEnum<["easy", "medium", "hard", "mixed"]>>;
    focusArea: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    mcqCount: number;
    theoryCount: number;
    difficulty: "easy" | "medium" | "hard" | "mixed";
    focusArea: string;
}, {
    mcqCount?: string | undefined;
    theoryCount?: string | undefined;
    difficulty?: "easy" | "medium" | "hard" | "mixed" | undefined;
    focusArea?: string | undefined;
}>, {
    mcqCount: number;
    theoryCount: number;
    difficulty: "easy" | "medium" | "hard" | "mixed";
    focusArea: string;
}, {
    mcqCount?: string | undefined;
    theoryCount?: string | undefined;
    difficulty?: "easy" | "medium" | "hard" | "mixed" | undefined;
    focusArea?: string | undefined;
}>;
export declare const joinSessionSchema: z.ZodObject<{
    inviteCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    inviteCode: string;
}, {
    inviteCode: string;
}>;
export type CreateMultiSessionInput = z.infer<typeof createMultiSessionSchema>;
export type UpdateSessionStatusInput = z.infer<typeof updateSessionStatusSchema>;
export type GenerateQuestionsInput = z.infer<typeof generateQuestionsSchema>;
export type JoinSessionInput = z.infer<typeof joinSessionSchema>;
//# sourceMappingURL=multiSessionValidationSchema.d.ts.map