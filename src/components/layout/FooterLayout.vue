<template>
    <footer class="footer"  data-aos="fade-in">
        <b-container>
            <a href="tel:+78124674523"><h4>8 812 567-45-23</h4></a>
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