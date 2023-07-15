import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'
import tailwindcssForm from '@tailwindcss/forms'
import { rizzuiPlugin } from "./rizzui-plugin";

export const rizzuiPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [
    tailwindcssForm,
    rizzuiPlugin,
    plugin(function ({ addVariant }) {
      // required this to prevent any style on readOnly input elements
      addVariant('not-read-only', '&:not(:read-only)');
    }),
  ],
} satisfies Config