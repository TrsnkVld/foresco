<template>
	<transition name="menu" @enter="isMenuContentShown = true">
		<div class="menu" v-if="isMenuOpened">
			<transition
				name="menu-links"
				@enter="timer"
				@after-leave="isMenuOpened = false, isMenuLinksShowed = false"
			>
				<HeaderMenuInner v-if="isMenuContentShown" @onLinkClick="$emit('onLinkClick')" :isIndicatorClose="isIndicatorClose" />
			</transition>

			<div class="glow" />
			<!--<StarsParticles /> -->
		</div>
	</transition>
</template>

<script>
import HeaderMenuInner from '@/components/layout/HeaderMenuInner';

export default {
	name: "HeaderMenu",
	components: {
		HeaderMenuInner
	},
	data: () => ({
		test: false,
		indicatorHeight: null,
		indicatorColor: null,
		indicatorActive: 0,
		menuLinks: [
			{
				title: "проекты",
				color: "rgba(55, 119, 255, 0.75)",
				link: "home"
			},
			{
				title: "о нас",
				color: "rgba(255, 167, 56)",
				link: "home"
			},
			{
				title: "команда",
				color: "rgba(96, 224, 135)",
				link: "home"
			},
			{
				title: "контакты",
				color: "rgba(62, 219, 237)",
				link: "contacts"
			}
		]
	}),
	props: ['isIndicatorClose'],
	computed: {
		
		isMenuOpened: {
			get: function() {
				return this.$store.state.isHeaderMenuOpened;
			},
			set: function(newValue) {
				this.$store.state.isHeaderMenuOpened = newValue;
			}
		},

		isMenuContentShown: {
			get: function() {
				return this.$store.state.isHeaderMenuContentShown;
			},
			set: function(newValue) {
				this.$store.state.isHeaderMenuContentShown = newValue;
			}
		},

		isMenuLinksShowed: {
			get: function() {
				return this.$store.state.isMenuLinksShowed;
			},
			set: function(newValue) {
				this.$store.state.isMenuLinksShowed = newValue;
			}
		},
	},
	watch: {
		isIndicatorClose() {
			if (this.isIndicatorClose) {
				console.log(true);
			} else {
				console.log(false);
			}
		}
	},
	methods: {
		timer() {
			setTimeout(() => {
				this.isMenuLinksShowed = true;
			}, 100);
		},
	},
};
</script>

<style lang="scss">
.menu {
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	z-index: -1;
	background: $black;
	padding: 50px $gutter;

	.glow {
		position: absolute;
		top: 50%;
		left: 35%;
		opacity: 0.2;
		transform: translate(-50%, -50%);
		background: radial-gradient(circle closest-side, #3779bccc, #0067de00 73%);
		width: 400%;
		z-index: -1;
		animation: glow-animation 5s infinite ease-in-out;
		pointer-events: none;

		&::after {
			content: "";
			display: block;
			width: 100%;
			padding-top: 100%;
		}

		@include up($sm) {
			width: 200%;
		}

		@include up($md) {
			width: 150%;
			left: 85%;
		}

		@include up($lg) {
			//width: 100%;
			//left: 65%;
		}

		@include up($xl) {
			width: 90%;
			left: 35%;
		}
	}

	.stars-particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	@include up($sm) {
		padding: get-vw(100px, 414) $gutter;
	}

	@include up($md) {
		padding: get-vw(70px, 768) $gutter;
	}

	@include up($lg) {
		padding: get-vw(110px, 1024) $gutter;
	}

	@include upLandscape($xs) {
		padding: 20px $gutter;
	}

	@include upLandscape($sm-land) {
		padding: get-vw(100px, 895) $gutter;
	}

	@include upLandscape($md-land) {
		padding: get-vw(70px, 1024) $gutter;
	}

	@include upLandscape($lg-land) {
		padding: get-vw(80px, 1366) $gutter;
	}

	@include upLandscape($xl-land) {
		padding: get-vw(120px, 1920) $gutter;
	}
}
</style>