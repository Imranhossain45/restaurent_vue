<template>

  <router-view />
</template>

<script>

export default {
  name: 'App',
  
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0;
  margin: 0;
}
.register input, .login input, .add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}
.register button, .login button, .add button{
  width: 200px;
  height: 40px;
  background-color: skyblue;
  cursor: pointer;
}
</style>
