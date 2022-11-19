import React from "react";
import { useState, useRef  } from "react";
import axios from 'axios';
import Photo from './Photo';

const Form = props => {
    const [form, setForm] = useState({
      "Name" :'',
      "Type" : '',
      "Gender" : '',
      "Sinopsis" : '',
      "Califs" :  [0],
      "Image" : '',
      "ImagePath" : ''
      });

    const fileInput = useRef(null);




      function handleSubmit(event) {
        event.preventDefault();
        const config = {
          headers: { "Content-Type": "multipart/form-data" }
        };
        const data = {
          Name : form.Name,
          Type : form.Type,
          Gender : form.Gender,
          Sinopsis : form.Sinopsis,
          Califs :  form.Califs,
          Image : fileInput.current.files[0],
          ImagePath : ''
        }

        axios.post('/movies', data,config)
        .then(respose =>{
          console.log("Peticion Envidada")
          console.log(respose)
          props.submit()
          }
        )
        .catch(error => {
          console.error(error);
        })
      }


  return (
    <form onSubmit={handleSubmit} className="centre form">
    <label>
    Nombre
    <input
    className="input"
    value={form.Name}
    onChange={e =>{
      setForm({
        ...form,
        Name: e.target.value
      })
    }}
    />
    </label>
    <br/>
    <label>
    Pelicula
    </label>
    <input
    className="input"
    name = "Type"
    type ="radio"
    value={form.Type}
    onChange={e =>{
      setForm({
        ...form,
        Type: "Pelicula"

      })
    }}
    />
    <label>
    Serie
    </label>
    <input
    className="input"
    name = "Type"
    type ="radio"
    value={form.Type}
    onChange={
      ()=>{
      setForm({
        ...form,
        Type: "Serie",

      })
    }}
    />
    <br/>
    <label>
    Genero
    <input
    className="input"
    value={form.Gender}
    onChange={e =>{
      setForm({
        ...form,
        Gender: e.target.value
      })
    }}
    />
    </label>
    <br></br>
    <label>
    Sinopsis
    <input
    className="input"
    value={form.Sinopsis}
    onChange={e =>{
      setForm({
        ...form,
        Sinopsis: e.target.value
      })
    }}
    />
    </label>
    <br></br>
    <label>
    Calificacion
    </label>
    <input
    className="input"
    type = "number"
    min = "0"
    max = "10"
    value={form.Califs[0]}
    onChange={e =>{
      setForm({
        ...form,
        Califs : [+e.target.value]
      })
    }}
    />
    <br></br>
    <label>
      Subir una imagen
      <input type="file" ref={fileInput} name="image" />
    </label>
   
    <br></br>
  <input className="btn btn-success"
  type = "submit"/>
    </form>
  )
}

export default Form
