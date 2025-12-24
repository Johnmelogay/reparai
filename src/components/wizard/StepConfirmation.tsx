"use client";

import React from 'react';

export default function StepConfirmation() {
    return (
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-xl shadow-md text-center space-y-6 dark:bg-zinc-800">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Chamado Aberto!</h2>

            <p className="text-gray-600 dark:text-gray-300">
                Um técnico especialista em Ar-condicionado Split já foi notificado.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg text-left text-sm space-y-2 dark:bg-zinc-700">
                <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Tempo estimado:</span>
                    <span className="font-medium">45 - 90 min</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Técnico:</span>
                    <span className="font-medium">Aguardando...</span>
                </div>
            </div>

            <button
                onClick={() => window.location.reload()}
                className="text-blue-600 hover:text-blue-800 font-medium"
            >
                Voltar ao Início
            </button>
        </div>
    );
}
