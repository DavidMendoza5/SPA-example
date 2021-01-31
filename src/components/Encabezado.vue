<template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills pull-right">
                <!-- El router link permite que el enrutador se encargue de las rutas -->
                <!-- El atributo tag nos permite indicar sobre qué tag se encuentra el router-link sin necesidad de ponerlo -->
                <!-- El atributo active class nos permite darle clases a nuestro router link y de esta forma usar css -->
                <router-link tag="li" to="/" active-class="active" exact="/"><a>Inicio</a></router-link>
                <router-link tag="li" to="/usuarios" active-class="active" exact="/usuarios"><a>Usuarios</a></router-link>
            </ul>
            <h3 class="text muted">Aplicación usuarios</h3>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>