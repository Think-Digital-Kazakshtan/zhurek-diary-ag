module.exports = {
	content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				black: '#000000',
				dark: '#5B6373',
				darknes: '#322327',
				primary: '#4065AE',
				secondary: '#E71E5A',
				third: '#E6E8E9',
				fourth: '#5B6373',
				blue: '#ECF0F7',
				pink: '#FEF4F7',
				purple: '#A21FDF',
				lightBlue: '#E1E6F2',
				selectedText: '#333638',
				darkWhiteBg: '#F1F3F6',
				darkWhiteBgMobile: '#F3F4F6',
				statusGreen: '#50F190',
				statusRed: '#F15050',
				statusYellow: '#EEF150',
				dateInRange: '#FFEDEF',
				moreLightGray: '#F2F4F8',
				lightGray: '#D5DAE2',
				wahtsapp: '#40C351',
				telegram: '#3A6ED2'
			},
			fontFamily: {
				primary: ['Roboto', 'sans-serif']
			},
			transitionTimingFunction: {
				inQuad: 'cubic-bezier(0, 0.55, 0.45, 1)'
			},
			lineHeight: {
				'extra-loose': '2.5',
				12: '3rem',
				13: '4rem',
				14: '5rem',
				15: '6rem',
				16: '7rem',
				17: '8rem',
				18: '9rem',
				19: '10rem'
			},
			boxShadow: {
				shadow1: '0px 2px 4px rgba(0, 0, 0, 0.02), 0px 4px 14px rgba(0, 0, 0, 0.1)',
				shadow2: '0px 4px 10px rgba(24, 39, 75, 0.08), 0px 10px 40px rgba(24, 39, 75, 0.1)',
				shadow3: '0px 4px 34px rgba(0, 0, 0, 0.09), 0px 2px 7px rgba(0, 0, 0, 0.06)',
				shadow4: '0px 4px 10px rgba(136, 136, 136, 0.25)',
				shadow5: '0px 4px 30px rgb(54 54 54 / 25%)',
				dateInRange: '-10px 0 0 #FFEDEF'
			},
			width: {
				calc1: 'calc(100% / 3 - 30px)',
				calc2: 'calc(100% / 2 - 40px)',
				calc3: 'calc(100% / 2 - 10px)',
				calc4: 'calc(100% / 3 - 10px)'
			},
			backgroundImage: {
				bgGradient: 'linear-gradient(45deg, rgba(243,165,190,1) 10%, rgba(183,191,220,1) 100%);',
				bgGradient2: 'linear-gradient(90deg, rgba(231,27,90,1) 10%, rgba(64,101,174,1) 100%);'
			}
		}
	},
	corePlugins: {},
	plugins: []
}
