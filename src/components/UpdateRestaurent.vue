<template>
  <HeaderPage />
	<h1>This is Update Restaurent Page</h1>
   <form action="" class="add">
    <input type="text" name="name" id="" placeholder="Enter Name" v-model="restaurent.name">
    <input type="text" name="address" id="" placeholder="Enter Address" v-model="restaurent.address">
    <input type="text" name="contact" id="" placeholder="Enter Contact" v-model="restaurent.contact">
    <button type="button" v-on:click="updateRestaurent">Update Restaurent</button>
  </form>
</template>
<script>
import axios from 'axios';
import HeaderPage from './Header.vue'
export default {
  name: "UpdateRestaurent",
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
    async updateRestaurent() {
      let restaurantId = this.$route.params.id;
      console.log("restaurent:", this.restaurent);
      let result = await axios.put(`http://localhost:3000/restaurents/${restaurantId}`, {
        name: this.restaurent.name,
        address: this.restaurent.address,
        contact: this.restaurent.contact,
      });
      if (result.status == 200) {
        this.$router.push({name:'HomePage'})
      } 
    }
  },
 async mounted() {
    let user = localStorage.getItem('User-info');
    if (!user) {
       this.$router.push({name:'SignUp'})
   }
    let restaurantId = this.$route.params.id;
    const result = await axios.get(`http://localhost:3000/restaurents/${restaurantId}`);
   //console.log(this.$route.params.id);
   //console.log(result.data);
   this.restaurent = result.data;
  }
};
</script>
