"use client";

import React, { useState } from 'react';
import StepInput from './StepInput';
import StepDiagnosis from './StepDiagnosis';
import StepConfirmation from './StepConfirmation';
import type { AnalysisResult } from '@/lib/ai';

export default function RequestWizard() {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

    const handleInputSubmit = async (data: { description: string; files: File[] }) => {
        setIsLoading(true);
        try {
            // In a real app, we would upload files to Storage first and get URLs.
            // For MVP, we pass text only or mock URLs.
            const res = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: data.description,
                    imageUrls: [] // Mock: files would be uploaded here
                })
            });

            const result = await res.json();
            if (result.success) {
                setAnalysis(result.data);
                setStep(2);
            } else {
                alert("Erro na análise: " + result.error);
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleConfirm = () => {
        // Here we would create the 'Request' in Firestore
        setStep(3);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600 animate-pulse">João Reparaildes está analisando...</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            {step === 1 && <StepInput onNext={handleInputSubmit} />}
            {step === 2 && analysis && (
                <StepDiagnosis
                    analysis={analysis}
                    onConfirm={handleConfirm}
                    onCancel={() => setStep(1)}
                />
            )}
            {step === 3 && <StepConfirmation />}
        </div>
    );
}
