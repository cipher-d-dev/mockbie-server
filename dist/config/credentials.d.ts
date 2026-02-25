import express from "express";
interface CorsOptions {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void;
    credentials: boolean;
    optionsSuccessStatus: number;
}
export declare const options: CorsOptions;
export declare const credentials: (req: express.Request, res: express.Response, next: Function) => void;
export {};
//# sourceMappingURL=credentials.d.ts.map