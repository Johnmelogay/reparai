// This service handles interactions with the Gemma 3 Model (via Vertex AI or custom endpoint)

export interface AnalysisResult {
    diagnosis: string;
    complexity: 'P' | 'M' | 'G';
    confidence: number;
    reasoning: string;
    technical_questions: string[]; // Next questions to ask if confidence is low
}

export async function analyzeRequest(
    textDescription: string,
    imageUrls: string[] = [],
    audioTranscript?: string
): Promise<AnalysisResult> {
    // TODO: Replace with actual call to Gemma 3 (via Vertex AI Client or standard REST fetch)
    // For MVP, we will structure the prompt and mock the implementation until keys are provided.

    const prompt = buildPrompt(textDescription, imageUrls, audioTranscript);

    console.log("Creating AI Analysis with prompt:", prompt);

    // MOCK RESPONSE for initial development
    // In production, this would be `const response = await gemmaClient.generateContent(...)`

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                diagnosis: "Possível sujeira nos filtros ou falta de gás.",
                complexity: "P",
                confidence: 0.85,
                reasoning: "O usuário relatou que o aparelho liga mas não gela. Não há menção de barulhos estranhos ou disjuntor caindo. Foto mostra unidade interna aparentemente integra.",
                technical_questions: ["O vento sai frio ou natural?", "A unidade externa (condensadora) liga?"]
            });
        }, 1500);
    });
}

function buildPrompt(text: string, images: string[], audio?: string) {
    let content = `Você é o João Reparaildes, um especialista sênior em diagnóstico de ar-condicionado.
    
    Analise os dados abaixo e forneça um diagnóstico preliminar, complexidade (P, M, G) e confiança.
    
    Descrição do Usuário: ${text}
    `;

    if (audio) {
        content += `\nTranscrição de Áudio: ${audio}`;
    }

    if (images.length > 0) {
        content += `\n(O modelo deve analisar ${images.length} imagens anexadas)`;
    }

    content += `\nSaída esperada em JSON: { diagnosis, complexity, confidence, reasoning, technical_questions }`;

    return content;
}
