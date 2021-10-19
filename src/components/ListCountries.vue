<template>
    <div id=main-div>
        <button @click="getProp" class="button-country">Detalhes: Brasil </button>
        <button @click="listaDB = false" v-show="listaDB" class="button-country">Esconder Lista</button>
        <div id="country-ul">
            <tr id="country-list-brasil" v-show="listaDB" v-for="(prop, index) in infoBrasilAtributos" :key="index">{{prop.toString().replace(/[a-z]*/g, (c) => {return c.toUpperCase()})}}:
                <td>{{infoBrasilValores[index]}}</td>
            </tr>
        </div>
        <button @click="listaDB = false" v-show="listaDB" class="button-country">Esconder Lista</button>
        
        <button @click="filterAmericaCountry" class="button-country">Países das Américas </button>
        <button @click="listaA = false" v-show="listaA" class="button-country">Esconder Lista</button>
        <ul id="country-ul" v-show="listaA">
            <li class="country-list-region" v-for="country in americanC" :key="country">{{country}}</li>
        </ul>
        <button @click="listaA = false" v-show="listaA" class="button-country">Esconder Lista</button>

        <div id="region-div">Regiões:</div>
        
        <div @click="listaRA = false" class="country-region-hide" v-show="listaRA">Ocultar países &#128071;</div>
        <div class="country-region" @click="regionAmerica">América:</div>
        <div v-show="listaRA" class="country-list-region" v-for="country in regionInfoAmerica" :key="country">{{country}}</div>

        <div @click="listaREU = false" class="country-region-hide" v-show="listaREU">Ocultar países &#128071;</div>
        <div class="country-region" @click="regionEurope">Europa:</div>
        <div v-show="listaREU" class="country-list-region" v-for="country in regionInfoEurope" :key="country">{{country}}</div>

        <div @click="listaRAS = false" class="country-region-hide" v-show="listaRAS">Ocultar países &#128071;</div>
        <div class="country-region" @click="regionAsia">Ásia:</div>
        <div v-show="listaRAS" class="country-list-region" v-for="country in regionInfoAsia" :key="country">{{country}}</div>

        <div @click="listaROC = false" class="country-region-hide" v-show="listaROC">Ocultar países &#128071;</div>
        <div class="country-region" @click="regionOceania">Oceania:</div>
        <div v-show="listaROC" class="country-list-region" v-for="country in regionInfoOceania" :key="country">{{country}}</div>

        <div @click="listaRAF = false" class="country-region-hide" v-show="listaRAF">Ocultar países &#128071;</div>
        <div class="country-region" @click="regionAfrica">África:</div>
        <div v-show="listaRAF" class="country-list-region" v-for="country in regionInfoAfrica" :key="country">{{country}}</div>

        <div @click="listaRAN = false" class="country-region-hide" v-show="listaRAN">Ocultar países &#128071;</div>
        <div class="country-region" @click="regionAntartic">Antártida:</div>
        <div v-show="listaRAN" class="country-list-region">Este continente não possui países &#128517;</div>

    </div>
</template>

<script>
    import countriesData from '../services/countries'
    export default {
        name: 'ListOfCountries',
        data(){
            return {
                countries: [],
                brasil: null,
                props: [],
                americanC: [],
                regions: [],
                regionInfoAmerica: [],
                regionInfoEurope: [],
                regionInfoAsia: [],
                regionInfoOceania: [],
                regionInfoAfrica: [],
                regionInfoAntartic: [],
                listaDB: false,
                listaA: false,
                listaRA: false,
                listaREU: false,
                listaRAS: false,
                listaROC: false,
                listaRAF: false,
                listaRAN: false,
                infoBrasilAtributos: [],
                infoBrasilValores: [],
                regex: /[a-z]+/g
            }
        },

        methods: {
            getProp(){
                this.props = Object.getOwnPropertyDescriptors(this.brasil)
                this.listaDB = true
                this.props = Object.entries(this.brasil[0])

                let infoBrasilAtributoss = this.props
                    .map((element) => {
                        return element[0]
                    })

                let infoBrasilValoress = this.props
                    .map((element) => {
                        return element[1]    
                    })

                this.infoBrasilAtributos = infoBrasilAtributoss
                this.infoBrasilValores = infoBrasilValoress
            },
            filterBrasil(){
                setTimeout(() => {
                    let brasilInfo = this.countries.filter((element) => {
                    if(element.name.common === 'Brazil') return element
                    })
                    this.brasil = brasilInfo
                    
                    console.log(this.brasil)
                }, 3000)  
            },
            regionAntartic(){ 
                this.listaRAN = true
                let regionInfoAntartic = this.countries
                    .filter((element) => {
                        if(element.region === 'Antartic') return element
                    })
                    .map((name) => {
                        return `${name.name.common}, coordenadas: ${name.latlng}.`
                    })
                this.regionInfoAntartic = regionInfoAntartic
            },
            regionAfrica(){ 
                this.listaRAF = true
                let regionInfoAfrica = this.countries
                    .filter((element) => {
                        if(element.region === 'Africa') return element
                    })
                    .map((name) => {
                        return `${name.name.common}, coordenadas: ${name.latlng}.`
                    })
                this.regionInfoAfrica = regionInfoAfrica
            },
            regionOceania(){ 
                this.listaROC = true
                let regionInfoOceania = this.countries
                    .filter((element) => {
                        if(element.region === 'Oceania') return element
                    })
                    .map((name) => {
                        return `${name.name.common}, coordenadas: ${name.latlng}.`
                    })
                this.regionInfoOceania = regionInfoOceania
            },
            regionAsia(){ 
                this.listaRAS = true
                let regionInfoAsia = this.countries
                    .filter((element) => {
                        if(element.region === 'Asia') return element
                    })
                    .map((name) => {
                        return `${name.name.common}, coordenadas: ${name.latlng}.`
                    })
                this.regionInfoAsia = regionInfoAsia
            },
            regionEurope(){ 
                this.listaREU = true
                let regionInfoEurope = this.countries
                    .filter((element) => {
                        if(element.region === 'Europe') return element
                    })
                    .map((name) => {
                        return `${name.name.common}, coordenadas: ${name.latlng}.`
                    })
                this.regionInfoEurope = regionInfoEurope
            },
             regionAmerica(){ 
                this.listaRA = true
                let regionInfoAmerica = this.countries
                    .filter((element) => {
                        if(element.region === 'Americas') return element
                    })
                    .map((name) => {
                        return `${name.name.common}, coordenadas: ${name.latlng}.`
                    })
                this.regionInfoAmerica = regionInfoAmerica
            },

            filterAmericaCountry(){ 
                this.listaA = true
                let countryInfo = this.countries
                    .filter((element) => {
                        if(element.region === 'Americas') return element
                    })
                    .map((name) => {
                        return `${name.name.common}, capital: ${name.capital}.`
                    })
                this.americanC = countryInfo
            }
            
        },

        mounted(){
            countriesData.list().then(response => {
                this.countries = response.data
            }),
            this.filterBrasil()
        }
    }
</script>

<style scoped>

    #main-div {
        background-color: whitesmoke;
        padding: 50px;
        box-shadow: 5px 2px 2px rgba(34, 34, 34, 0.281);
        border-radius: 20px;
    }

    #country-list-brasil {
        font-weight: bold;
        display: flex;
        width: 100%;
        align-items: center;
        margin: 10px;
        border-bottom: 2px solid #65A29C;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .country-list {
        font-weight: bold;
        padding: 3px;
    }

    .button-country{
        background-color: transparent;
        color: rgb(41, 41, 41);
        font-weight: bold;
        border: 3px solid #65A29C;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto 20px;
        cursor: pointer;
        transition: .3s;
    }

    .button-country:hover {
        background-color: #222;
        color: rgb(235, 235, 235);
        border: 3px solid #65A29C;
    }

    .country-region {
        display: flex;
        font-weight: bold;
        justify-content: flex-start;
        cursor: pointer;
        font-size: 20px;
    }

    .country-list-region {
        display: flex;
        justify-content: flex-start;
        padding: 3px;
        margin: 0 20px 5px;
        border-bottom: 2px solid #65A29C;
        transition: 0.3s;
        cursor: pointer;
    }

    .country-list-region:hover {
        font-size: 102%;
    }

    .country-region-hide {
        margin: auto 20px;
        font-weight: bold;
        cursor: pointer;
    }

    #region-div {
        font-weight: bold;
        font-size: 35px;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 50px;
    }

</style>