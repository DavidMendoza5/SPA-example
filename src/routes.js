// import { component } from "vue/types/umd"
import InicioComponent from './components/inicioComponent.vue'
import UsuariosComponent from './components/Usuarios.vue'
import InfoUsuario from './components/infoUsuario.vue'

// Las rutas son un arreglo de objetos
export const routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: '/usuarios',
        component: UsuariosComponent,
        // De esta forma se crea una subruta
        children: [
            {
                path: ':id',
                component: InfoUsuario,
                name: 'InfoUsuario'
            }
        ]
    }
]
