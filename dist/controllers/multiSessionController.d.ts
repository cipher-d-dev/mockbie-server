import type { Response } from "express";
import type { AuthRequest } from "../middleware/authMiddleware.ts";
export declare const createMultiSession: (req: AuthRequest, res: Response) => Promise<void>;
export declare const uploadAndGenerateQuestions: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateMultiSessionStatus: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getMultiSession: (req: AuthRequest, res: Response) => Promise<void>;
export declare const listMultiSessions: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getWarRoom: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getActiveSessionForStudent: (req: AuthRequest, res: Response) => Promise<void>;
export declare const submitMultiSessionAnswers: (req: AuthRequest, res: Response) => Promise<void>;
export declare const gradeAndRelease: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getStudentHistory: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getAdminAnalytics: (req: AuthRequest, res: Response) => Promise<void>;
export declare const verifyCode: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=multiSessionController.d.ts.map