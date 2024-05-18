/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
    addUtilities({
        ".rotate-y-180": {
            transform: "rotateY(180deg)",
        },
        ".-rotate-y-180": {
            transform: "rotateY(-180deg)",
        },
    });
});

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        screens: {
            xs: "320px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "20px",
                md: "50px",
            },
        },
        extend: {
            fontFamily: {
                dmsans: ["DM Display Serif", "sans-serif"],
                jost: ["Jost", "sans-serif"],
            },
            colors: {
                colors: {
                    primaryColor: "#9E896A",
                    primaryDarkColor: "#35231E",
                    secondaryColor: "#C3A55B",
                    secondaryLightColor: "#FFF4DD",
                    paragraphColor: "#A29082",
                    whiteColor: "#fff",
                    blackColor: "#000",
                },
            },
            animation: {
                "loop-scroll": "loop-scroll 50s linear infinite",
                "slidein300": "slidein 1s ease 300ms",
                "slidein500": "slidein 1s ease 500ms",
                "slidein700": "slidein 1s ease 700ms",

            },
            keyframes: {
                "loop-scroll": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-100%)" },
                },
                slidein: {
                    from: {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    plugins: [require("flowbite/plugin")],
    important: true,
};