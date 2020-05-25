<template>
	<b-container>
		<b-row class="case-card">
			<!--  -->
			<b-col cols="12" lg="6" class="case-card__img">
				<div class="image-bg" :style="`background-image: url('${imageSrc}')`" />
				<div class="glow" :style="glowStyle" />
			</b-col>
			<b-col cols="12" lg="6" class="case-card__text">
				<h1>
					{{ title }}
					<img :src="logo" alt="app_icon" />
				</h1>
				<h6>{{ subTitle }}</h6>
				<p>Find Photo - это универсальный выбор для тех, кто хочет не хочет упустить ни одного ценного момента своей жизни.</p>
				<CaseTags  />
				<b-link :to="{name: 'case'}" v-if="$route.name=='home'">
					<b-button variant="circle"><div class="btn-circle__hover" :style="`background: ${glowColor}`" />Смотреть кейс</b-button>
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
			default: "#0262ce"
		},
		imageSrc: {
			type: String,
			default: null
		},
		logo: {
			type: String,
			default: null
		},
		title: {
			type: String,
			default: null,
		},
		subTitle: {
			type: String,
			default: null,
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
	padding: get-vw(75px, 320) 0 get-vw(56px, 320);
	flex-flow: column;

	h1 {
		/*
		display: flex;
		align-items: center;
		justify-content: center;
		*/
		margin-bottom: get-vw(5px, 320);
		
		img {
			width: get-vw(27px, 320);
			height: get-vw(27px, 320);
			margin-top: get-vw(-5px, 320);
			margin-left: 0px;

			@include up($sm) {
				width: get-vw(40px, 414);
				height: get-vw(40px, 414);
			}

			@include up($md) {
				width: 40px;
				height: 40px;
				margin-top: -5px;
				margin-left: 5px;
			}

			@include up($lg) {
				width: get-vw(50px, 1024);
				height: get-vw(50px, 1024);
				margin-top: 0;
				margin-left: get-vw(5px, 1024);
			}

			@include upLandscape($xs) {
				width: get-vw(27px, 568);
				height: get-vw(27px, 568);
				margin-top: get-vw(-5px, 568);
				margin-left: 0px;
			}
	
			@include upLandscape($xl-land) {
				width: get-vw(50px, 1920);
				height: get-vw(50px, 1920);
				margin-left: get-vw(10px, 1920);
				margin-top: get-vw(-10px, 1920);
			}
		}

		@include up($sm) {
			margin-bottom: 0;
		}

		@include up($md) {
		}

		@include up($lg) {
			justify-content: flex-start;
			margin-bottom: get-vw(10px, 1024);
		}
	
		@include upLandscape($md-land) {
			margin-bottom: get-vw(31px, 1024);
		}
	
		@include upLandscape($xl-land) {
			margin-bottom: get-vw(31px, 1920);
		}
	}

	h6 {
		margin-bottom: get-vw($gutter, 320);

		@include adopt($sm) {
			max-width: get-vw(250px, 320);
			margin-left: auto;
			margin-right: auto;
		}

		@include up($md) {
			margin-bottom: get-vw(25px, 768);
		}

		@include up($lg) {
			margin-bottom: get-vw(60px, 1024);
		}
	
		@include upLandscape($md-land) {
			margin-bottom: get-vw(25px, 1024);
			display: none;
		}
	
		@include upLandscape($lg-land) {
			margin-bottom: get-vw(50px, 1366);
		}
	
		@include upLandscape($xl-land) {
			margin-bottom: get-vw(25px, 1920);
		}
	}

	&__text {
		text-align: center;
		flex: 0;
		position: relative;
		z-index: 1;

		& > * {
			@include up($lg) {
				//max-width: 520px;
			}
		}

		p {
			margin-bottom: $gutter-sm;

			@include up($md) {
				max-width: get-vw(360px, 768);
				margin: 0 auto get-vw(55px, 768);
			}

			@include up($lg) {
				max-width: get-vw(550px, 1024);
			}
	
			@include upLandscape($md-land) {
				margin-bottom: get-vw(55px, 1024);
				margin-left: 0;
			}
	
			@include upLandscape($lg-land) {
				margin-bottom: get-vw(80px, 1366);
			}

			@include upLandscape($xl-land) {
				margin-bottom: get-vw(43px, 1920);
				max-width: get-vw(490px, 1920);
			}
		}

		@include up($md) {
    		margin-bottom: auto;
		}

		@include up($lg) {
			//text-align: left;
			//flex: 0 0 50%;
		}
	
		@include upLandscape($xs) {
			flex: 0 0 60%;
			max-width: 60%;
			text-align: left;
			margin: auto 0;
		}

		@include upLandscape($md-land) {
			flex: 0 0 55%;
			max-width: 55%;
		}
	}

	&__img {
		position: relative;
		z-index: 1;
		margin-bottom: get-vw(15px, 320);
		padding-top: get-vw(10px, 320);
		height: auto;
		flex-shrink: 1;
		min-height: 0;
		max-height: get-vw(340px, 320);

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
			opacity: .4;


		}

		.image-bg {
			width: 100%;
			height: 100%;
			background-position: center;
			background-repeat: no-repeat;
			background-size: contain;
			/*
			display: block;
			min-height: 0;
			margin: 0 auto;
			max-height: 100%;
			height: 100%;
			*/
		}

		@include up($sm) {
			padding-top: get-vw(35px, 414);
			margin-bottom: get-vw(45px, 414);
    		//margin-top: auto;
		}

		@include up($md) {
			padding-top: get-vw(65px, 768);
			max-height: get-vw(500px, 768);
			margin-bottom: get-vw(50px, 768);
    		//margin-top: auto;
		}

		@include up($lg) {
			max-height: get-vw(665px, 1024);
			margin-bottom: get-vw(50px, 1024);
		}
	
		@include upLandscape($xs) {
			flex: 0 0 40%;
			max-width: 40%;
			margin-bottom: 0;
			padding: get-vw($gutter, 568);
			padding-left: 0;
			margin: auto 0;
    		height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}    

		@include upLandscape($md-land) {
    		height: get-vw(500px, 1024);
			flex: 0 0 45%;
			max-width: 45%;
			padding-right: 0;
			padding-top: 0;
    		max-height: 100%;
		}

		@include upLandscape($xl-land) {
			height: get-vw(570px, 1920);
			padding-left: 0;
		}

		@include upLandscape($xxl-land) {
			height: get-vw(730px, 2560);
			padding-bottom: get-vw(55px, 2560);
			padding-left: 0;
		}
	}

	@include up($sm) {
		justify-content: center;
	}

	@include up($md) {
		padding: 75px 0 56px;
	}

	@include up($lg) {
		padding: get-vw(110px, 1024) 0;
	}

	@include up($lg) {
		//padding: $gutter-xl 0;
		//flex-flow: wrap;
		//flex-direction: row-reverse;
		//align-items: center;
	}
	
	@include upLandscape($xs) {
		flex-flow: row-reverse;
		padding: get-vw(50px, 568) 0 get-vw(30px, 568);
	}
	
	@include upLandscape($md-land) {
		flex-flow: row-reverse;
		padding: get-vw(50px, 568) 0 get-vw(30px, 568);
	}
	
	@include upLandscape($lg-land) {
		flex-flow: row-reverse;
		padding: get-vw(62px, 568) 0 get-vw(30px, 568);
	}
}

@keyframes glow {
	from {
		transform: translate(-50%, -50%) skew(-30deg, 10deg);
	}

	50% {
		transform: translate(-50%, -50%) skew(-14deg, 10deg);
		opacity: 0.5;
	}

	75% {
		transform: translate(-50%, -50%) skew(-30deg, 10deg);
	}

	to {
		transform: translate(-50%, -50%) skew(-30deg, 10deg);
	}
}
</style>