import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const Item = props => {
const [Califs, setCalifs] = useState(props.Califs);  
const [CalifProm, setCalifProm] = useState(0);
const [newCalif, setnewCalif] = useState(0);



function deleteItem(event){
    event.preventDefault()
    axios.delete('/movies/' + props.item_id)
    .then(respose =>{
        console.log("Peticion Envidada")
        console.log(respose)
        props.delete()}
      )
      .catch(error => {
        console.error(error);
      })
}

function handleCalif(event){
    event.preventDefault()
    setCalifs([...Califs, newCalif])
    console.log(props.Califs);
    axios.put('/movies/' + props.item_id, Califs)
    .then(respose =>{
        console.log("Peticion Envidada")
        console.log(respose)
      }
      )
      .catch(error => {
        console.error(error);
      })
}

useEffect(() => {
  let prom = 0;
  for (const Calif of Califs) {
    prom += Calif
  }
  prom = prom / Califs.length
  setCalifProm(prom)
}, [Califs])


    return (
        <div className="itemcard">
          <img className="img" src={props.Image}/>
            <h3>{props.Name}</h3>
                <p>Genero: {props.Gender}</p>
                <p>Sinopsis: {props.Sinopsis}</p>
                <p>Calificación: {CalifProm}</p>
                <form onSubmit={handleCalif}>
                    <label>Ingrese su Calificacion : </label>
                    <input className="cabra"
                    data-itemid = {props.item_id}
                    type= "number"
                    min = "0"
                    max = "10"
                    value = {newCalif}
                    onChange={e =>{
                        setnewCalif(
                          +e.target.value
                        )
                      }}
                    />
                    <button className="btn btn-success"type = "submit">Enviar</button>
                </form>

            <p>{props.admin_mode ? <button className="btn btn-danger default" onClick={deleteItem}>Eliminar</button> : ''}</p>
        </div>
    )
}

export default Item
