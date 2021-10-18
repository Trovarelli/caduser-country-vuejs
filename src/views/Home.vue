<template>
  <div>
    <Banner />
    <div id="servicos">	
			<div id="produtos">
				<router-link to="/cadastro" class="containerProd">
					<img src="img/cadastro.png" width="150" height="150" style="margin-top: 30px;" alt="cadastro"> <br>
					<h1>Cadastro</h1>
					<p> Faça já um cadastro no nosso site! </p>
				</router-link>

				<router-link to="/pessoascad" class="containerProd">
					<img src="img/login.png" width="150" height="150" style="margin-top: 30px;" alt="Analise de negócio"> <br>
					<h1>Pessoas Cadastradas</h1>
					<p> Veja quem já faz parte do nosso grupo. </p>
				</router-link>

				<router-link to="/paises" class="containerProd">
					<img src="img/globo.png" width="150" height="150" style="margin-top: 30px;" alt="Criação de websites"> <br>
					<h1>Países</h1>
					<p> Informações todos os Países.</p>
				</router-link>
			</div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Banner
  }
}
</script>

<style scoped>

#servicos {
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: rgb(146, 197, 255);
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

#produtos {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-decoration: none;
}

.containerProd {
  position:static ;
  text-align: center;
  color: #170263;
  margin: 50px;
  background-color: white;
  border-radius: 60px;
  width: 300px;
  height: 380px;
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  box-shadow: 5px 2px 2px rgba(34, 34, 34, 0.281);
  transition: .2s;
}

.containerProd p {
  font-size: 18px;
  margin: 10px;
  text-decoration: none;
}

.containerProd a {
  font-size: 18px;
  margin: 10px;
  color: black;
  text-decoration: none;
}

.containerProd:hover {
  background-color: rgb(242, 252, 200);
}
</style>