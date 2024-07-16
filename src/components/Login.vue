<template>
	<img class="logo" src="../assets/restu_logo.jpg" alt="" />
	<h1>Login Here</h1>
	<div class="login">
		<input type="text" name="email" placeholder="Enter Email" v-model="email" />
		<input type="password" name="password" placeholder="Enter Password" v-model="password" />
		<button v-on:click="login()">Login</button>
		<p>
			<router-link to="/sign-up">Signup</router-link>
		</p>
	</div>
</template>

<script>
import axios from "axios";
export default {
	name: "LoginPage",
	data() {
		return {
			email: "",
			password: "",
		};
	},
	methods: {
		async login() {
			let result = await axios.get(
				`http://localhost:3000/users?email=${this.email}&password=${this.password}`
			);
			console.log("Result:", result);
			if (result.status === 200 && result.data.length > 0) {
				localStorage.setItem("User-info", JSON.stringify(result.data[0]));
				this.$router.push({ name: "HomePage" });
			}
		},
	},
	mounted() {
		let user = localStorage.getItem("User-info");
		if (user) {
			this.$router.push({ name: "HomePage" });
		}
	},
};
</script>
