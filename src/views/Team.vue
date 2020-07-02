<template>
    <main class="team page">
        <h2 class="team-title"  data-aos="fade-up">Наша команда</h2>
        <swiper
            class="team-swiper"
            :options="swiperOptions"
            ref="teamSwiper"
            :style="`left: -${offset}px`"
             data-aos="fade-up"
        >
            <swiper-slide class="team-swiper__item" v-for="(item, index) in team" :key="index">
                <h2>0{{index+1}}</h2>
                <div class="worker">
                    <div class="worker__img" :style="`background-image: url('${require('../assets/img/team/'+item.img)}')`" />
                    <div class="worker-info">
                        <h3 class="worker__name">{{item.name}}</h3>
                        <p>{{item.position}}</p>
                        <p class="worker__about">{{item.about}}</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="team-swiper__item team-swiper__item--form" >
                <div class="worker open-form">
                    <div class="worker__img" @click="isModalShowed = !isModalShowed">
                        <svgicon name="plus" />
                    </div>
                    <div class="worker-info">
                        <h3 class="worker__name">Наш будущий сотрудник</h3>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </main>
</template>

<script>
export default {
    name: "Team",
    data: () => ({

        team: [
            {
                img: "anatoly2.jpg",
                name: "Анатолий",
                position: "iOS-developer",
                about: "Опыт работы 4 года (Swift)",
            },
            {
                img: "andrew.jpg",
                name: "Андрей",
                position: "Маркетинг",
                about: "Опыт работы 8 лет",
            },
            {
                img: "suren.jpg",
                name: "Сурен",
                position: "Founder, CEO",
                about: "Опыт работы 8 лет",
            },
            {
                img: "victoria.jpg",
                name: "Виктория",
                position: "Дизайн",
                about: "Опыт работы 10 лет",
            },
            {
                img: "arthur.jpg",
                name: "Артур",
                position: "Android-developer, back-end developer",
                about: "Опыт работы 3 года (Elixir, Kotlin, Java)",
            },
            {
                img: "vlad.jpg",
                name: "Владислав",
                position: "Frontend-developer",
                about: "Опыт работы 3 года",
            },
        ],

        offset: null,
		swiperOptions: {
            //mousewheel: this.sliderMouseWheel,
            slidesPerView: 1,
            keyboard: true,
            speed: 700,
            spaceBetween: 20,
            navigation: {
                nextEl: ".team-swiper-nav__next",
                prevEl: ".team-swiper-nav__prev"
            },
            pagination: {
                el: ".team-swiper-pagination__inner",
                type: "fraction",

                renderFraction: function(currentClass, totalClass) {
                    return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
                }
            },
			breakpoints: {
				768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    speed: 1200,
				},
				1320: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 0,
                    speed: 1200,
				}
			}
		},
    }),
    mounted() {
        //this.$refs.teamSwiper.$swiper.slideTo(5, 0);
        const wrapper = document.querySelector('.swiper-wrapper');
        const style = wrapper.style.transform;


        const values = wrapper.style.transform.split(/\w+\(|\);?/);
        const transform = values[1].split(/,\s?/g).map(parseInt);
        this.offset = transform[0];


        document.querySelector('html').classList.add("locked"); 
    },
	computed: {
		isModalShowed: {
			get: function() {
				return this.$store.state.isTeamModalShowed;
			},
			set: function(newValue) {
				this.$store.state.isTeamModalShowed = newValue;
			}
		},
	}

}
</script>

<style lang="scss">
.team {
    padding-top: get-vw(75px, 320);

    &-title {
        top: 0;
        left: 0;
        color: $white;
        padding-left: 20px;

        @include up($md) {
            position: absolute;
            padding-left: 50px;
        }
    }
    
	@include up($sm) {
        padding-top: get-vw(75px, 414);
        .team-title {
        //padding-top: get-vw(100px, 414);

        }
	}

	@include up($md) {
		padding-top: get-vw(70px, 768);
        .team-title {
		padding-top: get-vw(70px, 768);

        }
	}

	@include up($lg) {
		padding-top: get-vw(110px, 1024);
        .team-title {
            
            padding-top: get-vw(110px, 1024);
        }
	}

	@include upLandscape($xs) {
		padding-top: 50px;
        .team-title {
		padding-top: 50px;

        }
	}

	@include upLandscape($sm-land) {
		padding-top: get-vw(100px, 895);
        .team-title {
		padding-top: get-vw(100px, 895);

        }
	}

	@include upLandscape($md-land) {
		padding-top: get-vw(70px, 1024);
        .team-title {
		padding-top: get-vw(70px, 1024);

        }
	}

	@include upLandscape($lg-land) {
		padding-top: get-vw(80px, 1366);
        .team-title {
		padding-top: get-vw(80px, 1366);

        }
	}

	@include upLandscape($xl-land) {
		padding-top: get-vw(120px, 1920);
        .team-title {
		padding-top: get-vw(120px, 1920);

        }
	}
}

.team-swiper {
    padding: 0 20px;
    overflow: visible;
    width: 65%;
    margin-left: 0;

    .swiper-wrapper {
    }

    &__item, .team-swiper__item--form {
        padding: 40px 0 0;
        width: auto;
        transition: border-right .4s ease .3s;

        h2 {
            text-align: right;
            position: absolute;
            top: 0;
            right: 110px;
            display: none;

            @include up($xl) {
                display: block;
            }
        }

        * {
            color: white;
        }

        &:last-child {
            border: none;
        }

        &.swiper-slide-prev {
            border-right: solid 1px transparent;
            transition: border .4s ease .3s;

            h2 {
                opacity: 0;
                border: none;
                transition: opacity .4s ease;
            }
        }

        &.swiper-slide-active {
            h2 {
                opacity: 1;
                transition: opacity .4s ease .7s;
            }

            .worker {

                &__img {
                    filter: unset;
                    border-radius: 3px;
                }

                &-info {
                    opacity: 1;
                }

                &__about {
                    opacity: .5;
                    transform: translateY(0%);
                    transition: opacity, transform, .6s ease .5s;
                }

                @include up($md) {

                    .worker__img {
                        height: 400px;
                        border-radius: 0px;
                    }
                }

                @include up($lg) {
                    transform: translateY(-30px);

                    .worker__img {
                        height: 530px;
                        border-radius: 0px;
                    }
                }
            }

        }

        &--form {

            .worker__img {
                background-color: #191919;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }

        @include up($md) {
            padding: 130px 0 0;

            &.swiper-slide-active {
                .worker__img {
                    height: 530px;
                }
            }
        }

        @include up($lg) {
            padding: 200px 110px 0;
            border-right: solid 1px #97979766;

            &.swiper-slide-active {
                .worker__img {
                    height: 530px;
                }
            }
        }
    }

    .worker {
        transition: transform .4s ease;
        width: 100%;

        &__about {
            opacity: 0;
            transform: translateY(10%);
            transition: opacity, transform, .6s ease;
        }

        &__img {
            overflow: hidden;
            width: 100%;
            height: 260px;
            background-size: cover;
            background-position: top;
            filter: grayscale(1);
            transition: filter, height, .4s ease;

            svg {
                width: 40px;
                height: 40px;
            }

            img {
                width: 100%;
            }
        }
        &-info {
            width: 500px;
            opacity: 0;
            transition: opacity .5s;

            h3 {
                font-weight: 600;
                margin-top: 20px;

                @include up($md) {
                    margin-top: 70px;
                }
            }

            p {
                margin-top: 9px;
            }

            @include up($md) {
                width: auto;
                opacity: 1;
            }

        }

        @include up($md) {

            .worker__img {
                height: 400px;
            }
        }

        @include up($lg) {
            width: 415px;

            .worker__img {
                height: 500px;
            }
        }
    }

    @include up($md) {
        padding: 0 50px;
    width: 90%;
    }
}
</style>