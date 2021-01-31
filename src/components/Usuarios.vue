<template>
    <div>
        <p>Lista de usuarios</p>
        <ul class="list-group">
            <li class="list-group-item" v-for="usuario in usuarios" :key="usuario.id">
                {{ usuario.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usuarios: {}
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/users').then(respuesta => respuesta.json()).then(usuarios => this.usuarios = usuarios)
    }
}
</script>