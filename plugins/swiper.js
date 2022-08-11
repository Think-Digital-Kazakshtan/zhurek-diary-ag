import Swiper, { FreeMode, Navigation, Pagination, Mousewheel } from 'swiper'
import 'swiper/swiper-bundle.css';

export default ({ app }, inject) => {
	inject('swiper', (el, options) => {

		Swiper.use([Navigation, Pagination, Mousewheel])
		return new Swiper(el, options)

	})
}
