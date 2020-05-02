<template>
	<b-container>
		<b-row class="palette-block">
			<b-col cols="12" sm="3" offset-sm="3">
				<h5 data-aos="fade-up">Логотип</h5>
				<div data-aos="fade-up" data-aos-delay="200" class="palette-block__logo" :style="`background-image: url(${logo})`" />
			</b-col>
			<b-col data-aos="fade-up" cols="12" sm="4" offset-sm="1" class="d-flex flex-column">
				<h5 data-aos="fade-up" data-aos-delay="200">Шрифт</h5>
				<h3 data-aos="fade-up" data-aos-delay="400">SF Pro Text</h3>
				<h5 data-aos="fade-up" data-aos-delay="600">Палитра</h5>
				<div class="palette-colors d-flex">
					<div
						class="palette-colors__item"
						v-for="(item, index) in colors"
						:key="index"
						:style="item"
						 data-aos="fade-left"
						:data-aos-delay="1000+index*100"
					/>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "PaletteBlock",
	props: {
		colors: {
			type: Array,
			default: () => []
		}
	},
	data: () => ({
		logo: require("../../assets/img/logo.png")
	})
};
</script>

<style lang="scss">
.palette {
	&-block {
		padding: $gutter-lg 0;

		h5 {
			font-weight: normal;
			margin-bottom: $gutter;

			&:last-of-type {
				margin-top: auto;
			}
		}

		&__logo {
			width: 200px;
			height: 200px;
			background-size: contain;
			background-repeat: no-repeat;
		}
	}

	&-colors {
		&__item {
			width: 60px;
			height: 60px;
			box-shadow: 0 12px 34px 0 rgba(0, 0, 0, 0.15);
			border-radius: 50%;
			margin-right: $gutter;

			&:last-child {
				margin: 0;
			}
		}
	}
}
</style>