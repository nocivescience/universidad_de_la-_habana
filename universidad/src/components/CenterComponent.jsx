import '../static/css/center-component.css'
export const CenterComponent=(props)=>{
    return (
        <div className='article-container'>
            <h2 className='title display-6'>{props.title}</h2>
            <div className='interior'>
                <img src={props.image}></img>
                <p>{props.parrafo}</p>
            </div>
        </div>
    )
}