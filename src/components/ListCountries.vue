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

        <div id="region-div">Blocos Regionais:</div>
        
        <div @click="listaEU = false" class="country-region-hide" v-show="listaEU">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(eu)">EU:</div>
        <div v-show="listaEU" class="country-list-region" v-for="(country) in rgEUList" :key="country.name">{{country}}</div>

        <div @click="listaEFTA = false" class="country-region-hide" v-show="listaEFTA">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(efta)">EFTA:</div>
        <div v-show="listaEFTA" class="country-list-region" v-for="(country) in rgEFTAList" :key="country.name">{{country}}</div>

        <div @click="listaCARICOM = false" class="country-region-hide" v-show="listaCARICOM">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(caricom)">CARICOM:</div>
        <div v-show="listaCARICOM" class="country-list-region" v-for="(country) in rgCARICOMList" :key="country.name">{{country}}</div>

        <div @click="listaPA = false" class="country-region-hide" v-show="listaPA">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(pa)">PA:</div>
        <div v-show="listaPA" class="country-list-region" v-for="(country) in rgPAList" :key="country.name">{{country}}</div>

        <div @click="listaAU = false" class="country-region-hide" v-show="listaAU">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(au)">AU:</div>
        <div v-show="listaAU" class="country-list-region" v-for="(country) in rgAUList" :key="country.name">{{country}}</div>

        <div @click="listaUSAN = false" class="country-region-hide" v-show="listaUSAN">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(usan)">USAN:</div>
        <div v-show="listaUSAN" class="country-list-region" v-for="(country) in rgUSANList" :key="country.name">{{country}}</div>

        <div @click="listaEEU = false" class="country-region-hide" v-show="listaEEU">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(eeu)">EEU:</div>
        <div v-show="listaEEU" class="country-list-region" v-for="(country) in rgEEUList" :key="country.name">{{country}}</div>

        <div @click="listaAL = false" class="country-region-hide" v-show="listaAL">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(al)">AL:</div>
        <div v-show="listaAL" class="country-list-region" v-for="(country) in rgALList" :key="country.name">{{country}}</div>

        <div @click="listaASEAN = false" class="country-region-hide" v-show="listaASEAN">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(asean)">ASEAN:</div>
        <div v-show="listaASEAN" class="country-list-region" v-for="(country) in rgASEANList" :key="country.name">{{country}}</div>
        
        <div @click="listaCAIS = false" class="country-region-hide" v-show="listaCAIS">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(cais)">CAIS:</div>
        <div v-show="listaCAIS" class="country-list-region" v-for="(country) in rgCAISList" :key="country.name">{{country}}</div>

        <div @click="listaCEFTA = false" class="country-region-hide" v-show="listaCEFTA">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(cefta)">CEFTA:</div>
        <div v-show="listaCEFTA" class="country-list-region" v-for="(country) in rgCEFTAList" :key="country.name">{{country}}</div>

        <div @click="listaNAFTA = false" class="country-region-hide" v-show="listaNAFTA">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(nafta)">NAFTA:</div>
        <div v-show="listaNAFTA" class="country-list-region" v-for="(country) in rgNAFTAList" :key="country.name">{{country}}</div>

        <div @click="listaSAARC = false" class="country-region-hide" v-show="listaSAARC">Ocultar países &#128071;</div>
        <div class="country-region" @click="rgList(saarc)">SAARC:</div>
        <div v-show="listaSAARC" class="country-list-region" v-for="(country) in rgSAARCList" :key="country.name">{{country}}</div>
        
    </div>
</template>

<script>
    
    export default {
        name: 'ListOfCountries',
        data(){
            return {
                countries: [],
                brasil: null,
                props: [],
                americanC: [],
                dataEU: [],
                dataCARICOM: [],
                dataPA: [],
                dataAU: [],
                dataUSAN: [],
                dataEEU: [],
                dataAL: [],
                dataASEAN: [],
                dataCAIS: [],
                dataCEFTA: [],
                dataNAFTA: [],
                dataSAARC: [],
                listaA: false,
                listaDB: false,
                eu: 'eu',
                efta: 'efta',
                caricom: 'caricom',
                pa: 'pa',
                au: 'au',
                usan: 'usan',
                eeu: 'eeu',
                al: 'al',
                asean: 'asean',
                cais: 'cais',
                cefta: 'cefta',
                nafta: 'nafta',
                saarc: 'saarc',
                rgEUList: [],
                rgEFTAList: [],
                rgCARICOMList: [],
                rgPAList: [],
                rgAUList: [],
                rgUSANList: [],
                rgEEUList: [],
                rgALList: [],
                rgASEANList: [],
                rgCAISList: [],
                rgCEFTAList: [],
                rgNAFTAList: [],
                rgSAARCList: [],
                EU: false,
                listaEU: false,
                listaEFTA: false,
                listaCARICOM: false,
                listaPA: false,
                listaAU: false,
                listaUSAN: false,
                listaEEU: false,
                listaAL: false,
                listaASEAN: false,
                listaCAIS: false,
                listaCEFTA: false,
                listaNAFTA: false,
                listaSAARC: false,
                infoBrasilAtributos: [],
                infoBrasilValores: [],
                regex: /[a-z]+/g
            }
        },

        methods: {
            async filterBrasil(){
                const req = await fetch(`https://restcountries.com/v2/name/brazil`)
                const data = await req.json()
                this.brasil = data
            },
             getProp(){
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
                console.log(this.infoBrasilValores)

              /* TODO 

              if(typeof element[1] === 'object'){
                            for(var [key, value] of Object.entries(element)){
                                this.infoBrasilValores.push(`${key}: ${value}`)
                            }
                        }
                        if(typeof element[1] === 'object'){
                            let caraio = element.map((innerElement) => {
                                if(typeof innerElement === 'array'){
                                    console.log('caraio')
                                    let caraio2 = innerElement.map((innerInnerElement) => {
                                        return innerInnerElement
                                    })
                                    this.infoBrasilValores.push(caraio2)
                                }
                                else return innerElement
                            })
                            console.log(caraio)
                            this.infoBrasilValores.push(caraio)
                        }
                        else 

              ------------------------------------------------------
                this.props = Object.entries(this.brasil[0])
                console.log(this.props)
                let infoBrasilAtributoss = this.props
                    .map((element) => {
                        return element[0]
                    })
                this.atributos = infoBrasilAtributoss

                for(var [key, value] of this.props){           
                    if(typeof key === 'object' || typeof value === 'object'){
                        for(var [key1, value1] of Object.entries(value)){
                            if( typeof key1 === 'object' || typeof value1 === 'object'){
                                for(var [key2, value2] of Object.entries(value1)){
                                    if(typeof key2 === 'object' || typeof value2 === 'object'){
                                        for(var [key3, value3] of Object.entries(value2)){
                                             if(typeof key3 === 'object' || typeof value3 === 'object'){
                                                for(var [key4, value4] of Object.entries(value3)){
                                                    if(typeof key4 === 'object' || typeof value4 === 'object'){
                                                        for(var [key5, value5] of Object.entries(value4)){
                                                            this.valores.push(key5, value5)
                                                        }
                                                    }                
                                                    this.valores.push(key4, value4)
                                                }
                                            }        
                                            this.valores.push(key3, value3)
                                        }
                                    }     
                                    this.valores.push(key2, value2)
                                } 
                            }
                            this.valores.push(key1, value1)
                        } 
                    }
                    this.valores.push(key, value)
                }
                console.log(typeof this.valores)

                console.log(this.valores) */

            },
            async rgList(country){ 
                if(country === 'eu'){
                    this.listaEU = true
                    this.rgEUList = Object.entries(this.dataEU)

                    let rg = this.rgEUList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgEUList = rg
                }
                if(country === 'efta'){
                    this.listaEFTA = true  
                    this.rgEFTAList = Object.entries(this.dataEFTA)

                    let rg = this.rgEFTAList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgEFTAList = rg
                }
                if(country === 'caricom'){
                    this.listaCARICOM = true  
                    this.rgCARICOMList = Object.entries(this.dataCARICOM)

                    let rg = this.rgCARICOMList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgCARICOMList = rg
                }
                if(country === 'pa'){
                    this.listaPA = true  
                    this.rgPAList = Object.entries(this.dataPA)

                    let rg = this.rgPAList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgPAList = rg
                }
                if(country === 'au'){
                    this.listaAU = true  
                    this.rgAUList = Object.entries(this.dataAU)

                    let rg = this.rgAUList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgAUList = rg
                }
                if(country === 'usan'){
                    this.listaUSAN = true  
                    this.rgUSANList = Object.entries(this.dataUSAN)

                    let rg = this.rgUSANList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgUSANList = rg
                }
                if(country === 'eeu'){
                    this.listaEEU = true  
                    this.rgEEUList = Object.entries(this.dataEEU)

                    let rg = this.rgEEUList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgEEUList = rg
                }
                if(country === 'al'){
                    this.listaAL = true  
                    this.rgALList = Object.entries(this.dataAL)

                    let rg = this.rgALList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgALList = rg
                }
                if(country === 'asean'){
                    this.listaASEAN = true  
                    this.rgASEANList = Object.entries(this.dataASEAN)

                    let rg = this.rgASEANList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgASEANList = rg
                }
                if(country === 'cais'){
                    this.listaCAIS = true  
                    this.rgCAISList = Object.entries(this.dataCAIS)

                    let rg = this.rgCAISList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgCAISList = rg
                }
                if(country === 'cefta'){
                    this.listaCEFTA = true  
                    this.rgCEFTAList = Object.entries(this.dataCEFTA)

                    let rg = this.rgCEFTAList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgCEFTAList = rg
                }
                if(country === 'nafta'){
                    this.listaNAFTA = true  
                    this.rgNAFTAList = Object.entries(this.dataNAFTA)

                    let rg = this.rgNAFTAList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgNAFTAList = rg
                }
                if(country === 'saarc'){
                    this.listaSAARC = true  
                    this.rgSAARCList = Object.entries(this.dataSAARC)

                    let rg = this.rgSAARCList.map((element) => {
                        return `${element[1].name}, coordenadas: ${element[1].latlng}.`
                    })
                        
                    this.rgSAARCList = rg
                }
            },
            async getRegionalBlocEU(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/eu`)
                const data = await req.json()
                this.dataEU = data
            },
            async getRegionalBlocEFTA(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/efta`)
                const data = await req.json()
                this.dataEFTA = data
            },
            async getRegionalBlocCARICOM(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/caricom`)
                const data = await req.json()
                this.dataCARICOM = data
            },
            async getRegionalBlocPA(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/pa`)
                const data = await req.json()
                this.dataPA = data
            },
            async getRegionalBlocAU(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/au`)
                const data = await req.json()
                this.dataAU = data
            },
            async getRegionalBlocUSAN(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/usan`)
                const data = await req.json()
                this.dataUSAN = data
            },
            async getRegionalBlocEEU(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/eeu`)
                const data = await req.json()
                this.dataEEU = data
            },
            async getRegionalBlocAL(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/al`)
                const data = await req.json()
                this.dataAL = data
            },
            async getRegionalBlocASEAN(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/asean`)
                const data = await req.json()
                this.dataASEAN = data
            },
            async getRegionalBlocCAIS(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/cais`)
                const data = await req.json()
                this.dataCAIS = data
            },
            async getRegionalBlocCEFTA(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/cefta`)
                const data = await req.json()
                this.dataCEFTA = data
            },
            async getRegionalBlocNAFTA(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/nafta`)
                const data = await req.json()
                this.dataNAFTA = data
            },
            async getRegionalBlocSAARC(){
                const req = await fetch(`https://restcountries.com/v2/regionalbloc/saarc`)
                const data = await req.json()
                this.dataSAARC = data
            },
            async getCountries(){
                const req = await fetch(`https://restcountries.com/v3.1/all`)
                const data = await req.json()
                this.countries = data
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
            },
            
            
        },

        mounted(){
            this.getCountries(),
            this.filterBrasil(),
            this.getRegionalBlocEU(),
            this.getRegionalBlocEFTA(),
            this.getRegionalBlocCARICOM(),
            this.getRegionalBlocPA(),
            this.getRegionalBlocAU(),
            this.getRegionalBlocUSAN(),
            this.getRegionalBlocEEU(),
            this.getRegionalBlocAL(),
            this.getRegionalBlocASEAN(),
            this.getRegionalBlocCAIS(),
            this.getRegionalBlocCEFTA(),
            this.getRegionalBlocNAFTA(),
            this.getRegionalBlocSAARC()
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
        margin: 20px;
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