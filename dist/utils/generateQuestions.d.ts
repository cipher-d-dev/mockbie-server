export declare const generateQuestionsWithGemini: (source: string | Buffer, count: number, body: any) => Promise<({
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
})[]>;
//# sourceMappingURL=generateQuestions.d.ts.map