<template>
    <div class="separator" :style="`height: ${value}px`" />
</template>

<script>
export default {
    name: "SeparatorLine",
    props: {
        sm: {
            type: String,
            default: null,
        },
        md: {
            type: String,
            default: null,
        },
        lg: {
            type: String,
            default: null,
        }   
    },
    data:() => ({
        screenWidth: null,
        value: null,
    }),
	created() {
		window.addEventListener("resize", this.width);
	},
	destroyed() {
		window.removeEventListener("resize", this.width);
	},
    computed: {
    },
    methods: {
        width() {
            //return window.outerWidth;
            //console.log(this.screenWidth);
            
            this.screenWidth = window.innerWidth;

            if (window.innerWidth >= 1024) {
                this.value = this.lg;
            } else if (window.innerWidth >= 768) {
                    this.value = this.md;  
            } else if(window.innerWidth >= 0) {
                this.value = this.sm;
            }
            
        }
    },
	watch: {
		screenWidth(newWidth, oldWidth) {
            //console.log(newWidth);			
		}
    },
    mounted() {
        this.width();
    },
}
</script>