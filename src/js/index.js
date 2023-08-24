import burgerInit from './modules/burger.js'
import headerInit from './modules/header.js'

import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

burgerInit()
headerInit()

const swiper = new Swiper('.news__slider', {
	modules: [Autoplay],
	autoplay: true,
	slidesPerView: 1,
	spaceBetween: 20,
	breakpoints: {
		620: {
			slidesPerView: 2,
		},
		920: {
			slidesPerView: 3,
		},
		1220: {
			slidesPerView: 4,
		},
	},
})
