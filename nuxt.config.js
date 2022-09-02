export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'ZHUREK',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/scss/app.scss'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [{ src: '~/plugins/swiper.js', mode: 'client' }],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		// '@nuxtjs/tailwindcss',
		'@nuxt/postcss8'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/pwa', '@nuxtjs/toast'],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		host: process.env.API_HOST,
		prefix: process.env.API_PREFIX,
		browserBaseURL: process.env.API_URL,
		proxy: true,
		credentials: true,
		debug: true
	},

	router: {
		base: '/',
		middleware: ['auth']
	},

	proxy: {
		'/api': {
			target: process.env.API_URL,
			pathRewrite: { '^/api': '/' }
		}
	},

	auth: {
		redirect: {
			login: '/auth',
			logout: '/auth',
			callback: false,
			home: '/'
		},
		watchLoggedIn: true,
		rewriteRedirects: true,
		resetOnError: true,
		strategies: {
			local: {
				token: {
					property: 'token',
					global: true,
					type: 'Bearer'
				},
				user: {
					property: 'user',
					autoFetch: true
				},
				endpoints: {
					login: { url: process.env.API_URL + '/auth/login', method: 'post' },
					user: { url: process.env.API_URL + '/auth/user', method: 'get' },
					logout: { url: process.env.API_URL + '/auth/logout', method: 'delete' }
				}
				// autoLogout: false
			}
		}
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		icon: {
			fileName: 'icon.png',
			sizes: [64, 120, 144, 152, 192, 384, 512]
		},
		meta: {
			title: 'Zhurek App',
			author: 'Santo',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			mobileAppIOS: true,
			mobileApp: true,
			nativeUI: true
		},
		manifest: {
			name: 'Zhurek App',
			short_name: 'Zhurek App',
			description: 'Дневник АГ',
			lang: 'ru'
		}
	},
	layoutTransition: {
		name: 'fade',
		mode: 'out-in'
	},
	pageTransition: {
		name: 'fade',
		mode: 'out-in'
	},
	loading: {
		color: 'purple',
		height: '5px'
	},
	loadingIndicator: {
		name: 'circle',
		color: 'purple',
		background: 'white'
	},
	toast: {
    position: "top-right",
    duration : 5000
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {}
			}
		}
	}
}
