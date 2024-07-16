<template>
  <HeaderPage />
	<h1>This is Add Restaurent Page</h1>
  <form action="" class="add">
    <input type="text" name="name" id="" placeholder="Enter Name" v-model="restaurent.name">
    <input type="text" name="address" id="" placeholder="Enter Address" v-model="restaurent.address">
    <input type="text" name="contact" id="" placeholder="Enter Contact" v-model="restaurent.contact">
    <button v-on:click="addRestaurent">Add New Restaurent</button>
  </form>
</template>
<script>
import axios from 'axios';
import HeaderPage from './Header.vue'
export default {
  name: "AddRestaurent",
  components:{
    HeaderPage
  },
  data() {
    return {
      restaurent: {
        name:'',
        address:'',
        contact:'',
      }
    }
  },
  methods: {
    async addRestaurent() {
      let restaurentId = 0;
      console.log("restaurent:", this.restaurent.name);
      let result = await axios.post("http://localhost:3000/restaurents", {
        id: restaurentId,
        name: this.restaurent.name,
        address: this.restaurent.address,
        contact: this.restaurent.contact,
      });
      restaurentId++;
      if (result.status == 200) {
        this.$router.push({name:'HomePage'})
      }  
      
    }
  },
  mounted() {
    let user = localStorage.getItem('User-info');
    if (!user) {
       this.$router.push({name:'SignUp'})
    }
  }
};
</script>
