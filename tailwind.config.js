/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a12",
          secondary: "#11111b",
          card: "#161625",
          "card-hover": "#1e1e32",
        },
        accent: {
          teal: "#64ffda",
          violet: "#c4b5fd",
          amber: "#fbbf24",
          blue: "#60a5fa",
          rose: "#fb7185",
        },
        text: {
          primary: "#cdd6f4",
          secondary: "#a6adc8",
          muted: "#585b70",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "border-rotate": "border-rotate 4s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "slide-right": "slide-right 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "border-rotate": {
          "0%": { "--angle": "0deg" },
          "100%": { "--angle": "360deg" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
