// import { component } from "vue/types/umd"
import InicioComponent from './components/inicioComponent.vue'
import UsuariosComponent from './components/Usuarios.vue'

// Las rutas son un arreglo de objetos
export const routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: '/usuarios/:id?',
        component: UsuariosComponent
    }
]
