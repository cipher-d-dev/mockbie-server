import { z } from "zod";
/**
 * Base schema for student signup
 */
export declare const studentSignupSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    fullName: z.ZodString;
    username: z.ZodString;
    matriculationNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    email: string;
    fullName: string;
    matriculationNumber: string;
}, {
    username: string;
    password: string;
    email: string;
    fullName: string;
    matriculationNumber: string;
}>;
/**
 * Schema for student signin
 */
export declare const studentSigninSchema: z.ZodObject<{
    matriculationNumber: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    matriculationNumber: string;
}, {
    password: string;
    matriculationNumber: string;
}>;
/**
 * Schema for updating student profile
 */
export declare const studentUpdateSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    fullName?: string | undefined;
}, {
    username?: string | undefined;
    fullName?: string | undefined;
}>;
/**
 * Schema for email verification
 */
export declare const emailVerificationSchema: z.ZodObject<{
    verficationToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    verficationToken: string;
}, {
    verficationToken: string;
}>;
export type StudentSignupInput = z.infer<typeof studentSignupSchema>;
export type StudentSigninInput = z.infer<typeof studentSigninSchema>;
export type StudentUpdateInput = z.infer<typeof studentUpdateSchema>;
export type EmailVerificationInput = z.infer<typeof emailVerificationSchema>;
//# sourceMappingURL=studentValidationSchema.d.ts.map