const Item = props => {
    return (
        <div>
            <h3>{props.Name}</h3>
            <ul>
                <li>Genero: {props.Gender}</li>
                <li>Sinopsis: {props.Sinopsis}</li>
                <li>Calificación: {props.Calif}</li>
            </ul>
        </div>
    )
} 

export default Item