<template>
    <table id="table">
        <div>
            <tr id="table-heading">
                <th>Id:</th>
                <th>Nome:</th>
                <th>Data de Nascimento:</th>
                <th>CPF:</th>
                <th>CEP:</th>
                <th>Logradouro:</th>
                <th>Bairro:</th>
                <th>Cidade:</th>
                <th>Estado:</th>
            </tr>
        </div>
        <tr class="table-rows" v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.date}}</td>
                <td>{{user.cpf}}</td>
                <td>{{user.cep}}</td>
                <td>{{user.logradouro}}</td>
                <td>{{user.bairro}}</td>
                <td>{{user.cidade}}</td>
                <td>{{user.estado}}</td>
        </tr>
        <div>
                
            </div>
    </table>
</template>

<script>
export default {
    name: "Dash",
    data() {
        return {
            users: null,
            dateFormat: null
        }
    },
    methods: {
        async getUsers(){
            const req = await fetch("http://localhost:3000/users")
            const data = await req.json()

            this.users = data
                
        },
    },
    mounted() {
        this.getUsers()
    },
}
</script>

<style scoped>
    #table {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    th, td {
        display: flex;
        width: 120px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    #table-heading,
    .table-rows {
        display: flex;
        flex-direction: row;
    }

    #table-heading {
        background-color: #222;
        color: whitesmoke;
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }

    #table-heading div,
    .table-rows div{
        width: 30%;
    }

    .table-row {
        width: 100%;
        padding: 20px;
        border-bottom: 1px solid #ccc;
    }

    .table-rows {
        border-bottom: 1px solid rgb(199, 199, 199);
        padding: 20px;
        background-color: whitesmoke;
    }

</style>