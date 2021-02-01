<template>
    <div>
        <h3>Información del usuario</h3>
        <div>
            <p><strong>Nombre: </strong>{{ name }}</p>
            <p><strong>Correo: </strong>{{ email }}</p>
        </div>
        <button class="btn btn-primary" @click="volver">Volver</button>
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
    // Funciona similar a un computed, pero este se encarga de revisar si hubo algún cambio en la página, en este caso, un cambio en la ruta
    // watch: {
    //     $route() {
    //         let id = this.$route.params.id
    //         this.$http.get('https://jsonplaceholder.typicode.com/users/' + id).then(respuesta => respuesta.json()).then(usuarios => {
    //         this.name = usuarios.name
    //         this.email = usuarios.email
    //         })
    //     }
    // },
    methods: {
        volver() {
            // Este método permite poner una ruta cuando es llamado, igual se le puede poner el nombre de la ruta
            // {name: 'nombreRuta'}, en lugar de poner la ruta tal cual
            this.$router.push('/usuarios')
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