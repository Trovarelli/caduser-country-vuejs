<template>
   <div>
    <div class ="main-container-cad">
      <h1>Usuários Registrados</h1>
    </div>
    <div class="main-container">
        <Dash />
      </div>
  </div>
</template>

<script>
import Dash from '../components/Dash.vue'

export default {
  name: 'PessoasCad',
  components: {
    Dash,
  }
}
</script>

<style scoped>
  .main-container-cad {
    margin-top: 10%;
    color: #170263 ;
  }

</style>