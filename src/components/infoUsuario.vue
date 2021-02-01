<template>
    <div>
        <h3>Información del usuario</h3>
        <div>
            <p><strong>Nombre: </strong>{{ name }}</p>
            <p><strong>Correo: </strong>{{ email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: ''
        }
    },
    created() {
        let id = this.$route.params.id
        this.$http.get('https://jsonplaceholder.typicode.com/users/' + id).then(respuesta => respuesta.json()).then(usuarios => {
            this.name = usuarios.name
            this.email = usuarios.email
        })
    }
}
</script>