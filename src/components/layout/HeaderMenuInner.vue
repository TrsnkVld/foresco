<template>
	<ul ref="menu" class="menu-links">
		<div class="indicator" :class="{'indicator-close': isIndicatorClose}">
			<div
				class="indicator__inner"
				:style="`height: ${indicatorHeight}; background-color: ${indicatorColor}`"
			/>
		</div>

		<div class="menu-links__inner" :class="{'closing': isIndicatorClose}">
			<li
				v-for="(item, index) in menuLinks"
				:key="index"
				class="menu-links__item"
				:class="{'active': index===indicatorActive, 'color-active': isIndicatorClose && index===indicatorActive}"
				:style="`transition-delay: ${(menuLinks.length-index+1)/40 - 0.05}s; color: ${indicatorColor}`"
				:ref="`link-${index}`"
				@mouseover="indicatorMovement(index, $event), indicatorColor=item.color, indicatorActive=index"
			>
				<router-link :to="{name: item.link}" @click.native="$emit('onLinkClick')">
					<span>
						{{ item.title }}
						<span class="menu-links-overflow">
							<span :style="`color: ${indicatorColor}`">{{ item.title }}</span>
						</span>
					</span>
				</router-link>
			</li>
		</div>
	</ul>
</template>

<script>

export default {
	name: "HeaderMenuInner",
	data: () => ({
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
				link: "about"
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
	props: {
		isIndicatorClose: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		menuHeight() {
            return `height: ${window.innerHeight}px`;
		},

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

		linksStyle() {
			if (this.isMenuContentShown) {
				//return `transform: translateX(-${this.$refs.menu.clientWidth}px)`;
			} else {
				//return "transform: translateX(0px)";
			}
		}
	},
	methods: {
		timer() {
			setTimeout(() => {
				this.isMenuLinksShowed = true;
			}, 1);
		},

		indicatorMovement(index, e) {
			if (index == this.menuLinks.length - 1) {
				this.indicatorHeight = "100%";
			} else {
				this.indicatorHeight = `${e.target.parentElement.offsetTop +
					e.target.offsetHeight}px`;
					if (e.target.parentElement.nextSibling===null) {
						//console.log('X')
					} else {
						//console.log(e.target.parentElement.nextSibling);
					}
			}
		}
		/*


		indicatorMovement(index, e) {
			if (index == this.menuLinks.length - 1) {
				this.indicatorHeight = "100%";
			} else {
				this.indicatorHeight = `${e.target.parentElement.offsetTop + e.target.offsetHeight}px`;
			}
		},
		* */
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
	mounted() {
		this.indicatorHeight = `${document.querySelector('.menu-links__item.active').offsetTop + document.querySelector('.menu-links__item.active').offsetHeight}px`;
	}
};
</script>

<style lang="scss">
</style>