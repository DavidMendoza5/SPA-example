<template>
    <div>
        <p>Lista de usuarios</p>
        <ul class="list-group">
            <span>ID: {{ id }}</span>
            <li class="list-group-item" v-for="usuario in usuarios" :key="usuario.id">
                {{ usuario.name }}
            </li>
        </ul>
        <!-- De esta forma mostramos todo lo que viene de la subruta -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            usuarios: {}
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(respuesta => respuesta.json()).then(usuarios => this.usuarios = usuarios)
    }
}
</script>