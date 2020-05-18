<template>
	<b-container>
		<div class="title-text">
			<h2 data-aos="fade-up">Задача</h2>
			<h4 data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".title-text h2">
				Стояла задача разработать приложение, 📱 которое
				станет удобным инструментом в сортировке и поиске фотографий 🌄
				и создании категорий, которые позволят хранить в порядке события
				и воспоминания. 📸
			</h4>
		</div>
	</b-container>
</template>

<script>
export default {
	name: "TitleText"
};
</script>

<style lang="scss">
.title-text {
	color: $white;
	text-align: center;
	max-width: 1000px;
	margin: 0 auto;
	padding: $gutter-sm 0;

	h2 {
		margin-bottom: $gutter-md;
	}

    @include up($lg) {
        //padding: $gutter-lg 0;
    }
}
</style>