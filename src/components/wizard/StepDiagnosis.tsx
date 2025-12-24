"use client";

import React from 'react';
import type { AnalysisResult } from '@/lib/ai';

interface StepDiagnosisProps {
    analysis: AnalysisResult;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function StepDiagnosis({ analysis, onConfirm, onCancel }: StepDiagnosisProps) {
    const getComplexityColor = (c: string) => {
        switch (c) {
            case 'P': return 'bg-green-100 text-green-800 border-green-200';
            case 'M': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'G': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getPriceRange = (c: string) => {
        // Mock pricing logic
        switch (c) {
            case 'P': return 'R$ 150 - R$ 250';
            case 'M': return 'R$ 300 - R$ 550';
            case 'G': return 'A partir de R$ 600';
            default: return 'Sob Consulta';
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 dark:bg-zinc-800">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Diagnóstico do João Reparaildes</h2>
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold border ${getComplexityColor(analysis.complexity)}`}>
                    Complexidade: {analysis.complexity}
                </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Hipótese Principal:</h3>
                <p className="text-blue-800 dark:text-blue-200">{analysis.diagnosis}</p>
            </div>

            <div className="space-y-2">
                <h3 className="font-semibold text-gray-700 dark:text-gray-300">Por que esse diagnóstico?</h3>
                <p className="text-gray-600 text-sm dark:text-gray-400 italic">"{analysis.reasoning}"</p>
            </div>

            <div className="border-t pt-4 my-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 dark:text-gray-400">Estimativa de Mão de Obra</span>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">{getPriceRange(analysis.complexity)}</span>
                </div>
                <div className="text-xs text-center text-gray-500 mb-6">
                    * Taxa de visita inclusa. Peças cobradas à parte (se necessário).
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={onCancel}
                        className="flex-1 py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-zinc-700 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-600"
                    >
                        Não concordo
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none ring-2 ring-offset-2 ring-green-500"
                    >
                        Aceitar e Chamar Técnico
                    </button>
                </div>
            </div>
        </div>
    );
}
