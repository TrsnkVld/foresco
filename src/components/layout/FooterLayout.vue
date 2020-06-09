<template>
    <footer class="footer">
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

    .container {
        height: 175px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
        text-decoration: none;
        
        * {
            color: $white;
            font-weight: bold;
        }
    }


}
</style>