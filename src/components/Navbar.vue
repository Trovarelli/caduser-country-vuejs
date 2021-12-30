<template>
    <div id="nav">
        <img :src="logo" :alt="alt" id="logo">
            <nav :class="{classA: scrollPosition < 100, classB: scrollPosition >= 10}">
            <router-link to="/">Home</router-link>
            <router-link to="/cadastro">Cadastro</router-link>
            <router-link to="/pessoascad">Pessoas Cadastradas</router-link>
            <router-link to="/paises">Países</router-link>
            </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"],
    data () {
        return {
            scrollPosition: null
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll)
    },
    destroy() {
        window.removeEventListener('scroll', this.updateScroll)
    }
}
</script>

<style scoped>
    .classA {
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 95%;
        background-color: transparent;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;
        transform: .5s; 
    }
    .classB {
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 95%;
        background-color: rgb(255,255,255);
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;
        transform: .5s;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.13);
    }

    #nav #logo {
        position: fixed;
        z-index: 2;
        top: 1%;
        display: flex;
        left: 2%;
        width: 40px;
        height: 40px;
        padding: 1px;
        background: white;
    }

    .classA a {
        font-weight: bold;
        color: #170263;
        text-decoration: none;
        font-size: 20px;
        padding: 5px 20px 5px 20px;
        transition: .5s;
        right: 1%;
        
    }
    .classB a {
        color: #170263;
        background: white;
        font-weight: bold;
        padding: 5px 20px 5px 20px;
        text-decoration: none;
        font-size: 20px;
        transition: .5s;
              
    }

    .classA a:hover {
        background: #170263;
        color: whitesmoke;
    }

    .classB a:hover {
        background: #170263;
        color: whitesmoke;
    }

</style>