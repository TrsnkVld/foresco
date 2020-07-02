<template>
	<b-form @submit="onSubmit" @reset="onReset" v-if="show" class="feedback-form" autocomplete="off">
		<template v-if="!isPageNameContacts">
			<b-button variant="text" @click="$emit('onFormClose')"><svgicon name="btn-arrow" class="svg-right" />вернуться</b-button>
			<h2>Напишите нам</h2>
		</template>
		<b-form-group id="input-group-3" label-for="input-3">
			<b-dropdown id="input-3" v-model="form.type" :text="form.type" :class="{'empty': form.type == 'Тип проекта'}">
				<b-dropdown-item @click="form.type=item" v-for="(item, index) in type" :key="index">{{item}}</b-dropdown-item>
			</b-dropdown>
		</b-form-group>

		<b-form-group id="input-group-2" label-for="input-2">
			<b-form-input id="input-2" v-model="form.name" required placeholder="Ваше имя"></b-form-input>
		</b-form-group>

		<b-form-group id="input-group-1" label-for="input-1">
			<b-form-input id="input-1" v-mask="'+7 (###) ###-##-##'" v-model="form.phone" required placeholder="Телефон"></b-form-input>
		</b-form-group>

		<b-form-group id="input-group-4">
			<b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
				<b-form-textarea
					id="textarea"
					v-model="form.text"
					placeholder="Несколько слов о проекте"
					rows="3"
					max-rows="6"
				></b-form-textarea>
			</b-form-checkbox-group>
		</b-form-group>

		<b-form-group id="input-group-4">
			<b-form-checkbox-group required v-model="form.checked" id="checkboxes-4">
				<b-form-checkbox value="me" required>Я согласен с обработкой персональных данных</b-form-checkbox>
			</b-form-checkbox-group>
		</b-form-group>

		<b-button type="submit" variant="border">Оставить заявку</b-button>
	</b-form>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
	name: "FeedbackForm",
	directives: {mask},
	data: () => ({
		pickedSelectOption: 'Мобильное приложение',
		form: {
			name: "",
			phone: "",
			type: 'Тип проекта',
			text: "",
			checked: []
		},
		type: ["Мобильное приложение", "Сайт", "Другой проект"],
		show: true
	}),
	methods: {
		onSubmit(evt) {
			evt.preventDefault();
			alert(JSON.stringify(this.form));
		},
		onReset(evt) {
			evt.preventDefault();
			// Reset our form values
			this.form.email = "";
			this.form.name = "";
			this.form.food = null;
			this.form.checked = [];
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		}
	},
	computed: {
		isPageNameContacts() {
			if (this.$route.name === 'contacts') return true;
			return false;
		}
	}
};
</script>