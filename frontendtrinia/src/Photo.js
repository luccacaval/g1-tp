import { useState, useRef } from 'react';
import axios from 'axios';

const Photo = () => {

  const fileInput = useRef(null);


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", fileInput.current.files[0]);
    const url = '/uploads';
    const data = formData;
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    axios.post(url,data,config)
      .then(res => console.log(res.data));
};


  const [title, setTitle] = useState('');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" ref={fileInput} name="image" />
        <br />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};

export default Photo;