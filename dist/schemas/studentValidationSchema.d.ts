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
}, z.core.$strip>;
/**
 * Schema for student signin
 */
export declare const studentSigninSchema: z.ZodObject<{
    matriculationNumber: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
/**
 * Schema for updating student profile
 */
export declare const studentUpdateSchema: z.ZodObject<{
    fullName: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * Schema for email verification
 */
export declare const emailVerificationSchema: z.ZodObject<{
    verficationToken: z.ZodString;
}, z.core.$strip>;
export type StudentSignupInput = z.infer<typeof studentSignupSchema>;
export type StudentSigninInput = z.infer<typeof studentSigninSchema>;
export type StudentUpdateInput = z.infer<typeof studentUpdateSchema>;
export type EmailVerificationInput = z.infer<typeof emailVerificationSchema>;
//# sourceMappingURL=studentValidationSchema.d.ts.map