import '../static/css/Right.css'
import Calendar from 'react-calendar'
import { RightComponent } from './RightComponent'
export const Right=()=>{
    return (
        <div className='tercer-elemento'>
            <div className='calendar-container'>
                <Calendar></Calendar>
            </div>
            <RightComponent
                title='REVISTAS DE INTERÉS UCMH'
                body='Revista Habanera de Ciencias Médicas
                    Revista 16 de abril
                    Revista cubana de Informática Médica'
            ></RightComponent>
        </div>
    )
}