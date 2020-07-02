<template>
	<div id="foresco">
		<transition name="stars-wrapper">
			<AppStars v-if="isStarsShowed || isMenuOpened" :delimeterProp="6.4" /> 
		</transition>
		<HeaderLayout :class="{'hidden': !isHeaderShowed}" />
		<transition name="route">
			<router-view class="page" :class="{'hidden': isMenuOpened}" />
		</transition>

		<transition name="modal-wrap" @enter="isModalInnerShowed=true" @after-leave="isModalInnerShowed=false">
			<div class="modal-wrap" v-if="isModalShowed" >
				<AppStars :delimeterProp="6.4" /> 
				
				<div class="modal-background" @click="isModalShowed=false" />

				<transition name="modal-inner">
					<div v-if="isModalInnerShowed" class="modal-inner">
						<FeedbackForm @onFormClose="isModalShowed=false" />
					</div>
				</transition>
			</div>
		</transition>

		<transition name="modal-wrap" @enter="isModalInnerShowed=true" @after-leave="isModalInnerShowed=false">
			<div class="modal-wrap" v-if="isTeamModalShowed" >
				<AppStars :delimeterProp="6.4" /> 
				
				<div class="modal-background" @click="isTeamModalShowed=false" />

				<transition name="modal-inner">
					<div v-if="isModalInnerShowed" class="modal-inner">
						<FeedbackFormTeam @onFormClose="isTeamModalShowed=false" />
					</div>
				</transition>
			</div>
		</transition>

		<FooterLayout v-if="!isRouteNameHome" :class="{'hidden': isMenuOpened}" />
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
			if (this.$route.name === 'contacts' || this.$route.name === 'about' || this.$route.name === 'home') return true;
			return false;
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
