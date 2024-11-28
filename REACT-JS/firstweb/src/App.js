import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {

  //life cycle init, mounting, updating, unmounting =webpage close

  const [data, setdata] = useState([]); // all data
  const [id, setid] = useState();
  const [title, settitle] = useState();
  const [price, setprice] = useState();
  const [description, setdescription] = useState();
  const [category, setcategory] = useState();
  const [image, setimage] = useState();

  const [datadlt, setdatadlt] = useState(null);  //data delete
  const [dataedt, setdataedt] = useState(false); //data edit

  //data fetch = server -> api call -> usestate -> map ->jsx

  const datafetch = async () => {
    axios.get(`https://fakestoreapi.com/products`)
  }

  //data insert = form -> jsx-> enter data-> usestste -> api -> server

   const datainsert = async () => {
    let data1={
      //key and value
      title:title,
      price:price,
      description:description,
      category:category,
      image:image
    }
    axios.post(`https://fakestoreapi.com/products`,data)
    .then((response) => {
      
    }).catch((error) => {
      console.log(error)
    });
  }

  //data delete = 
  const datadelete= async ()=>{
    axios.delete(`https://fakestoreapi.com/products`)
  }
  //data edit
  const dataedit= async ()=>{
    axios.put(`https://fakestoreapi.com/products`)
  }

 useEffect(() => {
  
  datafetch()
 
 }, []);

  /*
  useeffect - side effect remove
    endpoint = https://fakestoreapi.com/products

    crud operation      useeffect usestate api
    fetch = third party axios get post put delete

    server - api call - usestate - map - design
  */

  return (
    <div>
  <form id="myform">
    enter title : -<input type="text" id="title" /><br /><br />
    enter price : -<input type="text" id="price" /><br /><br />
    enter description : -<input type="text" id="description" /><br /><br />
    enter category : -<input type="text" id="category" /><br /><br />
    enter image : -<input type="text" id="image" /><br /><br />
    <input type="submit" defaultValue="postdata" />
  </form>
</div>

  )
}
