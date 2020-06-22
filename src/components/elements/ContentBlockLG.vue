<template>
	<b-col cols="12" class="content-block content-block--lg" :class="{'overflow': overflow}" data-aos="fade-up" >
		<div class="content-block-inner" :class="imgPosition" :style="`${bgStyle} ${textStyle}`">
			<b-row :class="(type=='left') ? 'reversed' : null">
				<b-col cols="12" md="7" class="content-block-inner__text">
					<h3>{{ title }}</h3>
					<h6 v-if="subTitle">{{ subTitle }}</h6>
					<p>{{ text }}</p>
				</b-col>
				<b-col cols="12" md="5" class="content-block-inner__img">
					<img v-if="img" :src="setImage" alt="block_img" />
				</b-col>
			</b-row>
		</div>
	</b-col>
</template>

<script>
export default {
	name: "ContentBlockLG",
	props: {
		type: {
			type: String,
			default: "right"
		},
		title: {
			type: String,
			default: ""
		},
		subTitle: {
			type: String,
			default: null
		},
		text: {
			type: String,
			default: ""
		},
		bgStyle: {
			type: String,
			default: null
		},
		textStyle: {
			type: String,
			default: null
		},
		imgPosition: {
			type: String,
			default: null,
		},
		img: {
			type: String,
			default: null
		},
		overflow: {
			type: Boolean,
			default: false,
		}
	},
	data: () => ({
	}),
	computed: {
		setImage() {
			if (this.img) {
				return require(`../../assets/img/${this.img}`);
			}
		}
	}
};
</script>

<style lang="scss">
.content-block {
	&--lg {
        .content-block-inner {
			&__text {
                @include up($lg) {
                	padding-left: get-vw($gutter-md, 1024);
				}
				
                @include upLandscape($xl-land) {
                	padding-left: 20px;
                }
			}

			.col-12 {
                @include up($lg) {
					flex: 0 0 50%;
					max-width: 50%;
				}
			}
		}
	}
}
</style>