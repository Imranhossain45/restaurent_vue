<template>
	<HeaderPage />
	<h1>Hello {{ name }},This is Homepage</h1>
	<table border="1">
		<thead>
			<th>ID</th>
			<th>Name</th>
			<th>Address</th>
			<th>Contact</th>
			<th>Action</th>
		</thead>
		<tr v-for="item in restaurents" :key="item.id">
			<td>{{ item.id }}</td>
			<td>{{ item.name }}</td>
			<td>{{ item.address }}</td>
			<td>{{ item.contact }}</td>
			<td>
				<router-link :to="'/update/' + item.id">Update</router-link>
				<button v-on:click="deleteRestaurent(item.id)">Delete</button>
			</td>
		</tr>
	</table>
</template>
<script>
import axios from "axios";
import HeaderPage from "./Header.vue";
export default {
	name: "HomePage",
	data() {
		return {
			name: "",
			restaurents: [],
		};
	},
	components: {
		HeaderPage,
	},
	methods: {
		async deleteRestaurent(id) {
			let result = await axios.delete(
				`http://localhost:3000/restaurents/${id}`
			);
			console.log(result);

			if ((result.status == 200)) {
				this.loadData();
			}
		},
		async loadData() {
			let user = localStorage.getItem("User-info");
			this.name = JSON.parse(user).name;
			if (!user) {
				this.$router.push({ name: "SignUp" });
			}
			let result = await axios.get("http://localhost:3000/restaurents");
			this.restaurents = result.data;
		},
	},
	async mounted() {
		this.loadData();
	},
};
</script>
<style>
td {
	width: 160px;
	height: 40px;
}
</style>
