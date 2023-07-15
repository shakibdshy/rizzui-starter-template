import type { Config } from 'tailwindcss'
import { rizzuiPreset } from './lib/rizzui-preset'


const config = {
  presets: [rizzuiPreset],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/rizzui/dist/*.{js,ts,jsx,tsx}',
  ],
  
} satisfies Config

export default config