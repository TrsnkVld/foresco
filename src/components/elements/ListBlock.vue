<template>
	<b-container class="list-block">
        <b-row>
            <b-col class="list-block__content" cols="12" :sm="(imageSrc) ? 7 : 12">
		        <h2 data-aos="fade-up">Совместный долг в Saldо - это:</h2>
                <ul>
                    <li data-aos="fade-up" data-aos-delay="300" data-aos-anchor=".list-block h2">
                        <svgicon name="checkmark" />
                        Увеличение или уменьшение суммы долга с согласия каждого участника сделки
                    </li>
                    <li data-aos="fade-up" data-aos-delay="600" data-aos-anchor=".list-block h2">
                        <svgicon name="checkmark" />
                        История платежей и подтверждений по выплатам у всех участников
                    </li>
                    <li data-aos="fade-up" data-aos-delay="900" data-aos-anchor=".list-block h2">
                        <svgicon name="checkmark" />
                        Безопасность и конфиденциальность личных данных
                    </li>
                </ul>
            </b-col>
            <b-col class="list-block__img" cols="12" sm="5" v-if="imageSrc">
                <div class="img-wrap" data-aos="fade-left" data-aos-anchor=".list-block h2" data-aos-delay="1200">
                    <img :src="imageSrc" alt="list_img" />
                </div>
            </b-col>
        </b-row>
	</b-container>
</template>

<script>
export default {
    name: "ListBlock",
    props: {
        imageSrc: {
            type: String,
            default: null
        }
    }
};
</script>

<style lang="scss">
.list-block {
	//padding-top: $gutter-sm;
	//padding-bottom: $gutter-sm;

	h2 {
        margin-bottom: $gutter-sm;
    }
    
    &__content {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    &__img {        
        .img-wrap {
            position: relative;
            height: 100%;
        }

        img {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
        }

    }

    @include up($lg) {
        //padding: $gutter-lg 0;
    }
}
</style>