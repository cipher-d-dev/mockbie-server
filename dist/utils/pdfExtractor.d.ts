import { PageTextResult } from "pdf-parse";
export interface PDFExtractionResult {
    text: string;
    numPages: PageTextResult[];
    info: Record<string, unknown>;
}
export declare const extractTextFromPDF: (buffer: Buffer) => Promise<PDFExtractionResult>;
//# sourceMappingURL=pdfExtractor.d.ts.map