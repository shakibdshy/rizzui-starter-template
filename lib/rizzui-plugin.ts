import plugin from "tailwindcss/plugin";

export const rizzuiPlugin = plugin(
  // Add CSS variable definitions to the base layer
  function ({ addBase, addUtilities }) {
    addBase({
      ":root": {
        "--gray-0": "255 255 255",
        "--gray-50": "250 250 250",
        "--gray-100": "241 241 241",
        "--gray-200": "227 227 227",
        "--gray-300": "223 223 223",
        "--gray-400": "146 146 146",
        "--gray-500": "102 102 102",
        "--gray-600": "72 72 72",
        "--gray-700": "51 51 51",
        "--gray-800": "34 34 34",
        "--gray-900": "17 17 17",
        "--gray-1000": "0 0 0",
        "--primary-lighter": "221 227 255",
        "--primary-light": "99 91 255",
        "--primary-default": "78 54 245",
        "--primary-dark": "67 42 216",
        "--secondary-lighter": "227 215 252",
        "--secondary-light": "138 99 210",
        "--secondary-default": "121 40 202",
        "--secondary-dark": "76 40 137",
        "--red-lighter": "247 212 214",
        "--red-light": "255 26 26",
        "--red-default": "238 0 0",
        "--red-dark": "197 0 0",
        "--orange-lighter": "255 239 207",
        "--orange-light": "247 185 85",
        "--orange-default": "245 166 35",
        "--orange-dark": "171 87 10",
        "--blue-lighter": "211 229 255",
        "--blue-light": "50 145 255",
        "--blue-default": "0 112 243",
        "--blue-dark": "7 97 209",
        "--green-lighter": "185 249 207",
        "--green-light": "28 203 92",
        "--green-default": "17 168 73",
        "--green-dark": "17 132 60"
      },
      "[data-theme='dark']": {
        "--gray-0": "0 0 0",
        "--gray-50": "17 17 17",
        "--gray-100": "34 34 34",
        "--gray-200": "51 51 51",
        "--gray-300": "72 72 72",
        "--gray-400": "102 102 102",
        "--gray-500": "146 146 146",
        "--gray-600": "223 223 223",
        "--gray-700": "227 227 227",
        "--gray-800": "241 241 241",
        "--gray-900": "250 250 250",
        "--gray-1000": "255 255 255"
      }
    })

    addBase({
      'html': {
        '@apply antialiased': {},
      },
      "input::-ms-clear,\n  input::-ms-reveal": {
        "@apply hidden": {}
      },
      'input[type="search"]::-webkit-search-cancel-button': {
        "@apply hidden": {}
      },
      'input[type="number"]::-webkit-inner-spin-button,\n  input[type="number"]::-webkit-outer-spin-button': {
        "@apply m-0 appearance-none": {}
      },
      'input[type="checkbox"]:checked': {
        "@apply bg-none": {}
      },
      "h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6": {
        "@apply font-bold": {}
      },
      'h1': {
        "@apply text-4xl": {}
      },
      'h2': {
        "@apply text-3xl": {}
      },
      'h3': {
        "@apply text-2xl": {}
      },
      'h4': {
        "@apply text-xl": {}
      },
      'h5': {
        "@apply text-lg": {}
      },
      'h6': {
        "@apply text-base": {}
      },
      'q': {
        "@apply text-lg": {}
      }
    })

    addUtilities({
      ".animation-delay-200": { animationDelay: "200ms" },
      ".animation-delay-500": { animationDelay: "500ms" },
      ".animation-delay-700": { animationDelay: "700ms" },
      ".password-dot": {
        WebkitTextSecurity: "disc",
        MozTextSecurity: "circle",
        textSecurity: "circle"
      }
    })
  },

  // Extend the Tailwind theme with "themable" utilities
  {
    theme: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        current: 'currentColor',
        transparent: 'transparent',
        /*
         * you can use hex code color value unless you want light and dark mode color scheme,
         * we are using css variables for light and dark mode color scheme
         */
        gray: {
          0: 'rgb(var(--gray-0) / <alpha-value>)',
          50: 'rgb(var(--gray-50) / <alpha-value>)',
          100: 'rgb(var(--gray-100) / <alpha-value>)',
          200: 'rgb(var(--gray-200) / <alpha-value>)',
          300: 'rgb(var(--gray-300) / <alpha-value>)',
          400: 'rgb(var(--gray-400) / <alpha-value>)',
          500: 'rgb(var(--gray-500) / <alpha-value>)',
          600: 'rgb(var(--gray-600) / <alpha-value>)',
          700: 'rgb(var(--gray-700) / <alpha-value>)',
          800: 'rgb(var(--gray-800) / <alpha-value>)',
          900: 'rgb(var(--gray-900) / <alpha-value>)',
          1000: 'rgb(var(--gray-1000) / <alpha-value>)',
        },
        primary: {
          lighter: 'rgb(var(--primary-lighter) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-default) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        secondary: {
          lighter: 'rgb(var(--secondary-lighter) / <alpha-value>)',
          light: 'rgb(var(--secondary-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--secondary-default) / <alpha-value>)',
          dark: 'rgb(var(--secondary-dark) / <alpha-value>)',
        },
        red: {
          lighter: 'rgb(var(--red-lighter) / <alpha-value>)',
          light: 'rgb(var(--red-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--red-default) / <alpha-value>)',
          dark: 'rgb(var(--red-dark) / <alpha-value>)',
        },
        orange: {
          lighter: 'rgb(var(--orange-lighter) / <alpha-value>)',
          light: 'rgb(var(--orange-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--orange-default) / <alpha-value>)',
          dark: 'rgb(var(--orange-dark) / <alpha-value>)',
        },
        blue: {
          lighter: 'rgb(var(--blue-lighter) / <alpha-value>)',
          light: 'rgb(var(--blue-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--blue-default) / <alpha-value>)',
          dark: 'rgb(var(--blue-dark) / <alpha-value>)',
        },
        green: {
          lighter: 'rgb(var(--green-lighter) / <alpha-value>)',
          light: 'rgb(var(--green-light) / <alpha-value>)',
          DEFAULT: 'rgb(var(--green-default) / <alpha-value>)',
          dark: 'rgb(var(--green-dark) / <alpha-value>)',
        },
      },
      extend: {
        // requried these animations for the Loader component
        animation: {
          blink: 'blink 1.4s infinite both;',
          'scale-up': 'scaleUp 500ms infinite alternate',
        },
        keyframes: {
          blink: {
            '0%': { opacity: '0.2' },
            '20%': { opacity: '1' },
            '100%': { opacity: '0.2' },
          },
          scaleUp: {
            '0%': { transform: 'scale(0)' },
            '100%': { transform: 'scale(1)' },
          },
        },
      },
    },
  }
)