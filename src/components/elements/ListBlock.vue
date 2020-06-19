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
            <b-col class="list-block__img" :class="{'overflow': overflow}" cols="12" sm="5" v-if="imageSrc">
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
        },
        overflow: {
            type: Boolean,
            default: false,
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
        flex: 0 0 100%;
        max-width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;

        @include up($md) {
            flex: 0 0 58.3333333333%;
            max-width: 58.3333333333%;
        }

        @include upLandscape($xs-land) {
            flex: 0 0 58.3333333333%;
            max-width: 58.3333333333%;
        }

        @include upLandscape($md-land) {
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }

    .row {
        flex-flow: column;

        @include up($md) {
            flex-flow: row;
        }
        
        @include upLandscape($xs-land) {
            flex-flow: row;
        }
    }

    &__img {        
        flex: 0 0 100%;
        max-width: 100%;

        .img-wrap {
            position: relative;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: flex-start;
        }

        img {
            max-height: 65vh;
            margin: 0 auto;
            display: block;

            @include up($lg) {
                max-height: 100%;
            }

            @include upLandscape($xs-land) {
                max-height: none;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                max-height: 100%;
            }
        }

        &.overflow {
            img {

                @include upLandscape($xl-land) {
                    height: 160%;
                    max-height: 160%;
                    max-width: 100%;
                    top: 50%;
                    transform: translate(-50%, -30%);
                }
            }
        }

        @include up($md) {
            flex: 0 0 41.6666666667%;
            max-width: 41.6666666667%;
        }

        @include upLandscape($xs-land) {
            flex: 0 0 41.6666666667%;
            max-width: 41.6666666667%;
        }

    }

    @include up($md) {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    @include upLandscape($xl-land) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
}
</style>