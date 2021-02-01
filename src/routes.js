// import { component } from "vue/types/umd"
import InicioComponent from './components/inicioComponent.vue'
import UsuariosComponent from './components/Usuarios.vue'
import InfoUsuario from './components/infoUsuario.vue'

// Lazy loading: Sólo lo carga cuando necesitemos el componente, se debe comentar el import de UsuariosComponent
// const UsuariosComponent = resolve => {
//     require.ensure(['./components/Usuarios.vue'], () => {
//         resolve(require('./components/Usuarios.vue'))
//     })
// }

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
        // children: [
        //     {
        //         path: ':id',
        //         component: InfoUsuario,
        //         name: 'InfoUsuario'
        //     }
        // ]
    },
    {
        path: '/usuarios/:id',
        component: InfoUsuario,
        name: 'InfoUsuario'
    },
    // Forma de redireccionar a otra ruta
    {
        path: '/users',
        redirect: '/usuarios'
    },
    // Redireccionar cuando alguien escribe cualquier cosa, es decir, cuando ninguna de las rutas anteriores es llamada, entonces te redirecciona
    {
        path: '*',
        redirect: '/'
    }
    
]
