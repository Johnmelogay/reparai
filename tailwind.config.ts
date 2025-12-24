import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                reparai: {
                    primary: '#2563EB', // Blue 600
                    secondary: '#1E40AF', // Blue 800
                    accent: '#F59E0B', // Amber 500
                    background: '#F3F4F6', // Gray 100
                }
            }
        },
    },
    plugins: [],
};
export default config;
