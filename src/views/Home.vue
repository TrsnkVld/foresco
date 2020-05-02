<template>
	<main class="home">
		<SingleSection>
			<SectionTitle>🤔 Как работает приложение</SectionTitle>
			<ContentBlockWrap>
				<ContentBlock
					title="Управляйте совместными долгами"
					text="Мы использовали такие-то технологии, чтобы сделать эту функцию, применили список наименований"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
				<ContentBlock
					title="Создавайте метки"
					text="Мы использовали такие-то технологии, чтобы сделать эту функцию, применили список наименований"
					image="left"
					bgStyle="background-color: #1a1a1a;"
				/>
				<ContentBlockSM
					title="Поиск фотографий в одно касание"
					text="Также как внедрение современных методик, своём классическом"
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
				<ContentBlockMD
					title="Ведите долги совместно"
					text="Также как внедрение современных методик, своём классическом"
					bgStyle="background-color: #f9f9f9;"
					textStyle="color: #000000;"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')"/>
			<ContentBlockWrap>
				<ContentBlock
					title="Создавайте метки"
					text="Мы использовали такие-то технологии, чтобы сделать эту функцию, применили список наименований"
					bgStyle="background-color: #1a1a1a;"
				/>
				<ContentBlock
					title="Исследование и проектирование"
					text="После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе."
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff 100%);"
				/>
			</ContentBlockWrap>
		</SingleSection>
		<SingleSection bgStyle="background-color: #ffffff;">
			<TextBlock />
			<ListBlock :imageSrc="require('../assets/img/saldo_mockup.png')" />
		</SingleSection>
		<SingleSection>
			<TitleText />
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" />
			<ContentBlockWrap>
				<ContentBlock
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе."
					bgStyle="background: #ffffff;"
					textStyle="color: #000000"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/big-img-2.png')" />
			<ContentBlockWrap>
				<ContentBlock
					title="Исследование и проектирование"
					subTitle="24 часа"
					text="После обсуждения функционала с заказчиком мы выделили основные пользовательские кейсы и предложения, и создали эскизную схему работы приложения для дальнейшего прототипирования. Заказчик согласовал архитектуру приложения показанную на эскизе."
					bgStyle="background: linear-gradient(to bottom, #8569ff -64%, #0048ff);"
				/>
			</ContentBlockWrap>
			<ImageBlock :imageSrc="require('../assets/img/big-img-3.png')" />
		</SingleSection>
		<SingleSection>
			<SliderInfo title="🤖 Технологии" />
		</SingleSection>
		<SingleSection bgStyle="background-color: #ffffff;">
			<PaletteBlock :colors="colors"/>
		</SingleSection>
		<SingleSection>
			<ImageBlock :imageSrc="require('../assets/img/big-img.png')" />
		</SingleSection>
		<SingleSection>
			<SliderFaq title="Вопрос-Ответ 🙄" />
		</SingleSection>

		<!--
    			<CaseCard />
		-->
	</main>
</template>

<script>
import SingleSection from "@/components/elements/SingleSection";
import SectionTitle from "@/components/elements/SectionTitle";
import CaseCard from "@/components/elements/CaseCard";
import ContentBlockWrap from "@/components/elements/ContentBlockWrap";
import ContentBlock from "@/components/elements/ContentBlock";
import ContentBlockSM from "@/components/elements/ContentBlockSM";
import ContentBlockMD from "@/components/elements/ContentBlockMD";
import TitleText from "@/components/elements/TitleText";
import ImageBlock from "@/components/elements/ImageBlock";
import TextBlock from "@/components/elements/TextBlock";
import ListBlock from "@/components/elements/ListBlock";
import SliderInfo from "@/components/elements/SliderInfo";
import SliderFaq from "@/components/elements/SliderFaq";
import PaletteBlock from "@/components/elements/PaletteBlock";

export default {
	name: "Home",
	components: {
		SingleSection,
		SectionTitle,
		CaseCard,
		ContentBlockWrap,
		ContentBlock,
		ContentBlockSM,
		ContentBlockMD,
		TitleText,
		ImageBlock,
		TextBlock,
		ListBlock,
		SliderInfo,
		SliderFaq,
		PaletteBlock
	},
	data: () => ({
		colors: [
			"background-color: #f04f6c;",
			"background-color: #141516;",
			"background-color: #2d2d32;",
			"background-color: #ffffff;"
		]
	})
};
</script>

<style lang="scss">
.home {
	background: $black;
	height: 100%;
	flex-grow: 1;
}
</style>