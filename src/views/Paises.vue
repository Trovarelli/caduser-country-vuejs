<template>
    <div id="main-div">
      <img id="left-img" src="/img/leftSide.png" alt="continente">
      <img id="rigth-img" src="/img/rigthSide.png" alt="continente">
      <div class ="main-container">
        <div class="main-container-p">
          <h1>Lista de Países</h1>
        </div>
        <ListOfCountries />
      </div>
    </div>
</template>

<script>
import ListOfCountries from '../components/ListCountries.vue'

export default {
  name: 'Paises',
  components: {
    ListOfCountries
    }
}
</script>

<style scoped>
  .main-container-p {
    margin-top: 150px
  }
  h1 {
    color: #170263;
  }
  
  #left-img{
    position: absolute;
    width: 700px;
    height: 350px;
    margin-left: 2%;
    z-index: -1;
  }

  #rigth-img{
    position: absolute;
    width: 700px;
    height: 350px;
    margin-left: 47%;
    z-index: -1;
  }
  
</style>