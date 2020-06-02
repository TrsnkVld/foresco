<template>
	<main class="contacts">
		<SingleSection>
			<SectionTitle tag="h1">
				🚀 Свяжитесь с нами
				<span class="h5" v-if="isMapOpened" @click="isMapOpened = false">Скрыть карту</span>
				<span class="h5" v-else>Мы на связи 24/7</span>
			</SectionTitle>
			<b-container>
				<b-row class="contacts-row">
					<b-col cols="12">
						<FeedbackForm />
					</b-col>
					<b-col cols="12">
						<div class="mapboxgl-wrap">
							<mapbox
								access-token="pk.eyJ1IjoidnRhcmFzZW5rbyIsImEiOiJja2F0cXgwZ3kwamRvMnhwdGtlZjd0cmEwIn0.dud_DOB_FuEn6Cbg8086eQ"
								:map-options="{
									style: 'mapbox://styles/vtarasenko/ckatr9cff37ar1ioy4aoqoeyl',
									zoom: 15.5,
									center: [30.378322, 59.829245],
									dragRotate: false,
									doubleClickZoom: true,
									scrollZoom: true,
								}"
								@map-load="onMapLoad"
							/>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</SingleSection>
	</main>
</template>

<script>
import SingleSection from "@/components/elements/SingleSection";
import SectionTitle from "@/components/elements/SectionTitle";
import FeedbackForm from "@/components/elements/FeedbackForm";
import Mapbox from "mapbox-gl-vue";

export default {
	name: "Contacts",
	components: {
		SingleSection,
		SectionTitle,
		FeedbackForm,
		Mapbox
	},
	data: () => ({
		isMapOpened: false
	}),
	methods: {
		onMapLoad(map) {
			map.resize();
		}
	}
};
</script>

<style lang="scss">
.contacts {
	padding-top: get-vw(75px, 320);
	min-height: 100vh;

	&-row {
		display: flex;
		flex-flow: column;

		.col-12 {
			position: unset;

			@include upLandscape($md-land) {
				flex: 0 0 50%;
				max-width: 50%;
			}

			@include upLandscape($lg-land) {
				&:first-child {
					flex: 0 0 41.6666666667%;
					max-width: 41.6666666667%;
				}

				&:last-child {
					flex: 0 0 58.3333333333%;
					max-width: 58.3333333333%;
				}
			}
		}

		@include up($md) {
			position: relative;
		}

		@include upLandscape($md-land) {
			flex-flow: row-reverse;
		}
	}

	h1 {
		font-size: get-vw(25px, 320);
		letter-spacing: get-vw(-0.4px, 320);
		line-height: get-vw(30px, 320);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: column;
		text-align: center;

		span {
			font-weight: 400;
			cursor: pointer;
		}

		@include up($sm) {
			font-size: get-vw(35px, 414);
			letter-spacing: get-vw(-0.4px, 414);
			line-height: get-vw(40px, 414);
		}

		@include up($md) {
			font-size: get-vw(35px, 768);
			letter-spacing: get-vw(-0.4px, 768);
			line-height: get-vw(40px, 768);
		}

		@include up($lg) {
			font-size: get-vw(35px, 1024);
			line-height: get-vw(40px, 1024);
			letter-spacing: get-vw(-0.4px, 1024);
		}

		@include upLandscape($xs) {
			font-size: get-vw(25px, 568);
			letter-spacing: get-vw(-0.4px, 568);
			line-height: get-vw(30px, 568);
		}

		@include upLandscape($md-land) {
			font-size: get-vw(35px, 1024);
			line-height: get-vw(40px, 1024);
			letter-spacing: get-vw(-0.4px, 1024);
			text-align: left;
			align-items: flex-start;
    		flex-flow: row;
		}

		@include upLandscape($lg-land) {
			font-size: get-vw(35px, 1366);
			line-height: get-vw(40px, 1366);
			letter-spacing: get-vw(-0.4px, 1366);
		}

		@include upLandscape($xl-land) {
			font-size: get-vw(37px, 1920);
			line-height: get-vw(42px, 1920);
			letter-spacing: get-vw(-0.4px, 1920);
		}
	}

	section {
		padding: 0;
	}

	.feedback-form {
		margin-left: auto;
		margin-right: auto;
    	margin-bottom: get-vw(80px, 320);

		@include up($sm) {
    		margin-bottom: get-vw(80px, 414);
		}

		@include up($md) {
    		margin-bottom: get-vw(80px, 768);
		}

		@include upLandscape($md-land) {
    		margin-bottom: get-vw(0px, 768);
		}
	}

	@include up($sm) {
		padding-top: get-vw(100px, 414);
	}

	@include up($md) {
		padding-top: get-vw(70px, 768);
	}

	@include up($lg) {
		padding-top: get-vw(110px, 1024);
	}

	@include upLandscape($xs) {
		padding-top: 50px;
	}

	@include upLandscape($sm-land) {
		padding-top: get-vw(100px, 895);
	}

	@include upLandscape($md-land) {
		padding-top: get-vw(70px, 1024);
	}

	@include upLandscape($lg-land) {
		padding-top: get-vw(80px, 1366);
	}

	@include upLandscape($xl-land) {
		padding-top: get-vw(120px, 1920);
	}
}

.mapboxgl {

	&-wrap {
		width: 100%;
		position: relative;

		&::after {
			content: "";
			display: block;
			width: 100%;
			padding-top: 100%;
		}
			

		@include upLandscape($md-land) {
			height: 100%;

			&::after {
				display: none;
			}
		}
	}

	&-map {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: $border-radius;
	}
	&-control-container {
		display: none !important;
	}
	&-canvas {
		outline: none;
		display: block;
	}
}
</style>