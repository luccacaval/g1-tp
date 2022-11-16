import axios from "axios";
import { useEffect, useState } from "react";

const carrusel = props => {
  const [data, setData] = useState([])
  const []
  
  useEffect(() =>{
    axios.get('/movies')
    .then(res => {
        setData(res.data);
    })
    .catch(error => {
        console.error(error)
    })
    }, [])


  return (
      
        <div id="pelis-desp" className="carru">
        <h2>Mejores peliculas</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
          <img className="image"src="https://resizing.flixster.com/kxejUSFjS4mtH8RTMhPaRSG_kp0=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/459/359/thumb_B33AE747-184C-4B10-8EEF-4CA4D29F14BA.jpg" alt="Chania" />
            <p className="centrar">El señor de los anillos</p>
        </div>

        <div className="item">
          <img className="image" src="https://resizing.flixster.com/kxejUSFjS4mtH8RTMhPaRSG_kp0=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/459/359/thumb_B33AE747-184C-4B10-8EEF-4CA4D29F14BA.jpg" alt="Chicago" />
            <p className="centrar">CARS</p>
        </div>

          </div>

        </div>
      </div>
    )
}
export default carrusel;