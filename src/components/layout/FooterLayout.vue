<template>
    <footer class="footer">
        <b-container data-aos="fade-in">
            <a href="tel:+79119999955"><h4>8 911 999-99-55</h4></a>
            <a href="mailto:info@foresco.ru"><h4>info@foresco.ru</h4></a>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: "FooterLayout",

}
</script>

<style lang="scss">
.footer {
    border-top: solid 1px #1a1a1a;
    margin-top: auto;
    background: $black;

    &.hidden {
        opacity: 0;
        visibility: hidden;
    }

    .container {
        //height: 175px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: column;
        padding-top: 60px;
        padding-bottom: 60px;
    }

    a {
        text-decoration: none;
        margin-bottom: 25px;
        
        * {
            color: $white;
            font-weight: bold;
        }
    }


	@include up($md) {
        .container {
            flex-flow: row;
            
            a {
                margin: 0;
            }
        }
	}

	@include upLandscape($xs-land) {
        .container {
            flex-flow: row;

            a {
                margin: 0;
            }
        }
	}

}
</style>