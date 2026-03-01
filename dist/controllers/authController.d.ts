import express from "express";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
            };
        }
    }
}
export declare const register: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const login: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const refresh: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const patchStudent: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
export declare const logout: (req: express.Request, res: express.Response) => Promise<express.Response<any, Record<string, any>>>;
//# sourceMappingURL=authController.d.ts.map