import type {Config} from 'tailwindcss'
const colors = require("tailwindcss/colors")

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      gridTemplateRows: {
        'vp-canvas': 'repeat(4, 1fr)',
      },
      gridTemplateColumns: {
        'vp-canvas': 'repeat(4, 1fr)',
      },
      gridTemplateAreas: {
        'vp-canvas': [
          '_0                    gain-creators  gains            _1',
          'products-and-services gain-creators  gains customer-jobs',
          'products-and-services pain-relievers pains customer-jobs',
          '_2                    pain-relievers pains            _3',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      serif: ['"Spectral"'],
      sans: ['Hind'],
      header: ["Open Sans"]
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
export default config
