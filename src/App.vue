<template>
	<div id="foresco">
		<AppStars :delimeterProp="6.4" /> 
		<HeaderLayout />
		<transition name="route">
			<router-view />
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

		<FooterLayout v-if="!isRouteNameHome" />
	</div>
</template>

<script>
import HeaderLayout from './components/layout/HeaderLayout';
import FooterLayout from './components/layout/FooterLayout';
import FeedbackForm from '@/components/elements/FeedbackForm';
import AppStars from '@/components/elements/stars';

export default {
	name: 'foresco',
	components: {
		HeaderLayout,
		FooterLayout,
		FeedbackForm,
		AppStars
	},
	computed: {
		isRouteNameHome() {
			if (this.$route.name==='home') return true;
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
		isModalInnerShowed: {
			get: function() {
				return this.$store.state.isModalInnerShowed;
			},
			set: function(newValue) {
				this.$store.state.isModalInnerShowed = newValue;
			}
		},
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
