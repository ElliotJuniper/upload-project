import React, {useState} from "react";
// import Axios from "axios";
import {AdvancedImage} from '@cloudinary/react';
// import {Cloudinary} from "@cloudinary/url-gen";
import './App.css';


const App = () => {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload-preset", "wojru1pn")
    formData.append("method", "POST")
    // Axios.post(
    //   "https://api.cloudinary.com/v1_1/silorain/image/upload",
    //   formData
    // ).then((response) => {
    //   console.log(response);
    // })
    const response = await fetch("https://api.cloudinary.com/v1_1/silorain/image/upload", formData
    // {
    //   method: "POST",
    //   headers: {"Content-Type" : "application/json"},
    //   body: JSON.stringify(formData)
    // }
    )
    const data = await response.json()
    console.log(data) 
  }

  return (
    <div>
      <input 
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0])
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>

      <AdvancedImage 
      
      cloudname="silorain" publicid="https://res.cloudinary.com/dboktxqh7/image/upload/v1652869340/Screenshot_2022-05-13_at_12.29.21_wzo1ta.png"/>
    </div>
  )
}
export default App;
