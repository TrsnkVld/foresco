<template>
	<div id="foresco">
		<transition name="stars-wrapper">
			<AppStars  :delimeterProp="6.4" /> <!-- v-if="isStarsShowed" -->
		</transition>
		<HeaderLayout :class="{'hidden': !isHeaderShowed||isModalShowed||isTeamModalShowed}" />
		<transition name="route">
			<router-view class="page" :class="{'hidden': isMenuOpened||isModalShowed||isTeamModalShowed}" />
		</transition>

		<transition name="modal-wrap" @enter="isModalInnerShowed=true" @after-leave="isModalInnerShowed=false">
			<div class="modal-wrap" v-if="isModalShowed" >
				<!--
				<AppStars :delimeterProp="6.4" /> 
				-->
				<div class="modal-background"/>

				<transition name="modal-inner">
					<div v-if="isModalInnerShowed" class="modal-inner">
						<FeedbackForm @onFormClose="isModalShowed=false" />
					</div>
				</transition>
			</div>
		</transition>

		<transition name="modal-wrap" @enter="isModalInnerShowed=true" @after-leave="isModalInnerShowed=false">
			<div class="modal-wrap" v-if="isTeamModalShowed" >
				<!--
				<AppStars :delimeterProp="6.4" /> 
				-->
				<div class="modal-background" />

				<transition name="modal-inner">
					<div v-if="isModalInnerShowed" class="modal-inner">
						<FeedbackFormTeam @onFormClose="isTeamModalShowed=false" />
					</div>
				</transition>
			</div>
		</transition>

		<transition name="route">
			<div v-if="isRouteSheetVisible" class="route-sheet" />
		</transition>
		<FooterLayout v-if="!isRouteNameHome" :class="{'hidden': isMenuOpened||isModalShowed||isTeamModalShowed}" />
	</div>
</template>

<script>
import HeaderLayout from './components/layout/HeaderLayout';
import FooterLayout from './components/layout/FooterLayout';
import FeedbackForm from '@/components/elements/FeedbackForm';
import AppStars from '@/components/elements/stars';
import { debounce } from "debounce";

export default {
	name: 'foresco',
	components: {
		HeaderLayout,
		FooterLayout,
		FeedbackForm,
		AppStars
	},
	data: () => ({
		isHeaderShowed: true,
		lastScrollPosition: 0,
	}),
	created () {
		window.addEventListener('scroll', debounce(this.onScroll, 100));
	},
	destroyed () {
		window.removeEventListener('scroll', debounce(this.onScroll, 100));
	},
	computed: {
		isRouteNameHome() {
			if (this.$route.name === 'home' || this.$route.name === 'team') return true; 
			return false;
		},
		isStarsShowed() {
			if (this.$route.name == 'team') return false;
			return true;
		},

		isRouteSheetVisible: {
			get: function() {
				return this.$store.state.isRouteSheetVisible;
			},
			set: function(newValue) {
				this.$store.state.isRouteSheetVisible = newValue;
			}
		},

		isModalShowed: {
			get: function() {
				return this.$store.state.isModalShowed;
			},
			set: function(newValue) {
				this.$store.state.isModalShowed = newValue;
			}
		},
		isTeamModalShowed: {
			get: function() {
				return this.$store.state.isTeamModalShowed;
			},
			set: function(newValue) {
				this.$store.state.isTeamModalShowed = newValue;
			}
		},
		isModalInnerShowed: {
			get: function() {
				return this.$store.state.isModalInnerShowed;
			},
			set: function(newValue) {
				this.$store.state.isModalInnerShowed = newValue;
			}
		},

		isMenuOpened: {
			get: function() {
				return this.$store.state.isHeaderMenuOpened;
			},
			set: function(newValue) {
				this.$store.state.isHeaderMenuOpened = newValue;
			}
		},

		isPageScrolled: {
			get: function() {
				return this.$store.state.isPageScrolled;
			},
			set: function(newValue) {
				this.$store.state.isPageScrolled = newValue;
			}
		},

		prevScrollpos: {
			get: function() {
				return window.pageYOffset;
			},
			set: function(newValue) {
				this.scrollPosition = newValue;
				return this.scrollPosition;
			}
		},
	},
	methods: {
		onScroll(event) {
			const windowOffset = event.target.documentElement.scrollTop;

			if (windowOffset > 600) {
				const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
				if (currentScrollPosition < 0) {
					return
				}
				this.isHeaderShowed = currentScrollPosition < this.lastScrollPosition
				this.lastScrollPosition = currentScrollPosition
			} else {
				this.isHeaderShowed = true;
			}

			if(windowOffset > 10) {
				this.isPageScrolled = true;
			} else {
				this.isPageScrolled = false;
			}
		}
	},

	watch: {
		$route(to, from) {
			if (!this.isRouteNameHome) {
				document.querySelector('html').classList.remove("scroll-locked");
			} else {
				document.querySelector('html').classList.add("scroll-locked");
			}
		}
	},

	mounted() {
		setTimeout(() => {
			this.isRouteSheetVisible = false;
		}, 1000);
	}
}
</script>

<style lang="scss">
	#foresco {
		flex-grow: 1;
		display: flex;
		flex-flow: column;
	}
</style>
