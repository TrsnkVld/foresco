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
						<small></small>
						<h5>{{ item.name }}</h5>
						<p>{{ item.question }}</p>
					</div>
				</div>
				<div class="faq-item faq-item--answer">
					<div class="faq-item__photo" />
					<div class="faq-item__content">
						<small></small>
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
				question: "Нужна ли регистрация для работы в приложении?",
				answer: "Нет, регистрация не требуется."
			},
			{
				date: "20.12.2020 11:35",
				name: "Ирина",
				question: "Есть ли возможность вести долг в другой валюте?",
				answer:
					"Вы сами выбираете валюту, в которой будете вести долг. На данный момент в Saldo представлено более 150 видов валют."
			},
			{
				date: "20.12.2020 11:35",
				name: "Максим",
				question: "Можно ли сохранить анонимность при вступлении в совместный долг?",
				answer:
					"Личные данные участников остаются скрытыми для всех сторон сделки."
			},
			{
				date: "20.12.2020 11:35",
				name: "Александр",
				question: "Как будут начисляться проценты, если постоянно менялась сумма долга?",
				answer:
					"При изменении суммы долга за расчетный период проценты будут высчитываться отдельно за каждый промежуток."
			},
			{
				date: "20.12.2020 11:35",
				name: "Елена",
				question: "Сохранятся ли долги при потере телефона?",
				answer:
					"Да, сохранятся, если у вас PREMIUM версия, в которой есть синхронизация с iCloud."
			}
		]
	}),
	mounted() {
		/*
		this.$nextTick(() => {
			const swiper = this.$refs.swiper.$swiper;
			const swiperPeople = this.$refs.swiperPeople.$swiper;
			swiper.controller.control = swiperPeople;
			swiperPeople.controller.control = swiper;
		});
		*/
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
		background: $dark-grey;
		padding: 30px;
		color: $white;
		border-radius: 0 $border-radius-md $border-radius-md $border-radius-md;
		margin-bottom: $gutter-sm;
		width: 100%;
		display: flex;
		transform: translateY(50%);
		opacity: 0;
		transition: transform .4s ease .4s, opacity .5s ease;

		&__photo {
			border-radius: 50%;
			width: 70px;
			height: 70px;
			flex-shrink: 0;
			margin-right: 25px;
			background-repeat: no-repeat;
			background-position: center;
			background-color: $white;
			background-image: url('../../assets/img/person-icon.png');
			background-size: 70%;
			opacity: .2;

			@include up($lg) {
				width: 100px;
				height: 100px;
				margin-right: $gutter-sm;
			}
		}

		&__content {
			h5 {
    			margin-top: 20px;
				margin-bottom: 25px;

				@include up($md) {
					margin-bottom: $gutter-xs;
				}
			}

			p {
				&:last-child {
					margin-bottom: 0;
				}
			}
		}

		&--answer {
			border-radius: $border-radius-md 0 $border-radius-md $border-radius-md;
			background: $white;
			color: $black;
			margin-left: auto;

			.faq-item__photo {
				background-color: $black;
				background-image: url('../../assets/img/logo-letter.png');
				background-size: 30%;
				opacity: 1;
			}

			@include up($md) {
				border-radius: $border-radius-lg 0 $border-radius-lg $border-radius-lg;
			}
		}

		&:last-child {
			margin-bottom: 0;
		}

		@include up($md) {
			width: 80%;
			padding: $gutter-sm;
			border-radius: 0 $border-radius-lg $border-radius-lg $border-radius-lg;
		}
	}

	&__item {
		transition: opacity 0.3s;

		&.swiper-slide-active {

			.faq-item {
				opacity: 1;
				transform: translateY(0%);
				transition-delay: .8s;
				
				&--answer {
					transition-delay: .9s;
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

	@include adopt($md) {
		.faq-item__photo {
			position: absolute;
			top: 30px;
			left: 30px;
			width: get-vw(60px, 414);
			height: get-vw(60px, 414);
		}

		.faq-item__content {
			small, h5  {
				padding-left: 90px;
			}
		}
	}
	
	@include adopt($sm) {
		.faq-item__photo {
			width: get-vw(50px, 320);
			height: get-vw(50px, 320);
		}
	}
}
</style>