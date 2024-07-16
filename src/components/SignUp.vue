<template>
	<img class="logo" src="../assets/restu_logo.jpg" alt="" />
	<h1>Sign Up</h1>

	<div class="register">
		<input type="text" name="name" id="" placeholder="Enter Name" v-model="name"/>
		<input type="text" name="email" id="" placeholder="Enter Email" v-model="email"/>
		<input type="text" name="password" id="" placeholder="Enter Password" v-model="password"/>

		<button v-on:click="signup()">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
	</div>
</template>
<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password:''
    }
  },
  methods: {
   async signup() {
     
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("User-info", JSON.stringify(result.data))
        this.$router.push({name:'HomePage'})
      }      
      
    }
  },
  mounted() {
    let user = localStorage.getItem('User-info');
    if (user) {
       this.$router.push({name:'HomePage'})
    }
  }
  
};
</script>
<style>

</style>
