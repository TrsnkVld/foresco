<template>
	<b-container>
		<b-row class="case-card">
			<!--  -->
			<b-col cols="12" lg="6" class="case-card__img">
				<img src="@/assets/img/test.png" alt="case_img" />
				<div class="glow" :style="glowStyle" />
			</b-col>
			<b-col cols="12" lg="6" class="case-card__text">
				<h1>
					Saldo. Долги
					<img src="@/assets/img/logo.png" alt="app_icon" />
				</h1>
				<h6>Приложение для учёта и ведения долгов и расходов</h6>
				<p>Приложение, которое поможет вам всегда держать под контролем процессы взятия, выдачи и возврата займов.</p>
				<CaseTags  />
				<b-link :to="{name: 'case'}" v-if="$route.name=='home'">
					<b-button variant="circle">Смотреть кейс</b-button>
				</b-link>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import CaseTags from "./CaseTags";

export default {
	name: "CaseCard",
	components: {
		CaseTags
	},
	props: {
		glowColor: {
			type: String,
			default: "#ffffff"
		}
	},
	data: () => ({
		img: "../../assets/img/saldo_mockup.png",
		//glowColor: '#3779bccc'
	}),
	methods: {
	},
	computed: {
		glowStyle() {
			return `background: radial-gradient(circle closest-side, ${this.glowColor}, #0067de00 73%);`;
		}
	},
	mounted() {
	}
};
</script>

<style lang="scss">
.case-card { 
	height: 100vh;
	color: $white;
	padding: $gutter-md 0;
	flex-flow: column;

	h1 {
		/*
		display: flex;
		align-items: center;
		justify-content: center;
		*/
		margin-bottom: $gutter;

		img {
			width: 28px;
			height: 28px;
			margin-top: 4px;
			margin-left: 10px;

			@include up($sm) {
				width: 40px;
				height: 40px;
				margin-top: 12px;
				margin-left: $gutter;
			}

			@include up($lg) {
				width: 60px;
				height: 60px;
				margin-top: 0;
				margin-left: $gutter;
			}
		}

		@include up($lg) {
			margin-bottom: 0;
			justify-content: flex-start;
		}
	}

	h6 {
		margin-bottom: $gutter;

		@include up($lg) {
			margin-bottom: $gutter-sm;
		}
	}

	&__text {
		text-align: center;
		flex-shrink: 1;
		flex: 0;

		& > * {
			@include up($lg) {
				max-width: 520px;
			}
		}

		p {
			margin-bottom: $gutter-sm;

			@include up($lg) {
				min-height: 155px;
			}
		}

		@include up($lg) {
			text-align: left;
			flex: 0 0 50%;
		}
	}

	&__img {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		//height: 100%;
		z-index: 1;
		margin-bottom: $gutter;
		//flex-grow: 0;
		flex-shrink: 1;
    	min-height: 0;

		.glow {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 200%;
			height: 200%;
			z-index: -1;
			animation: glow 5s infinite ease-in-out;
			pointer-events: none;
		}

		img {
			flex: 0;
			max-width: 100%;
			max-height: 100%;
			display: block;
		}

		@include up($sm) {
		}

		@include up($lg) {
			margin-bottom: 0;
    		height: 100%;
		}
	}

	@include up($lg) {
		padding: $gutter-xl 0;
		flex-flow: wrap;
		flex-direction: row-reverse;
		align-items: center;
	}
}

@keyframes glow {
	from {
		transform: translate(-50%, -50%) skew(-30deg, 10deg) rotate(0);
	}

	50% {
		transform: translate(-50%, -50%) skew(-14deg, 10deg) rotate(-360deg);
		opacity: 0.6;
	}

	75% {
		transform: translate(-50%, -50%) skew(-30deg, 10deg) rotate(-540deg);
	}

	to {
		transform: translate(-50%, -50%) skew(-30deg, 10deg) rotate(0)
			rotate(-720deg);
	}
}
</style>