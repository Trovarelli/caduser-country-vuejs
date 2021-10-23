<template>
    <div>
        <p id = "msg-style" v-show="cadastrado">
            <b>Usuário cadastrado com sucesso! &#128522;</b>
        </p>
         <p id = "error" v-if="errors.length">
            <b>Por favor, corrija o(s) seguinte(s) erro(s) &#128517;:</b>
            <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
        <form class="form-cad" @submit="createUsers" >
            <div class="input-container">
                <label for="name">Nome:</label>
                <input  maxlength="12" class="input-countainer-label" type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome">
            </div>
            <div class="input-container">
                <label for="lastName">Sobrenome:</label>
                <input maxlength="55" class="input-countainer-label" type="text" id="lastName" name="lastName" v-model="lastName" placeholder="Digite o seu sobrenome">
            </div>
            <div class="input-container">
                <label for="date">Data de nascimento:</label>
                <input class="input-countainer-label" type="date" id="date" name="date" v-model="date" placeholder="digite a data do seu nascimento">
            </div>
            <div class="input-container">
                <label for="cpf">CPF:</label>
                <input minlength="11" maxlength="14" class="input-countainer-label" type="text" id="cpf" name="cpf" v-model="cpf" placeholder="digite seu cpf" @input="pendente=true" @keyup.enter="verificarCpf">
                <input type="button" @click="verificarCpf" class="submit-btn-cep" value="Validar CPF" >
                <div v-show="!pendente" :style="messageType" class="msg">
                    <span v-if="valido"> CPF valido </span>
                    <span v-else> CPF invalido, tente novamente </span>
                </div>
            </div>
            <form class="form-cad-cep" @click="getCep">
                <div class="input-container">
                    <label for="cep">CEP:</label>
                    <input minlength="8" maxlength="10" class="input-countainer-label" type="text" id="cep" name="cep" v-model="cep" placeholder="digite seu CEP">
                    <input type="button" class="submit-btn-cep" value="Buscar Endereço">
                </div>
                <div class="input-container">
                
                </div>
            </form>
            <div class="input-container">
                <label for="rua">Logradouro:</label>
                <input class="input-countainer-label" type="text" id="rua" name="rua" v-model="rua">
            </div>
            <div id="numeroComp">
                <div class="input-container">
                    <label for="numero">Número:</label>
                    <input maxlength="10" class="input-countainer-label" type="text" id="numero" name="numero" v-model="numero">
                </div>
                <div class="input-container">
                    <label for="numero">Complemento:</label>
                    <input maxlength="20" class="input-countainer-label" type="text" id="complemento" name="complemento" v-model="complemento">
                </div>
            </div>
            <div class="input-container">
                <label for="bairro">Bairro:</label>
                <input class="input-countainer-label" type="text" id="bairro" name="bairro" v-model="bairro">
            </div>
            <div class="input-container">
                <label for="cidade">Cidade:</label>
                <input class="input-countainer-label" type="text" id="cidade" name="cidade" v-model="cidade">
            </div>
            <div class="input-container">
                <label for="estado">Estado:</label>
                <input class="input-countainer-label" type="text" id="estado" name="estado" v-model="estado">
            </div>
            <div class="input-container-btn">
                <input type="submit" id="submit-btn" value="Enviar">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                errors: [],
                name: null,
                lastName: null,
                date: null,
                cpf: null,
                cep: null,
                rua: "",
                numero: null,
                complemento: "",
                bairro: null,
                cidade: null,
                estado: null,
                msg: null,
                pendente: true,
                valido: false,
                cadastrado: false
            }
        },

        methods: {
            verificarCpf() { 
                const validar = cpf => checkAll(prepare(cpf))

                const notDig = i => !['.', '-', ' '].includes(i)
                const prepare = cpf => cpf.trim().split('').filter(notDig).map(Number)
                const is11Len = cpf => cpf.length === 11
                const notAllEquals = cpf => !cpf.every(i => cpf[0] === i)
                const onlyNum = cpf => cpf.every(i => !isNaN(i))

                const calcDig = limit => (a, i, idx) => a + i * ((limit + 1) - idx)
                const somaDig = (cpf, limit) => cpf.slice(0, limit).reduce(calcDig(limit), 0)
                const resto11 = somaDig => 11 - (somaDig % 11)
                const zero1011 = resto11 => [10, 11].includes(resto11) ? 0 : resto11

                const getDV = (cpf, limit) => zero1011(resto11(somaDig(cpf, limit)))
                const verDig = pos => cpf => getDV(cpf, pos) === cpf[pos]

                const checks = [is11Len, notAllEquals, onlyNum, verDig(9), verDig(10)]
                const checkAll = cpf => checks.map(f => f(cpf)).every(r => !!r)
                
                this.valido = validar(this.cpf)
                this.pendente = false
            },

            async getCep(){
                const req = await fetch(`https://viacep.com.br/ws/${this.cep}/json`)
                const data1 = await req.json()
                this.rua = data1.logradouro
                this.bairro = data1.bairro
                this.cidade = data1.localidade
                this.estado = data1.uf
                this.scrollToBottom() 
            },

            async createUsers(event){
                event.preventDefault()

                this.pendente = true

                var hoje = new Date()
                var nasc  = new Date(this.date)
                var idade = hoje.getFullYear() - nasc.getFullYear()
                var m = hoje.getMonth() - nasc.getMonth()
                if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--
                
                if (idade < 18){
                    this.errors.push(`Lamento mas você tem ${idade} anos, pessoas menores de 18 anos não podem se cadastrar.`)
                    setTimeout(() => {
                        while(this.errors.length){
                            this.errors.pop()
                        }
                    }, (this.errors.length * 1000) + 7000)
                    return false
                }

                if (idade > 65){
                    this.errors.push(`Lamento mas você tem ${idade} anos, pessoas com mais de 65 anos não podem se cadastrar.`)
                    setTimeout(() => {
                        while(this.errors.length){
                            this.errors.pop()
                        }
                    }, (this.errors.length * 1000) + 7000)
                    return true
                }

                if ((this.name === null || this.name === "" ) ||
                (this.lastName === null || this.lastName === "") ||
                (this.date === null || this.date === "") ||
                (this.cpf === null || this.cpf === "") ||
                (this.cep === null || this.cep === "") ||
                (this.rua === null || this.rua === "") ||
                (this.numero === null || this.numero === "") ||
                (this.cidade === null || this.cidade === "") ||
                (this.bairro === null || this.bairro === "") ||
                (this.estado === null || this.estado === "") ||
                (this.valido !== true))
                {
                    if (this.name && this.lastName && this.date && this.cpf && this.cep  && this.rua &&this.numero && this.bairro  && this.cidade  && this.estado && this.valido) {
                        return true
                    }
                    if (this.name == null || this.name === "") {
                        this.errors.push('O campo Nome é obrigatório.')
                    }
                    if (this.lastName == null || this.lastName === "") {
                        this.errors.push('O campo Sobrenome é obrigatório.')
                    }
                    if (this.date == null || this.date === "") {
                        this.errors.push('A campo Data de nascimento é obrigatório.')
                    }
                    if (this.cpf == null || this.cpf === "") {
                        this.errors.push('O campo CPF é obrigatório.')
                    }
                    if (this.cep == null || this.cep === "") {
                        this.errors.push('O campo CEP é obrigatório.')
                    }
                    if (this.rua == null || this.rua == "") {
                        this.errors.push('O campo Logradouro é obrigatório.')
                    }
                    if (this.numero == null || this.numero === "") {
                        this.errors.push('O campo Número é obrigatório.')
                    }
                    if (this.bairro == null || this.bairro === "") {
                        this.errors.push('O campo Bairro é obrigatório.')
                    }
                    if (this.cidade == null || this.cidade === "") {
                        this.errors.push('O campo Cidade é obrigatório.')
                    }
                    if (this.estado == null || this.estado === "") {
                        this.errors.push('O campo Estado é obrigatório.')
                    }
                    if(this.valido !== true) {
                        this.errors.push('Por favor insira um CPF válido.')
                    }

                    setTimeout(() => {
                        while(this.errors.length){
                            this.errors.pop()
                        }
                    }, (this.errors.length * 1000) + 2000)
                }
                else {

                    this.cadastrado = true

                    let dataFormat = this.date
                        .split('-')
                        .reverse().join('/')
                    let cpfFormat = this.cpf
                        .replaceAll('-', '')
                        .replaceAll('.', '')
                        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                    let cepFormat = this.cep
                        .replaceAll('-', '')
                        .replaceAll('.', '')
                        .replace(/(\d{5})(\d{2})/, "$1-$2")

                    const data = {
                        name: `${this.name} ${this.lastName}`,
                        date: dataFormat,
                        cpf: cpfFormat,
                        cep: cepFormat,
                        logradouro: `${this.rua}, ${this.numero} ${this.complemento}`,
                        bairro: this.bairro,
                        cidade: this.cidade,
                        estado: this.estado
                    }
                    
                    const dataJson = JSON.stringify(data)

                    await fetch("http://localhost:3000/users", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: dataJson
                    })

                    this.msg = `Cadastro realizado com sucesso`

                    setTimeout(() => this.cadastrado = false, 6000)
                    
                    this.name = null
                    this.date = null
                    this.lastName = null
                    this.cpf = null
                    this.cep = null
                    this.rua = null
                    this.numero = null
                    this.complemento = ""
                    this.bairro = null
                    this.cidade = null
                    this.estado = null

                    this.scrollToTop()
                    
                }
            },
            scrollToTop() {
                window.scrollTo(0,0);
             },
            scrollToBottom() {
                window.scrollTo(0, 800);
            },

        },
        computed: {
            messageType() {
            return {
                color: this.valido ? 'green' : 'red'
                }
            }
        }
    }
</script>

<style scoped>

    html{
        scroll-behavior: smooth;
        margin: 0;
    }

    label{
        color: #222;
        font-weight: bold;
        font-size: 20px;
    }

    input:invalid {
        border-bottom: 3px solid #ff0000;
    }

    input:invalid:hover {
        border-bottom: 3px solid #ff0000;
    }

    input[type=text] {
        color: #222;
    }

    .input-countainer-label:focus {
        outline: none !important;
        border: none;
        border-bottom: 3px solid #65A29C;
    }

    #numeroComp #numero {
        margin-right: 15px;
    }

    #numeroComp input[type=text] {
        font-size: 16px;
        text-align: center;
    }

    #numeroComp label {
        font-size: 16px;
        text-align: center;
        margin-top: 10px;
    }
    
    #numeroComp {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 5px;
        border: none;
        border-bottom: 3px solid rgb(189, 189, 189);
        margin-bottom: 5px;
        height: 50px;
        font-size: 18px;
        background-color: whitesmoke;
    }

    .input-countainer-label {
        height: 50px;
        font-size: 18px;
        border: none;
        border-bottom: 3px solid rgb(189, 189, 189);
        margin-bottom: 5px;
        background-color: whitesmoke;
    }

    .input-countainer-label:hover {
        border-bottom: 3px solid #65A29C;
    }
     
    .input-container{
        display: flex;
        flex-direction: column;
        margin: 10px 0 10px 0px;
        width: 100%;
    }

    .input-container label{
       color: #222;
       width: 100%;
    }

    .form-cad-cep {
        width: 100%;
    }

    .form-cad {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        padding: 40px;
        box-shadow: 5px 10px 5px rgba(34, 34, 34, 0.568);
        border-radius: 20px;
    }

    #submit-btn {
        background-color: transparent;
        color: #222;
        font-weight: bold;
        border: 3px solid #65A29C;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .3s;
        border-radius: 10px
    }

    #submit-btn:hover {
        background-color: #222;
        color: whitesmoke;
    }

    .submit-btn-cep{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        width: 50%;
        color: #222;
        font-weight: bold;
        border: 3px solid #65A29C;
        padding: 5px;
        font-size: 16px;
        cursor: pointer;
        transition: .3s;
    }

    .submit-btn-cep:hover {
        background-color: #222;
        color: whitesmoke;
    }

    #msg-style {
        position: sticky;
        top: 0;
        z-index: 1;
        text-align: center;
        color: #004085;
        background-color: #cce5ff;
        border: 2px solid #b8daff;
        border-radius: 5px;
        padding: 30px;
        max-width: 550px;
        margin: 30px auto;
    }

    #error {
        position: sticky;
        top: 0;
        z-index: 1;
        text-align: center;
        color: #850000;
        background-color: #ffcccc;
        border: 2px solid #ffb8b8;
        border-radius: 5px;
        padding: 8px;
        max-width: 550px;
        margin: 30px auto;
    }
    #error ul li{
        text-align: start;
    }
</style>