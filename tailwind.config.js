const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/flowbite/**/*.js',
	],
  theme: {

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      lineHeight: {
        '11': '4.25rem', // Adjust the value as needed
        '12': '4.5rem', // Adjust the value as needed
        '13': '4.75rem', // Adjust the value as needed
        '14': '5rem', // Adjust the value as needed
        '15': '5.25rem', // Adjust the value as needed
        '16': '5.5rem', // Adjust the value as needed
        '17': '5.75rem', // Adjust the value as needed
        '18': '6rem', // Adjust the value as needed
      },
      backgroundImage: {
        'custom-image': "url('./images/testbackground2.png')", // Replace with the path to your image file
        'custom-button': "url('./images/inkroller_1a.png')",
        'custom-imagewiki': "url('./images/background3.png')",
        'custom-poker': "url('./images/background6.png')",
        'custom-gun': "url('./images/background7.png')",
        'custom-image3': "url('./images/image3.png')",
        'custom-saintdenis': "url('./images/saintdenis.png')",
        'custom-valentine': "url('./images/valentine.png')",
        'custom-blackwater': "url('./images/blackwater.png')",
        'custom-histoire1': "url('./images/histoire1.jpg')",
        'custom-histoire2': "url('./images/histoire2.jpg')",
        'custom-histoire3': "url('./images/histoire3.jpg')",
        'custom-histoire4': "url('./images/histoire4.jpg')",
        'custom-button': "url('./images/inkroller_1a.png')",
      },
      fontFamily: {
        custom:["strangerbackinthenight"],
        custombutton:["chinese"]
      },
      
      fontSize: {
        '10xl': '8rem', // Adjust the value as needed
        '11xl': '9rem', // Adjust the value as needed
        '12xl': '10rem', // Adjust the value as needed
        '13xl': '11rem', // Adjust the value as needed
        '14xl': '12rem', // Adjust the value as needed
        '15xl': '13rem', // Adjust the value as needed
        '16xl': '14rem', // Adjust the value as needed
        '17xl': '15rem', // Adjust the value as needed
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
    require('flowbite/plugin'),
    addVariablesForColors,
    // ...
  ],
}


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}