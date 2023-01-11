import '../static/css/Center.css'
import { CenterComponent } from './CenterComponent'
import ArticuloLogo from '../assets/articulo-logo.jpg'
export const Center=()=>{
    return (
        <div className='center-container'>
            <CenterComponent
                title='prueba 1'
                parrafo='Minim ipsum consectetur ex quis excepteur Lorem qui quis quis enim exercitation elit ut. Tempor exercitation nisi mollit cupidatat et commodo Lorem ea et minim commodo tempor cupidatat cupidatat. Proident excepteur non incididunt duis cupidatat ad minim ipsum cillum ipsum irure ipsum velit Lorem. Anim Lorem voluptate esse reprehenderit aliquip sit sunt est enim. Aliquip anim anim officia laboris proident laboris ut anim voluptate enim mollit.'
                imagenes={[ArticuloLogo]}
            ></CenterComponent>
        </div>
    )
}