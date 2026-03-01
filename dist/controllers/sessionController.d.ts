import e from "express";
import { type AuthRequest } from "../middleware/authMiddleware.ts";
export declare const createMonoSession: (req: AuthRequest, res: e.Response) => Promise<e.Response<any, Record<string, any>>>;
export declare const getSession: (req: AuthRequest, res: e.Response) => Promise<e.Response<any, Record<string, any>>>;
export declare const processSessionContent: (req: AuthRequest, res: e.Response) => Promise<e.Response<any, Record<string, any>>>;
export declare const submitSessionResult: (req: AuthRequest, res: e.Response) => Promise<void>;
export declare const getUserSessions: (req: AuthRequest, res: e.Response) => Promise<void>;
export declare const deleteSession: (req: AuthRequest, res: e.Response) => Promise<e.Response<any, Record<string, any>>>;
//# sourceMappingURL=sessionController.d.ts.map