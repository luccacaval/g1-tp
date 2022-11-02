import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const Item = props => {
const [CalifProm, setCalifProm] = useState(0);
const [newCalif, setnewCalif] = useState({
    Calif : 0
});

function handleSubmit(event){
    event.preventDefault()
    props.Califs.push(newCalif)
    console.log(props.Califs);
    axios.put('/movies/' + props.item_id, props.Califs.push(newCalif))
    .then(respose =>{
        console.log("Peticion Envidada")
        console.log(respose)}
      )
      .catch(error => {
        console.error(error);
      })
}

    useEffect(() => {
        let prom = 0;
        console.log()
        for (const calif of props.Califs) {
            prom += calif.Calif
        }
        console.log(props.Califs)
        prom = prom / props.Califs.length;
        setCalifProm(prom) 
    }, [props.Califs])
    
    return (
        <div>
            <h3>{props.Name}</h3>
            <ul>
                <li>Genero: {props.Gender}</li>
                <li>Sinopsis: {props.Sinopsis}</li>
                <li>Calificación: {CalifProm}</li>
                <form onSubmit={handleSubmit}>
                    <input
                    data-itemid = {props.item_id} 
                    type= "number"
                    min = "0"
                    max = "10"
                    value = {newCalif.Calif}
                    onChange={e =>{
                        setnewCalif({
                          ...newCalif,
                          Calif : +e.target.value
                        })
                      }}
                    />
                    <button type = "submit">Enviar</button>
                </form>
            </ul>
        </div>
    )
} 

export default Item