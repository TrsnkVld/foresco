<template>
	<b-container :class="{'small': small}" data-aos="fade-up">
		<a :href="link" target="_blank" class="banner-link" :style="`background-image: url(${require('../../assets/img/'+img)})`">
            <svgicon name="share" />
            <h3>{{title}}</h3>
            <p>{{subTitle}}</p>
        </a>
	</b-container>
</template>

<script>
export default {
	name: "BannerLink",
	props: {
		img: {
			type: String,
			default: null
		},
		small: {
			type: Boolean,
			default: false
        },
        title: {
            type: String,
            default: '',
        },
        subTitle: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        }
	},
	data: () => ({})
};
</script>

<style lang="scss">
.banner-link {
    user-select: none;
	border-radius: 14px;
	height: get-vw(300px, 320);
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
	background-size: auto 105%;
    background-position: center;
    padding: get-vw(40px, 320) get-vw(20px, 320);
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-flow: column;
    transition: background-color .6s ease, background-size .8s ease;

    svg {
        width: 29px;
        height: 23px;
        margin-bottom: auto;
    }
    
    * {
        color: $white;

        @include up($md) {
            text-align: right;
        }

        @include upLandscape($xs-land) {
            text-align: right;
        }
        
    }

    p {
        margin: 10px 0 0;
        width: 100%;
    }

    h3 {
        width: 100%;

        @include up($lg) {
            font-size: 35px;
            line-height: 40px;
            letter-spacing: -0.5px;
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.65);
        text-decoration: none;
	    background-size: auto 110%;
    }

    

    @include up($sm) {
	    height: get-vw(300px, 414);
        padding: get-vw(40px, 414) get-vw(20px, 414);
    }

    @include up($md) {
	    height: get-vw(320px, 768);
        padding: get-vw(55px, 768) get-vw(40px, 768) get-vw(70px, 768);
    }

    @include up($lg) {
	    height: get-vw(480px, 1024);
        padding: get-vw(55px, 1024) get-vw(40px, 1024) get-vw(70px, 1024);
    }

    @include upLandscape($xs-land) {
	    height: get-vw(280px, 568);
        padding: get-vw(40px, 568) get-vw(20px, 568);
    }

    @include upLandscape($sm-land) {
	    height: get-vw(400px, 895);
        padding: get-vw(40px, 895) get-vw(20px, 895);
    }

    @include upLandscape($md-land) {
	    height: get-vw(400px, 1024);
        padding: get-vw(55px, 1024) get-vw(40px, 1024) get-vw(70px, 1024);
    }

    @include upLandscape($lg-land) {
	    height: get-vw(470px, 1366);
        padding: get-vw(55px, 1366) get-vw(40px, 1366) get-vw(70px, 1366);
    }

    @include upLandscape($xl-land) {
	    height: 500px;
        padding: 55px 40px 70px;
        background-size: 105% auto;

        &:hover {
            background-size: 110% auto;
        }
    }
}
</style>