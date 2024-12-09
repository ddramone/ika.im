import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        // italic: ['var(--font-italic)'],
      },
      colors: {
        background: '#fefced',
        accent: '#ea580c',
        stroke: '#414141',
        muted: '#d9cebd',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
export default config