<template>
	<main class="contacts">
		<SingleSection>
			<SectionTitle tag="h1">🚀 Давайте сотрудничать</SectionTitle>
            <b-container>
                <b-row>
                    <b-col cols="12" lg="6">
                        asdasd
                    </b-col>
                    <b-col cols="12" lg="6">
                        <FeedbackForm />
                    </b-col>
                </b-row>
            </b-container>
		</SingleSection>
	</main>
</template>

<script>
import SingleSection from "@/components/elements/SingleSection";
import SectionTitle from "@/components/elements/SectionTitle";
import FeedbackForm from "@/components/elements/FeedbackForm";

export default {
	name: "Contacts",
	components: {
		SingleSection,
        SectionTitle,
        FeedbackForm
	}
};
</script>

<style lang="scss">
.contacts {
	padding-top: get-vw(120px, 1920);
	min-height: 100vh;

	h1 {
		font-size: get-vw(25px, 320);
		letter-spacing: get-vw(-0.4px, 320);
		line-height: get-vw(30px, 320);

		@include up($sm) {
			font-size: get-vw(35px, 414);
            letter-spacing: get-vw(-0.4px, 414);
		    line-height: get-vw(40px, 414);
		}

		@include up($md) {
			font-size: get-vw(35px, 768);
			letter-spacing: get-vw(-0.4px, 768);
			line-height: get-vw(40px, 768);
        }

		@include up($lg) {
			font-size: get-vw(35px, 1024);
			line-height: get-vw(40px, 1024);
			letter-spacing: get-vw(-0.4px, 1024);
		}

		@include upLandscape($xs) {
			font-size: get-vw(25px, 568);
		    letter-spacing: get-vw(-0.4px, 568);
			line-height: get-vw(30px, 568);
		}

		@include upLandscape($md-land) {
			font-size: get-vw(35px, 1024);
			line-height: get-vw(40px, 1024);
			letter-spacing: get-vw(-0.4px, 1024);
		}

		@include upLandscape($lg-land) {
			font-size: get-vw(35px, 1366);
			line-height: get-vw(40px, 1366);
			letter-spacing: get-vw(-0.4px, 1366);
		}

		@include upLandscape($xl-land) {
			font-size: get-vw(37px, 1920);
			line-height: get-vw(42px, 1920);
			letter-spacing: get-vw(-0.4px, 1920);
		}
    }
    
    section {
        padding: 0;
    }
}
</style>