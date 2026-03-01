import { z } from "zod";
export declare const quizSchema: z.ZodObject<{
    questions: z.ZodArray<z.ZodObject<{
        questionText: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
        correctAnswer: z.ZodString;
        explanation: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
    }, {
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    questions: {
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
    }[];
}, {
    questions: {
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
    }[];
}>;
export type QuizResponse = z.infer<typeof quizSchema>;
//# sourceMappingURL=quizSchema.d.ts.map