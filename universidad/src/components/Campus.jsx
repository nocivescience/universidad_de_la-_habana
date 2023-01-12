import '../static/css/Campus.css'
export const Campus=(props)=>{
    return (
        <div className='campus-container'>
            <section className='articulo'>
                {props.imagenes.map((imagen,i)=>(
                    <>
                    hola
                    <img key={i} src={imagen}></img>
                    </>
                ))}
            </section>
            <article className='textos'>
                <h1 className='display-1'>{props.titulo}</h1>
                <p>{props.parrafo}</p>
            </article>
        </div>
    )
}