/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            keyframes: {
                marquee: {
                    '0%': {transform: 'translateX(0%)'},
                    '100%': {transform: 'translateX(-100%)'},
                },
                marquee2: {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(0%)'},
                },
            },
            animation: {
                'spin-slow-30': 'spin 30s linear infinite',
                'spin-slow-25': 'spin 25s linear infinite',
                'spin-slow-10': 'spin 10s linear infinite',
                'marquee-infinite': 'marquee 25s linear infinite',
            },
            backgroundImage: {
                hero: "url('assets/imgs/banner.png')",
            },
            colors: {
                primary: {
                    DEFAULT: "#0e3758",
                },
                secondary: {
                    DEFAULT: "#1E75BA",
                },
                orange: {
                    DEFAULT: "#faaf42",
                },
                primary50: {
                    DEFAULT: "#f6fafe",
                },
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        // require("@tailwindcss/line-clamp"),
        function ({addComponents}) {
            // Create our own container component
            // and ask tailwind to take it into account.
            addComponents({
                ".container": {
                    maxWidth: "80vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                    "@screen sm": {
                        maxWidth: "75vw",
                    },
                    "@screen xl": {
                        maxWidth: "1080px",
                    },
                },
                ".container-other": {
                    maxWidth: "90vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                    "@screen sm": {
                        maxWidth: "85vw",
                    },
                    "@screen xl": {
                        maxWidth: "1280px",
                    },
                },
            });
        },
    ],
};
