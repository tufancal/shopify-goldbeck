module.exports = {
  content: ['./theme/**/*.{liquid,html,js,json}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '1.4rem',
      base: '1.6rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '3rem',
      '4xl': '3.6rem',
      '5xl': '4.8rem',
    },
    extend: {
      colors: {
				primary: {
					dark: '#5F4842',
					light: '#F1CE75'
				},
				secondary: {
					dark: '#FFFFFF',
					light: '#1B1914'
				}
			},
      fontFamily: {
				heading: ['IBMPlexSansCondensed', 'Arial'],
				copy: ['IBMPlexSans', 'Arial']
			}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}