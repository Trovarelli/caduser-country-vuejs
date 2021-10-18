<template>
  <div class="main-countainer">
    <Navbar :logo="logo_src" :alt="app_name" />
    <router-view/>
    <Footer />
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
    Navbar,
    Footer
  },
  data(){
    return{
       logo_src: "/img/logo.png",
       app_name: "logo"
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: whitesmoke;
}

::-webkit-scrollbar-thumb {
  background: #65A29C;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: #222;
}

html {
  scroll-behavior: smooth;
}
 
body {
  margin: 0px;
  background-image: url("/img/bg.png");
  object-fit:fill;
  background-repeat: repeat;
  position: static;
  font-family: "Roboto", sans-serif;
  color: #141726;
  overflow-x: hidden;
}
h1 {
  text-align: center;
  font-size: 35px;
  font-weight: bold;
}
.main-container {
  width: 500px;
  min-height: 420px;
  margin: 50px auto;
  padding: 0;
}
#info-container p {
  padding: 0 10px;
  font-weight: 600;
}
@media (max-width: 768px) {
  body { font-size: 12px; }
  .main-container { width: 342px; }    
  #info-container select { font-size: 12px; font-weight: 600; }
}
</style>
