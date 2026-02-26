import e from "express";
import { ZodType } from "zod";
declare global {
    namespace Express {
        interface Request {
            validated?: {
                body?: unknown;
                params?: unknown;
                query?: unknown;
            };
        }
    }
}
/**
 * Generic concurrent validator — runs schema validations for body/params/query concurrently.
 * Provide only the parts you need, e.g. { body: studentSignupSchema }.
 */
export declare function validateRequest(schemas: {
    body?: ZodType<any>;
    params?: ZodType<any>;
    query?: ZodType<any>;
}): (req: e.Request, res: e.Response, next: e.NextFunction) => Promise<void | e.Response<any, Record<string, any>>>;
export declare const validateStudentSignup: (req: e.Request, res: e.Response, next: e.NextFunction) => Promise<void | e.Response<any, Record<string, any>>>;
export declare const validateStudentSignin: (req: e.Request, res: e.Response, next: e.NextFunction) => Promise<void | e.Response<any, Record<string, any>>>;
export declare const validateStudentUpdate: (req: e.Request, res: e.Response, next: e.NextFunction) => Promise<void | e.Response<any, Record<string, any>>>;
export declare const validateEmailVerification: (req: e.Request, res: e.Response, next: e.NextFunction) => Promise<void | e.Response<any, Record<string, any>>>;
//# sourceMappingURL=validateBody.d.ts.map