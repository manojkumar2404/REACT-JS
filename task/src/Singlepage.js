import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function Singlepage() {

    const {id} = useParams();

    const [x, setx] = useState([]);

    const singledatafetch = async()=>{
        try {
            const response = await axios.get(`https://631f57da58a1c0fe9f670e23.mockapi.io/productapi/${id}`)
             setx(response.data)
         } catch (error) {
             console.log(error);
         }
     } 

     useEffect(() => {
        singledatafetch();
       }, [id])
    
  return (
    <div>
     
      <p>{x.productname}</p> 
      <p>{x.productdescription}</p> 
      <p>{x.prodctimage}</p>
      <p>{x.productquantity}</p> 
      <p>{x.productcategory}</p>  
      <p>{x.productprice}</p>  
      <p>{x.id}</p>   
    
    </div>
  )
}