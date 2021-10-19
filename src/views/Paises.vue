<template>
    <div id="main-div">
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

  .main-container {
    z-index: 1;
  }

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
    margin-left: 1500px;
    z-index: -1;
  }

  
</style>