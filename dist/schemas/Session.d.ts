import mongoose from "mongoose";
declare const Session: mongoose.Model<{
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
}>> & Omit<{
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        type: "multi" | "mono";
        status: "active" | "draft" | "completed";
        title: string;
        creatorId: mongoose.Types.ObjectId;
        sourceFiles: mongoose.Types.DocumentArray<{
            processed: boolean;
            name?: string | null | undefined;
            url?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            processed: boolean;
            name?: string | null | undefined;
            url?: string | null | undefined;
        }, {}, {}> & {
            processed: boolean;
            name?: string | null | undefined;
            url?: string | null | undefined;
        }>;
        questions: mongoose.Types.DocumentArray<{
            options: string[];
            questionText?: string | null | undefined;
            correctAnswer?: string | null | undefined;
            explanation?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            options: string[];
            questionText?: string | null | undefined;
            correctAnswer?: string | null | undefined;
            explanation?: string | null | undefined;
        }, {}, {}> & {
            options: string[];
            questionText?: string | null | undefined;
            correctAnswer?: string | null | undefined;
            explanation?: string | null | undefined;
        }>;
        results?: {
            score: number;
            totalQuestions: number;
            percentage: number;
            answers: mongoose.Types.DocumentArray<{
                questionId?: string | null | undefined;
                userAnswer?: string | null | undefined;
                isCorrect?: boolean | null | undefined;
                selectedOption?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                questionId?: string | null | undefined;
                userAnswer?: string | null | undefined;
                isCorrect?: boolean | null | undefined;
                selectedOption?: string | null | undefined;
            }, {}, {}> & {
                questionId?: string | null | undefined;
                userAnswer?: string | null | undefined;
                isCorrect?: boolean | null | undefined;
                selectedOption?: string | null | undefined;
            }>;
            completedAt?: NativeDate | null | undefined;
        } | null | undefined;
        metadaata?: {
            difficulty?: string | null | undefined;
            focusArea?: string | null | undefined;
        } | null | undefined;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
        timestamps: true;
    }>> & Omit<{
        type: "multi" | "mono";
        status: "active" | "draft" | "completed";
        title: string;
        creatorId: mongoose.Types.ObjectId;
        sourceFiles: mongoose.Types.DocumentArray<{
            processed: boolean;
            name?: string | null | undefined;
            url?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            processed: boolean;
            name?: string | null | undefined;
            url?: string | null | undefined;
        }, {}, {}> & {
            processed: boolean;
            name?: string | null | undefined;
            url?: string | null | undefined;
        }>;
        questions: mongoose.Types.DocumentArray<{
            options: string[];
            questionText?: string | null | undefined;
            correctAnswer?: string | null | undefined;
            explanation?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            options: string[];
            questionText?: string | null | undefined;
            correctAnswer?: string | null | undefined;
            explanation?: string | null | undefined;
        }, {}, {}> & {
            options: string[];
            questionText?: string | null | undefined;
            correctAnswer?: string | null | undefined;
            explanation?: string | null | undefined;
        }>;
        results?: {
            score: number;
            totalQuestions: number;
            percentage: number;
            answers: mongoose.Types.DocumentArray<{
                questionId?: string | null | undefined;
                userAnswer?: string | null | undefined;
                isCorrect?: boolean | null | undefined;
                selectedOption?: string | null | undefined;
            }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
                questionId?: string | null | undefined;
                userAnswer?: string | null | undefined;
                isCorrect?: boolean | null | undefined;
                selectedOption?: string | null | undefined;
            }, {}, {}> & {
                questionId?: string | null | undefined;
                userAnswer?: string | null | undefined;
                isCorrect?: boolean | null | undefined;
                selectedOption?: string | null | undefined;
            }>;
            completedAt?: NativeDate | null | undefined;
        } | null | undefined;
        metadaata?: {
            difficulty?: string | null | undefined;
            focusArea?: string | null | undefined;
        } | null | undefined;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "multi" | "mono";
    status: "active" | "draft" | "completed";
    title: string;
    creatorId: mongoose.Types.ObjectId;
    sourceFiles: mongoose.Types.DocumentArray<{
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {}, {}> & {
        processed: boolean;
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>;
    questions: mongoose.Types.DocumentArray<{
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }, {}, {}> & {
        options: string[];
        questionText?: string | null | undefined;
        correctAnswer?: string | null | undefined;
        explanation?: string | null | undefined;
    }>;
    results?: {
        score: number;
        totalQuestions: number;
        percentage: number;
        answers: mongoose.Types.DocumentArray<{
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }, {}, {}> & {
            questionId?: string | null | undefined;
            userAnswer?: string | null | undefined;
            isCorrect?: boolean | null | undefined;
            selectedOption?: string | null | undefined;
        }>;
        completedAt?: NativeDate | null | undefined;
    } | null | undefined;
    metadaata?: {
        difficulty?: string | null | undefined;
        focusArea?: string | null | undefined;
    } | null | undefined;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Session;
//# sourceMappingURL=Session.d.ts.map