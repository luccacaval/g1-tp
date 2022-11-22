import { useEffect } from "react";
import Item from "./Item";
import { useState } from "react";
import axios from "axios";

const ItemSelector = (props) => {
const [ItemArr, setItemArr] = useState([]);
const [ItemType, setItemType] = useState("");
const [DisplayedItems, setDisplayedItems] = useState([]);
const [adminEnable, setadminEnable] = useState(false);
 

    useEffect(() => {
        axios.get('/movies')
        .then(res => {
            setItemArr(res.data);
        })
        .catch(error => {
            console.error(error)
        })
        }, [props.change])


        useEffect(() => {
            if (ItemType !== "") setDisplayedItems(ItemArr.filter(Item => Item.Type === ItemType).map(item => <Item Name={item.Name} Gender={item.Gender} Sinopsis={item.Sinopsis} Califs={item.Califs} key={item._id} item_id = {item._id} admin_mode = {adminEnable} Image= {item.ImagePath} delete={props.submit}/>))
        }, [adminEnable, ItemType,ItemArr])

    return (
        <div>
            <div className="centre">
            <button className="btn btn-warning" id="centre" onClick={event => setadminEnable(!adminEnable)}>Admin</button>
            </div>
            <div className="centre">
            <button className="btn btn-primary"onClick={event => setItemType("Pelicula")}>Peliculas</button>
            <button className="btn btn-danger"onClick= { event => setItemType("Serie")}>Series</button>
            </div>
            {DisplayedItems}
        </div>
    );
}

export default ItemSelector
