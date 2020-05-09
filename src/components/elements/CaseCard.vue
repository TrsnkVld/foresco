<template>
	<b-container>
		<b-row class="case-card" align-v="center">
			<b-col cols="12" sm="6" class="case-card__text">
				<h1>Saldo. Долги <img src="@/assets/img/logo.png" alt="app_icon" /></h1>
				<h6>Приложение для учёта и ведения долгов и расходов</h6>
				<p>Приложение, которое поможет вам всегда держать под контролем процессы взятия, выдачи и возврата займов.</p>
				<b-link :to="{name: 'case'}" v-if="$route.name=='home'">
					<b-button variant="primary">Смотреть кейс</b-button>
				</b-link>
			</b-col>
			<b-col cols="12" sm="6" class="case-card__img">
				<img src="@/assets/img/saldo_mockup.png" alt="case_img" />
				<div class="glow" :style="glowStyle" />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "CaseCard",
	props: {
		glowColor: {
			type: String,
			default: '#ffffff'
		}
	},
	data: () => ({
		img: "../../assets/img/saldo_mockup.png",
		//glowColor: '#3779bccc'
	}),
	computed: {
		glowStyle() {
			return `background: radial-gradient(circle closest-side, ${this.glowColor}, #0067de00 73%);`
		}
	}
};
</script>

<style lang="scss">
.case-card {
	height: 100vh;
	color: $white;
	padding: $gutter-xl 0;
	
	h1 {
		display: flex;
		align-items: center;

		img {
			width: 60px;
			height: 60px;
			margin-top: 12px;
			margin-left: $gutter;
		} 
	}

	h6 {
		margin-bottom: $gutter-sm;
	}

	&__text {
		& > * {
			max-width: 520px;
		}
	}

    &__img {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		position: relative;
		z-index: 1;

		.glow {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 200%;
			height: 200%;
			z-index: -1;
			animation: test 6s infinite linear;
			pointer-events: none;
		}
	
        img {
            max-width: 100%;
            max-height: 100%;
        }
    }
}

@keyframes test {
	from {
		transform: translate(-50%,-50%) skew(-30deg, 10deg) rotate(0);
	}

	50% {
		transform: translate(-50%,-50%) skew(-14deg, 10deg) rotate(-360deg);
		opacity: .6;
	}

	75% {
		transform: translate(-50%,-50%) skew(-30deg, 10deg) rotate(-540deg);
	}

	to {
		transform: translate(-50%,-50%) skew(-30deg, 10deg) rotate(0) rotate(-720deg);
	}
}
</style>