<template>
  <div class="container">
    <encabezado></encabezado>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Encabezado from './components/Encabezado'

export default {
  name: 'App',
  components: {
    Encabezado
  }
}
</script>

<style>

</style>
