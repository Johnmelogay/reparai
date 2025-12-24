"use client";

import React, { useState } from 'react';

interface StepInputProps {
    onNext: (data: { description: string; files: File[] }) => void;
}

export default function StepInput({ onNext }: StepInputProps) {
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState<File[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description.trim()) return;
        onNext({ description, files });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4 dark:bg-zinc-800">
            <h2 className="text-2xl font-bold text-center mb-6">O que está acontecendo?</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Descrição do Problema
                    </label>
                    <textarea
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 border p-3 dark:bg-zinc-700 dark:border-zinc-600"
                        rows={4}
                        placeholder="Ex: Ar condicionado pingando muito e fazendo barulho..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Fotos ou Vídeo (Opcional)
                    </label>
                    <input
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 dark:file:bg-blue-900 dark:file:text-blue-300"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    Analisar com João Reparaildes
                </button>
            </form>
        </div>
    );
}
