<template>
	<b-form @submit="onSubmit" @reset="onReset" v-if="show" class="feedback-form" autocomplete="off">
		<div class="feedback-form__wrap" :class="{'blur': formSent}">
			<template v-if="!isPageNameContacts">
				<b-button variant="text" @click="$emit('onFormClose')"><svgicon name="btn-arrow" class="svg-right" />вернуться</b-button>
				<h2>Напишите нам</h2>
			</template>
			<b-form-group id="input-group-3" label-for="input-3">
				<b-dropdown id="input-3" v-model="form.type" :text="form.type" :class="{'empty': form.type == 'Должность'}">
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
						placeholder="Несколько слов о себе"
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
		</div>
		<transition name="route">
			<div class="feedback-form__sent" v-if="formSent">
				<div class="feedback-form__sent--inner">
					<p class="title">Спасибо!</p>
					<p>Мы получили Вашу заявку и скоро перезвоним.</p>
					<b-button variant="text" @click="formSent = false">Закрыть</b-button>
				</div>
			</div>
		</transition>
	</b-form>
</template>

<script>
import {mask} from 'vue-the-mask';
import axios from 'axios';

export default {
	name: "FeedbackForm",
	directives: {mask},
	data: () => ({
		formSent: false,
		pickedSelectOption: 'Мобильное приложение',
		form: {
			name: "",
			phone: "",
			type: 'Должность',
			text: "",
			checked: []
		},
		type: ["Frontend-разработчик", "Backend-разработчик", "Дизайнер", "Другая"],
		show: true
	}),
	methods: {
        onSubmit(event) {
			event.preventDefault();
            if (this.form.name && this.form.phone) {
                axios({
                    method: 'post',
                    url: '../emailTeam.php',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: {
						name: this.form.name,
						phone: this.form.phone,
						type: this.form.type,
						text: this.form.text,
                    }
                })
                .then(this.$bvToast.show('example-toast'))
                .catch(function (response) {
                    console.error(response);
				});
				
				//alert(JSON.stringify(this.form));
			}
			
			this.formSent = true;

			setTimeout(() => {
				this.onReset();
			}, 3000);
		},
		
		onReset(evt) {
			this.form.name = "";
			this.form.phone = "";
			this.form.type = "Должность";
			this.form.text = "";
			this.form.checked = [];
			this.formSent = false;
			// Trick to reset/clear native browser form validation state

			/*
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
			*/
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