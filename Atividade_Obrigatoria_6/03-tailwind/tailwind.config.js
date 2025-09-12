/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#2563eb",
                    600: "#2563eb",
                    500: "#3b82f6"
                },
                accent: "#f59e0b",
            },
            boxShadow: {
                card: "0 6px 18px rgba(15,23,42,0.08)",
                cardHover: "0 14px 30px rgba(15,23,42,0.12)",
                cardDark: "0 6px 18px rgba(2,6,23,0.6)",
                cardHoverDark: "0 16px 40px rgba(2,6,23,0.7)"
            },
            transitionDuration: {
                DEFAULT: "200"
            },
            borderRadius: {
                card: "10px"
            }
        },
        screens: {
            sm: "481px",   // ≥481 -> 2 cols
            md: "769px",   // ≥769 -> 3 cols
            lg: "1025px"   // ≥1025 -> 4 cols
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'), // for 2-line ellipsis
    ],
};
