import { useEffect } from "react";
import Item from "./Item";
import { useState } from "react";
import axios from "axios";

const ItemSelector = () => {
const [ItemArr, setItemArr] = useState([]);
const [DisplayedItems, setDisplayedItems] = useState([]);

const SelectType = (event,Type) => {
    setDisplayedItems(ItemArr.filter(Item => Item.Type === Type).map(item => <Item Name={item.Name} Gender={item.Gender} Sinopsis={item.Sinopsis}  Calif={item.Califs} key={item._id}/> ))
}

    useEffect(() => {
        console.log(DisplayedItems);
    }, [DisplayedItems])

    useEffect(() => {
        axios.get('/movies')
        .then(res => {
            setItemArr(res.data);
        })
        .catch(error => {
            console.error(error)
        })
        }, [])
    
    return (
        <div>
        <button onClick={event => SelectType(event, "Pelicula")}>Peliculas</button>
        <button onClick={event => SelectType(event, "Serie")}>Series</button>
        {DisplayedItems}
        </div>
    );
}

export default ItemSelector