import { z } from "zod";
declare const mcqQuestionSchema: z.ZodObject<{
    type: z.ZodLiteral<"mcq">;
    questionText: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
    correctAnswer: z.ZodString;
    explanation: z.ZodString;
    points: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "mcq";
    options: string[];
    questionText: string;
    correctAnswer: string;
    explanation: string;
    points: number;
}, {
    type: "mcq";
    options: string[];
    questionText: string;
    correctAnswer: string;
    explanation: string;
    points?: number | undefined;
}>;
declare const theoryQuestionSchema: z.ZodObject<{
    type: z.ZodLiteral<"theory">;
    questionText: z.ZodString;
    options: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    correctAnswer: z.ZodDefault<z.ZodString>;
    explanation: z.ZodString;
    maxWords: z.ZodOptional<z.ZodNumber>;
    points: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "theory";
    options: string[];
    questionText: string;
    correctAnswer: string;
    explanation: string;
    points: number;
    maxWords?: number | undefined;
}, {
    type: "theory";
    questionText: string;
    explanation: string;
    options?: string[] | undefined;
    correctAnswer?: string | undefined;
    points?: number | undefined;
    maxWords?: number | undefined;
}>;
declare const questionSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"mcq">;
    questionText: z.ZodString;
    options: z.ZodArray<z.ZodString, "many">;
    correctAnswer: z.ZodString;
    explanation: z.ZodString;
    points: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "mcq";
    options: string[];
    questionText: string;
    correctAnswer: string;
    explanation: string;
    points: number;
}, {
    type: "mcq";
    options: string[];
    questionText: string;
    correctAnswer: string;
    explanation: string;
    points?: number | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"theory">;
    questionText: z.ZodString;
    options: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    correctAnswer: z.ZodDefault<z.ZodString>;
    explanation: z.ZodString;
    maxWords: z.ZodOptional<z.ZodNumber>;
    points: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "theory";
    options: string[];
    questionText: string;
    correctAnswer: string;
    explanation: string;
    points: number;
    maxWords?: number | undefined;
}, {
    type: "theory";
    questionText: string;
    explanation: string;
    options?: string[] | undefined;
    correctAnswer?: string | undefined;
    points?: number | undefined;
    maxWords?: number | undefined;
}>]>;
export declare const quizSchema: z.ZodObject<{
    questions: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"mcq">;
        questionText: z.ZodString;
        options: z.ZodArray<z.ZodString, "many">;
        correctAnswer: z.ZodString;
        explanation: z.ZodString;
        points: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "mcq";
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
        points: number;
    }, {
        type: "mcq";
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
        points?: number | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"theory">;
        questionText: z.ZodString;
        options: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        correctAnswer: z.ZodDefault<z.ZodString>;
        explanation: z.ZodString;
        maxWords: z.ZodOptional<z.ZodNumber>;
        points: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type: "theory";
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
        points: number;
        maxWords?: number | undefined;
    }, {
        type: "theory";
        questionText: string;
        explanation: string;
        options?: string[] | undefined;
        correctAnswer?: string | undefined;
        points?: number | undefined;
        maxWords?: number | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    questions: ({
        type: "mcq";
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
        points: number;
    } | {
        type: "theory";
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
        points: number;
        maxWords?: number | undefined;
    })[];
}, {
    questions: ({
        type: "mcq";
        options: string[];
        questionText: string;
        correctAnswer: string;
        explanation: string;
        points?: number | undefined;
    } | {
        type: "theory";
        questionText: string;
        explanation: string;
        options?: string[] | undefined;
        correctAnswer?: string | undefined;
        points?: number | undefined;
        maxWords?: number | undefined;
    })[];
}>;
export type QuizResponse = z.infer<typeof quizSchema>;
export type MCQQuestion = z.infer<typeof mcqQuestionSchema>;
export type TheoryQuestion = z.infer<typeof theoryQuestionSchema>;
export type AnyQuestion = z.infer<typeof questionSchema>;
export {};
//# sourceMappingURL=quizSchema.d.ts.map