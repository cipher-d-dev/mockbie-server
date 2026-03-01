import e from "express";
export interface AuthRequest extends e.Request {
    student?: {
        id: string;
    };
}
export declare const authorizationCheck: (req: AuthRequest, res: e.Response, next: e.NextFunction) => e.Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authMiddleware.d.ts.map