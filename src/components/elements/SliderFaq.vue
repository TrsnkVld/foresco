<template>
	<b-container class="d-flex flex-wrap">
		<h2 data-aos="fade-up" class="section-title slider-faq-title flex-grow-1" v-if="title">{{ title }}</h2>
		<div data-aos="fade-up" class="slider-faq-nav d-flex align-self-center">
			<div class="slider-nav__prev" slot="button-prev" :style="(btnColor) ? `background: ${btnColor}` : null">
				<svgicon name="arrow" />
			</div>
			<div class="slider-nav__next" slot="button-next" :style="(btnColor) ? `background: ${btnColor}` : null">
				<svgicon name="arrow" />
			</div>
		</div>
		<swiper data-aos="fade-up" class="slider-faq" :options="swiperOptions" ref="swiper">
			<swiper-slide class="slider-faq__item" v-for="(item, index) in faqs" :key="index">
				<div class="faq-item">
					<div class="faq-item__photo" />
					<div class="faq-item__content">
						<small>{{ item.date }}</small>
						<h5>{{ item.name }}</h5>
						<p>{{ item.question }}</p>
					</div>
				</div>
				<div class="faq-item faq-item--answer">
					<div class="faq-item__photo" />
					<div class="faq-item__content">
						<small>{{ item.date }}</small>
						<h5>Foresco</h5>
						<p>{{ item.answer }}</p>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</b-container>
</template>

<script>
export default {
	name: "SliderFaq",
	props: {
		title: {
			type: String,
			default: null
		},
		btnColor: {
			type: String,
			default: null
		}
	},
	data: () => ({
		swiperOptions: {
			keyboard: {
				enabled: true
			},
			grabCursor: true,
			slidesPerView: 1,
			speed: 900,
			navigation: {
				nextEl: ".slider-nav__next",
				prevEl: ".slider-nav__prev"
			},
		},
		faqs: [
			{
				date: "20.12.2020 11:35",
				name: "Алексей",
				question: "Сможете ли вы закончить уже начатый проект?",
				answer:
					"Да, мы берём и такие заказы. Но они требуют более тщательного обсуждения. Иногда сделать этот же проект с нуля получится проще и быстрее, чем доделавыть за другими разработчиками. Если у вас готов только дизайн, мы можем предоставить услугу только для разработки."
			},
			{
				date: "20.12.2020 11:35",
				name: "Алексей",
				question: "Нужна ли регистрация для работы в приложении?",
				answer: "Нет, регистрация не требуется."
			},
			{
				date: "20.12.2020 11:35",
				name: "Алексей",
				question: "Сможете ли вы закончить уже начатый проект?",
				answer:
					"Да, мы берём и такие заказы. Но они требуют более тщательного обсуждения. Иногда сделать этот же проект с нуля получится проще и быстрее, чем доделавыть за другими разработчиками. Если у вас готов только дизайн, мы можем предоставить услугу только для разработки."
			}
		]
	}),
	mounted() {
		this.$nextTick(() => {
			const swiper = this.$refs.swiper.$swiper;
			const swiperPeople = this.$refs.swiperPeople.$swiper;
			swiper.controller.control = swiperPeople;
			swiperPeople.controller.control = swiper;
		});
	}
};
</script>

<style lang="scss">
.slider-faq {
	margin: $gutter-sm 0 $gutter-lg;
	overflow: visible;
	width: 100%;
	
	&-title {
		text-align: left;
	}

	.faq-item {
		padding: $gutter-sm;
		background: $dark-grey;
		color: $white;
		border-radius: 0 $border-radius-lg $border-radius-lg $border-radius-lg;
		margin-bottom: $gutter-sm;
		width: 80%;
		display: flex;
		transform: translateY(50%);
		opacity: 0;
		transition: transform .5s ease .5s, opacity .5s ease;

		&__photo {
			border-radius: 50%;
			background: grey;
			width: 100px;
			height: 100px;
			flex-shrink: 0;
			margin-right: $gutter-sm;
		}

		&__content {
			h5 {
				margin-bottom: $gutter-xs;
			}

			p {
				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&--answer {
			border-radius: $border-radius-lg 0 $border-radius-lg $border-radius-lg;
			background: $white;
			color: $black;
			margin-left: auto;
		}

		&:last-child {
			margin-bottom: 0;
		}
	}

	&__item {
		transition: opacity 0.3s;

		&.swiper-slide-active {

			.faq-item {
				opacity: 1;
				transform: translateY(0%);
				transition-delay: .9s;
				
				&--answer {
					transition-delay: 1.1s;
				}
			}
		}
	}

	.slider-faq-pagination {
		position: absolute;
		background: red;
		top: 0;
		left: 0;
		right: auto;
		bottom: auto;
		z-index: 1;
	}

	&-people {
		//width: 100%;
		//cursor: default;
		//margin: 0;
		display: none;

		.swiper-wrapper {
			//transform: unset !important;
		}

		&__item {
			width: auto !important;

			&-photo {
				width: 56px;
				height: 56px;
				border-radius: 50%;
				cursor: pointer;
				background: grey;
				//margin-right: -50px;
				border: 1px solid $white;
				transition: transform, border, 0.2s;

				&:hover {
					transform: translateX(10px);
				}
			}

			&.swiper-slide-active {
				.slider-faq-people__item-photo {
					border: 3px solid $white;
				}
			}
		}
	}
}
</style>