<template>
	<b-form @submit="onSubmit" @reset="onReset" v-if="show">
		<b-form-group id="input-group-3" label-for="input-3">
			<b-dropdown id="input-3" v-model="form.type" text="Left align">
				<b-dropdown-item v-for="(item, index) in type" :key="index" href="#">{{item}}</b-dropdown-item>
			</b-dropdown>
		</b-form-group>

		<b-form-group id="input-group-2" label-for="input-2">
			<b-form-input id="input-2" v-model="form.name" required placeholder="Ваше имя"></b-form-input>
		</b-form-group>

		<b-form-group id="input-group-1" label-for="input-1">
			<b-form-input id="input-1" v-model="form.email" required placeholder="Телефон"></b-form-input>
		</b-form-group>

		<b-form-group id="input-group-4">
			<b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
				<b-form-checkbox value="me">Check me out</b-form-checkbox>
			</b-form-checkbox-group>
		</b-form-group>

		<b-form-group id="input-group-4">
			<b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
				<b-form-textarea
					id="textarea"
					v-model="text"
					placeholder="Несколько слов о проекте"
					rows="3"
					max-rows="6"
				></b-form-textarea>
			</b-form-checkbox-group>
		</b-form-group>

		<b-button type="submit" variant="primary">Submit</b-button>
	</b-form>
</template>

<script>
export default {
	name: "FeedbackForm",
	data: () => ({
		form: {
			email: "",
			name: "",
			type: null,
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
	}
};
</script>

<style lang="scss">
</style>