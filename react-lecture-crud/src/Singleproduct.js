import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
export default function Singleproduct() {

  //uesparam - url get data

    let {id} = useParams();
 const [x, setx] = useState([]);

 const singledatafetch = async ()=>{
  try {
    const response = await axios.get(`https://675beb0e9ce247eb1937dc4a.mockapi.io/user/${id}`);
     setx(response.data);
 } catch (error) {
     console.log(error);
 }
 }

 useEffect(() => {
  singledatafetch()
 }, [id])

  return (
    <div>
      <p>{x.category}</p>
      <p>{x.name}</p>
      <img src={x.image} alt={x.name} style={{ width: '200px' }} />
      <p>{x.price}</p>
      <p>{x.description}</p>
    </div>
  )
}
