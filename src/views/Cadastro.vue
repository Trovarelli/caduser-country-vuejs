<template>
  <div>
    <div class ="main-container-cad">
      <h1>Cadastro</h1>
    </div>
    <div class="main-container">
        <Form />
      </div>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
export default {
  name: 'App',
  components:{
    Form
  }
}
</script>

<style scoped>
  .main-container-cad {
    margin-top: 10%;
    color: #170263 ;
  }

</style>
