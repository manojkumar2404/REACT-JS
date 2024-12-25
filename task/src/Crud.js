import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Crud() {

    const navig = useNavigate()

    const datanavig = (pid)=>{
        navig('/product/pid')
    }

    const [data, setdata] = useState([]);
    const [productname, setproductname] = useState('');
    const [productdescription, setproductdescription] = useState('');
    const [prodctimage, setprodctimage] = useState('');
    const [productquantity, setproductquantity] = useState('');
    const [productcategory, setproductcategory] = useState('');
    const [productprice, setproductprice] = useState('');
    const [id, setid] = useState('');

    const [dataEdit, setdataEdit] = useState(false);

    const dataInsert = async ()=>{

        let data = {
            productname:productname,
            productdescription:productdescription,
            prodctimage:prodctimage,
            productquantity:productquantity,
            productcategory:productcategory,
            productprice:productprice
          };
        try {
           await axios.post(`https://631f57da58a1c0fe9f670e23.mockapi.io/productapi`,data);
           formReset();
           dataFetch();
        } catch (error) {
            console.log(error)
        }
    }

    const formReset =()=>{
        setproductname('');
        setproductdescription('');
        setprodctimage('');
        setproductquantity('');
        setproductcategory('');
        setproductprice('');
    }

    const dataFetch = async ()=>{
        try {
           const response = await axios.get(`https://631f57da58a1c0fe9f670e23.mockapi.io/productapi`)
            setdata(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      dataFetch()
    }, [])

    const dataDelete = async (id)=>{
        try {
            await axios.delete(`https://631f57da58a1c0fe9f670e23.mockapi.io/productapi/${id}`)
            dataFetch();
        } catch (error) {
            console.log(error)
        }
    }


    const editMode =()=>{
        setdataEdit(true)
    }

    const dataUpdate = async ()=>{
        let data = {
            productname:productname,
            productdescription:productdescription,
            prodctimage:prodctimage,
            productquantity:productquantity,
            productcategory:productcategory,
            productprice:productprice
          };
        try {
           await axios.put(`https://631f57da58a1c0fe9f670e23.mockapi.io/productapi/${id}`,data);
           formReset()
           dataFetch()
           setdataEdit(false)
        } catch (error) {
            console.log(error)
        }
    }




  return (
    <div>
       <form className='form'>
        <input type="text" placeholder='productname' value={productname} onChange={(e) => setproductname(e.target.value)} /><br /><br />
        <input type="text" placeholder='productdescription' value={productdescription} onChange={(e) => setproductdescription(e.target.value)} /><br /><br />
        <input type="text" placeholder='prodctimage' value={prodctimage} onChange={(e) => setprodctimage(e.target.value)} /><br /><br />
        <input type="text" placeholder='productquantity' value={productquantity} onChange={(e) => setproductquantity(e.target.value)} /><br /><br />
        <input type="text" placeholder='productcategory' value={productcategory} onChange={(e) => setproductcategory(e.target.value)} /><br /><br />
        <input type="text" placeholder='productprice' value={productprice} onChange={(e) => setproductprice(e.target.value)} /><br /><br />
        <button type="button" onClick={()=>{
            if(dataEdit){
                dataUpdate()
            }else{
                dataInsert()
            }
        }}>{dataEdit?'EDIT-ITEM':'ADD-ITEM'}</button> 
      </form>

      <table className="table" border={1}>
      <thead>
      <tr>
       <th scope="col">productname</th>
       <th scope="col">productdescription</th>
       <th scope="col">prodctimage</th>
       <th scope="col">productquantity</th>
       <th scope="col">productcategory</th>
       <th scope="col">productprice</th>
       <th scope="col">id</th>
       <th scope="col">Action</th>
     </tr>
   </thead>
   {
    data.map((val, index)=>{
      return(
      <tbody key={index}>
        <tr>
          <td>{val.productname}</td>
          <td>{val.productdescription}</td>
          <td><img src={val.prodctimage} width={50} height={50} ></img></td>
          <td>{val.productquantity}</td>
          <td>{val.productcategory}</td>
          <td>{val.productprice}</td>
          <td>{val.id}</td>
          <td><button onClick={()=>{dataDelete(val.id)}}>DELETE</button></td>
          <td>
            <button onClick={() => {
              editMode();
              setproductname(val.productname);
              setproductdescription(val.productdescription);
              setprodctimage(val.prodctimage);
              setproductquantity(val.productquantity);
              setproductcategory(val.productcategory);
              setproductprice(val.productprice);
              setid(val.id);
            }}>EDIT</button>
            </td>
            <td><button onClick={() => navig(`/product/${val.id}`)}>VIEW-ITEM</button></td>
          
    </tr>
  </tbody>
    )
  })}
  
</table>
    </div>

  )
}
