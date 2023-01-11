import '../static/css/Left.css'
import { LeftComponent } from './LeftComponent'
export const Left=()=>{
    return (
        <div className='primer-elemento'>
            <LeftComponent
                titulo='CONÓZCANOS'
                lista={['Bienvenido','Acerca de la UCMH','Historia de la UCMH']}
            ></LeftComponent>
            <LeftComponent
                titulo='GENERAL UCMH'
                lista={['Dirección de cuadros','Secretaría general','Dirección de Relaciones Internacionales']}
            ></LeftComponent>
            <LeftComponent
                titulo='GENERAL UCMH'
                lista={['Dirección de cuadros','Secretaría general','Dirección de Relaciones Internacionales']}
            ></LeftComponent>
        </div>
    )
}