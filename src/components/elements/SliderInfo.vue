<template>
	<b-container :class="(slider) ? 'd-flex flex-wrap' : null">

		<template v-if="slider">
			<h2 data-aos="fade-up" class="section-title slider-info-title flex-grow-1" v-if="title">{{ title }}</h2>
			<div data-aos="fade-up" class="slider-info-nav d-flex align-self-center">
				<div class="slider-nav__prev" slot="button-prev" :style="(btnColor) ? `background: ${btnColor}` : null">
					<svgicon name="arrow" />
				</div>
				<div class="slider-nav__next" slot="button-next" :style="(btnColor) ? `background: ${btnColor}` : null">
					<svgicon name="arrow" />
				</div>
			</div>
			<swiper data-aos="fade-up" class="slider-info" ref="mySwiper" :options="swiperOptions">
				<swiper-slide class="slider-info__item" v-for="(item, index) in items" :key="index">
					<div class="icon" :style="(btnColor) ? `background: ${btnColor};border-color: ${btnColor}` : null">
						<svgicon :name="item.icon" />
					</div>
					<h5>{{item.title}}</h5>
					<p>{{item.text}}</p>
				</swiper-slide>
			</swiper>
		</template>
		<template v-else>
			<h2 data-aos="fade-up" class="section-title slider-info-title flex-grow-1 text-center" v-if="title">{{ title }}</h2>
			<b-row  data-aos="fade-up" class="slider-info slider-info--not-slider">
				<b-col cols="12" sm="4"  v-for="(item, index) in showed" :key="index" v-if="items[index]">
					<div class="slider-info__item swiper-slide-active"  data-aos="fade-up">
						<h5>{{items[index].title}}</h5>
						<p>{{items[index].text}}</p>
					</div>
				</b-col>
			</b-row>
		<b-button v-if="showed < items.length" data-aos="fade-up" @click="showed += 3" variant="more" class="slider-info-more">Смотреть еще<svgicon name="btn-arrow" /></b-button>
		</template>
	</b-container>
</template>

<script>
export default {
	name: "SliderInfo",
	props: {
		title: {
			type: String,
			default: null
		},
		btnColor: {
			type: String,
			default: null
		},
		slider: {
			type: Boolean,
			default: false
		},
		items: {
			type: Object,
    		default: () => ({}),
		}
	},
	data: () => ({
		showed: 6,
		swiperOptions: {
			grabCursor: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			speed: 900,
			spaceBetween: 10,
			navigation: {
				nextEl: ".slider-nav__next",
				prevEl: ".slider-nav__prev"
			},
			breakpoints: {
				768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
					spaceBetween: 30,
				},
				1320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
				}
			}
		}
	}),
	computed: {
		itemsTest() {
			return [

				{
					title: '🔥 Push/Local Notification',
					text: 'Локальные и удаленные уведомления',
				},
				{
					title: '🔥 StoreKit',
					text: 'Встроенные покупки',
				},
				{
					title: '🔥 CloudKit',
					text: 'Синхронизация данных с облачным хранилищем iCloud',
				},
				{
					title: '🔥 Rest api, JSON',
					text: 'Клиент-серверное приложение',
				},
				{
					title: '🔥 Realm Database',
					text: 'База данных Realm',
				},
				{
					title: '🔥 CoreAnimation, CoreGraphics',
					text: 'Синхронизация данных с облачным хранилищем iCloud',
				},
				{
					title: '🔥 Associated Domains',
					text: 'Соедините приложение и веб-сайта',
				},
				{
					title: '🔥 Firebase',
					text: 'Получение полной статистики приложения, отслеживание активности пользователей',
				},

				{
					title: '🔥 Push/Local Notification',
					text: 'Локальные и удаленные уведомления',
				},
				{
					title: '🔥 StoreKit',
					text: 'Встроенные покупки',
				},
				{
					title: '🔥 CloudKit',
					text: 'Синхронизация данных с облачным хранилищем iCloud',
				},
				{
					title: '🔥 Rest api, JSON',
					text: 'Клиент-серверное приложение',
				},
				{
					title: '🔥 Realm Database',
					text: 'База данных Realm',
				},
				{
					title: '🔥 CoreAnimation, CoreGraphics',
					text: 'Синхронизация данных с облачным хранилищем iCloud',
				},
				{
					title: '🔥 Associated Domains',
					text: 'Соедините приложение и веб-сайта',
				},
				{
					title: '🔥 Firebase',
					text: 'Получение полной статистики приложения, отслеживание активности пользователей',
				},
			]
		}
	},
	mounted() {
	}
};
</script>

<style lang="scss">
.slider-info {
	overflow: visible;
	cursor: grab;
	width: 85%;
    width: 100%;

	&-title {
		text-align: left;
	}

	&__item {
		padding: $gutter-sm 20px 30px 35px;
		background: $grey;
		color: $white;
		border-radius: $border-radius;
		transition: opacity .6s ease;
		user-select: none;

		.icon {
			width: 45px;
			height: 45px;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			background-color: #ef4a4a;
			border: 22.5px solid #ef4a4a;
			box-sizing: content-box;
			border-radius: 50%;
			margin-bottom: 25px;
			display: flex;
			justify-content: center;
			align-items: center;

			svg {
				flex: 1;
			}
		}

		h5 {
			margin-bottom: $gutter;
		}

		p {
			font-size: 18px;
			line-height: 26px;
		}

		&::after {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			opacity: 0;
			transition: opacity .6s ease;
			background-image: linear-gradient(to right, rgba(0, 0, 0, 0.36) -2%, #000000 78%);
		}

		&.swiper-slide-active,
		&.swiper-slide-next {
			opacity: 1;
		}

		&.swiper-slide-next {
			& + .swiper-slide {
				opacity: 1;
				&::after {
					opacity: 1;
				}

				& + .swiper-slide {
					&::after {
						opacity: 1;
					}
				}
			}
		}

		@include up($md) {
			opacity: 0;
		}
	}

	&-nav {
		position: relative;
		user-select: none;

		&__prev,
		&__next {
			width: 63px;
			height: 63px;
			border-radius: 50%;
			background: #ef4a4a;
			z-index: 1;
			outline: none;
			cursor: pointer;
			position: relative;
			user-select: none;
			transition: background $transition;
			
			svg {
				height: 30px;
				width: 30px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-43%,-50%) rotate(90deg);

				path {
					fill: transparent;
					stroke: $white;
					transition: stroke $transition;
				}
			}

			&.swiper-button-disabled {
				background: #191919;
				pointer-events: none;

				path {
					stroke: #979797;
				}
			}
		}

		&__prev {
			margin-right: $gutter;

			svg {
				transform: translate(-57%,-50%) rotate(270deg);
			}
		}
	}

	&-more {
		margin: 70px auto 0;
	}

	&--not-slider {
		width: auto;
		cursor: default;

		margin: 0 -5px;

		.col-12 {
			padding: 0 5px 10px;
			
			flex: 0 0 100%;
			max-width: 100%;

			@include up($md) {
			
				flex: 0 0 50%;
				max-width: 50%;
			}

			@include up($lg) {
			
				flex: 0 0 33.33333333%;
				max-width: 33.33333333%;
			}

			@include upLandscape($sm-land) {
				flex: 0 0 50%;
				max-width: 50%;
			}

			@include upLandscape($lg-land) {
			
				flex: 0 0 33.33333333%;
				max-width: 33.33333333%;
			}
		}

		.slider-info__item {
			height: 100%;
			background: #1a1a1a;
		}
	}
}
</style>