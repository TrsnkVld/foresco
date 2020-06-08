<template>
	<b-container class="d-flex flex-wrap ">
		<h2 data-aos="fade-up" class="section-title slider-info-title flex-grow-1" v-if="title">{{ title }}</h2>
		<div data-aos="fade-up" class="slider-info-nav d-flex align-self-center">
			<div class="slider-info-nav__prev" slot="button-prev">
				<svgicon name="arrow" />
			</div>
			<div class="slider-info-nav__next" slot="button-next">
				<svgicon name="arrow" />
			</div>
		</div>
		<swiper data-aos="fade-up" class="slider-info" ref="mySwiper" :options="swiperOptions">
			<swiper-slide class="slider-info__item" v-for="(item, index) in items" :key="index">
				<div class="icon" :style="`background-image: url('${require('../../assets/icons/'+ item.icon)}')`" />
				<h5>{{item.title}}</h5>
				<p>{{item.text}}</p>
			</swiper-slide>
		</swiper>
	</b-container>
</template>

<script>
export default {
	name: "SliderInfo",
	props: {
		title: {
			type: String,
			default: null
		}
	},
	data: () => ({
		swiperOptions: {
			grabCursor: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			speed: 900,
			spaceBetween: 30,
			navigation: {
				nextEl: ".slider-info-nav__next",
				prevEl: ".slider-info-nav__prev"
			},
			breakpoints: {
				768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
				},
				1320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
				}
			}
		}
	}),
	computed: {
		items() {
			return [
				{
					title: 'Backend - разработка',
					text: 'Программно-аппаратная часть нашего сервиса. Набор средств, с помощью которых происходит реализация логики приложения.',
					icon: 'arrow-right.svg',
				},
				{
					title: 'Frontend - разработка',
					text: 'Разработка функциональности и пользовательского интерфейса. Сюда относится всё, что пользователь видит, открывая приложение.',
					icon: 'arrow-right.svg',
				},
				{
					title: 'iOS',
					text: 'Платформа iOS – флагман мобильных приложений с самыми высокими показателями прибыли. Объединяет наиболее платежеспособную аудиторию. ',
					icon: 'arrow-right.svg',
				},
			]
		}
	}
};
</script>

<style lang="scss">
.slider-info {
	margin: $gutter-sm 0 $gutter-lg;
	overflow: visible;
	cursor: grab;
	width: 85%;

	&-title {
		text-align: left;
	}

	&__item {
		padding: $gutter-sm 20px 30px 35px;
		background: $grey;
		color: $white;
		border-radius: $border-radius;
		opacity: 0;
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
	}

	&-nav {
		position: relative;

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
}
</style>