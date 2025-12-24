import { NextRequest, NextResponse } from "next/server";
import { analyzeRequest } from "@/lib/ai";
import { db } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { requestId, text, imageUrls, audioUrl } = body;

        // 1. Basic Validation
        if (!text && (!imageUrls || imageUrls.length === 0)) {
            return NextResponse.json({ error: "Descrição ou imagem é obrigatória." }, { status: 400 });
        }

        // 2. Call AI Service (Gemma 3)
        // Note: If audioUrl is present, we would typically transcribe it here first. 
        // For MVP, we pass it if we have a transcript or ignore.
        const analysis = await analyzeRequest(text, imageUrls);

        // 3. Update Request in Firestore (if requestId is provided)
        if (requestId) {
            await db.collection("requests").doc(requestId).update({
                aiAnalysis: analysis,
                status: "triaged",
                updatedAt: new Date().toISOString()
            });
        }

        // 4. Return result to Client
        return NextResponse.json({ success: true, data: analysis });

    } catch (error: any) {
        console.error("Error in /api/analyze:", error);
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
