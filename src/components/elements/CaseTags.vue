<template>
	<div class="case-tags">
		<div class="case-tags__item" v-for="(item, index) in tags" :key="index">{{ item }}</div>
	</div>
</template>

<script>
export default {
	name: "CaseTags",
	data: () => ({
		tags: ["development", "development", "design"]
	})
};
</script>

<style lang="scss">
.case-tags {
	margin: 0 get-vw(-4px, 320);
	text-align: left;
	align-items: flex-start;
    justify-content: center;
	display: flex;
	flex-flow: wrap;
    margin: 0 auto;

	&__item {
		display: inline-block;
		font-size: get-vw(13px, 320);
		line-height: get-vw(13px, 320);
		font-weight: bold;
		font-family: Source Sans Pro;
		background: $light-grey;
		border-radius: get-vw($border-radius, 320);
		padding: get-vw(14px, 320) get-vw(20px, 320);
		margin: 0px get-vw(4px, 320) get-vw(8px, 320);

		@include up($md) {
			font-size: get-vw(12px, 768);
			line-height: get-vw(12px, 768);
			padding: get-vw(10px, 768) get-vw(15px, 768);
			margin: 0px get-vw(3px, 768) get-vw(6px, 768);
		    border-radius: get-vw($border-radius, 768);
		}

		@include up($lg) {
			font-size: get-vw(18px, 1024);
			line-height: get-vw(18px, 1024);
			margin: 0px get-vw(4px, 1024) get-vw(8px, 1024);
		    border-radius: get-vw($border-radius, 1024);
			font-weight: 500;
			padding: get-vw(16px, 1024) get-vw(19px, 1024);
		}

		@include upLandscape($md-land) {
			font-size: get-vw(12px, 1024);
			line-height: get-vw(12px, 1024);
			padding: get-vw(10px, 1024) get-vw(15px, 1024);
			margin: 0px get-vw(3px, 1024) get-vw(6px, 1024);
		    border-radius: get-vw($border-radius, 1024);
		}

		@include upLandscape($lg-land) {
			font-size: get-vw(18px, 1366);
			line-height: get-vw(18px, 1366);
			margin: 0px get-vw(4px, 1366) get-vw(8px, 1366);
		    border-radius: get-vw($border-radius, 1366);
			font-weight: 500;
			padding: get-vw(16px, 1366) get-vw(19px, 1366);
		}

		@include upLandscape($xl-land) {
			font-size: get-vw(15px, 1920);
			line-height: get-vw(15px, 1920);
			margin: 0px get-vw(4px, 1920) get-vw(8px, 1920);
		    border-radius: get-vw($border-radius, 1920);
			font-weight: 500;
			padding: get-vw(14px, 1920) get-vw(21px, 1920);
		}
	}

	@include up($md) {
		margin: 0 auto get-vw(30px, 768);
		max-width: 70%;
		//min-height: get-vw(76px, 768);
	}

	@include up($lg) {
        margin: 0 auto get-vw(50px, 1024);
		//min-height: get-vw(116px, 1024);
	}

    @include upLandscape($xs) {
		justify-content: flex-start;
    	margin: 0 auto;
    }

    @include upLandscape($md-land) {
		margin: 0 get-vw(-2.5px, 1024) get-vw($gutter, 1024);
		max-width: none;
		//min-height: get-vw(76px, 1024);
    }

	@include upLandscape($lg-land) {
		margin: 0 get-vw(-4px, 1366) get-vw($gutter-sm, 1366);
		//min-height: get-vw(116px, 1366);
	}

	@include upLandscape($xl-land) {
		margin-bottom: get-vw(60px, 1920);
		//min-height: get-vw(116px, 1366);
	}
}
</style>