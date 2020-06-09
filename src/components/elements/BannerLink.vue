<template>
	<b-container :class="{'small': small}" data-aos="fade-up">
		<a href="https://www.google.ru/" target="_blank" class="banner-link" :style="`background-image: url('${imageSrc}')`">
            <svgicon name="share" />
            <h2>Соберите все долги и займы в Saldo.Долги</h2>
            <p>Оцените приложение в AppStore</p>
        </a>
	</b-container>
</template>

<script>
export default {
	name: "BannerLink",
	props: {
		imageSrc: {
			type: String,
			default: null
		},
		small: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({})
};
</script>

<style lang="scss">
.banner-link {
    user-select: none;
	border-radius: 14px;
	height: 480px;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: color;
	background-size: cover;
    background-position: center;
    padding: 55px 40px 70px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-flow: column;
    transition: background-color $transition ease;

    svg {
        width: 29px;
        height: 23px;
        margin-bottom: auto;
    }
    
    * {
        color: $white;
        text-align: right;
    }

    p {
        margin: 10px 0 0;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.65);
        text-decoration: none;
    }
}
</style>