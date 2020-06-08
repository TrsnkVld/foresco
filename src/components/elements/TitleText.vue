<template>
	<b-container class="small">
		<div class="title-text">
			<h2 data-aos="fade-up">Задача</h2>
			<h4 data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".title-text h2">
				Разработать приложение, которое станет простым инструментом для учета бухгалтерии по долгам и займам. Программа автоматизирует процесс ведения долгов и будет производить расчеты под контролем всех участников сделки. Сможет эффективно применяться как в бизнесе, так и в повседневной жизни.
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