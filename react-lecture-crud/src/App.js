import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';

export default function App() {

  //life cycle init, mounting, updating, unmounting =webpage close

  const [data, setdata] = useState([]); // all data
  const [category, setcategory] = useState('');
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [price, setprice] = useState('');
  const [id, setid] = useState('');
  const [description, setdescription] = useState('');

  const [datadlt, setdatadlt] = useState(null);  //data delete
  const [dataedt, setdataedt] = useState(false); //data edit

  //data fetch = server -> api call -> usestate -> map ->jsx

  const editmode =()=>{
    setdataedt(true)
  }

  const datafetch = async () => {
    await axios.get(`https://6711045c4eca2acdb5f33939.mockapi.io/products/product`)
    .then((response) => {
      setdata(response.data)
    }).catch((error) => {
      console.log(error)
    });
  }

  //data insert = form -> jsx-> enter data-> usestste -> api -> server

   const datainsert = async () => {
    let data={
      
      //key(usestete) and value(form id)
      category:category,
      name:name,
      image:image,
      price:price,
      description:description
    }
    console.log(category)
    axios.post(`https://6711045c4eca2acdb5f33939.mockapi.io/products/product`,data)
    .then((response) => {
      setcategory("")
      setname("")
      setimage("")
      setprice("")
      setdescription("")
      setid('')
      datafetch()
    }).catch((error) => {
      console.log(error)
    });
  }

  //data delete = 
  const datadelete= async (id)=>{
    // alert("hello")
    setdatadlt(id)
    axios.delete(`https://6711045c4eca2acdb5f33939.mockapi.io/products/product/${id}`)
    .then((response)=>{
      setdatadlt(null)
      datafetch()

    })
    .catch((error)=>console.log(error))
  }
  //data edit
  const dataedit= async ()=>{
    editmode()
    let data1 = {
      category:category,
      name:name,
      image:image,
      price:price,
      description:description
    }
    axios.put(`https://6711045c4eca2acdb5f33939.mockapi.io/products/product/${id}`,data1)
    .then((response) => {
      datafetch();
      setcategory("");
      setname("");
      setimage("");
      setprice("");
      setdescription("");
      setid("");
    }).catch((error) => {
      console.log(error)
    });
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
    enter category  : <input type="text" id="category" onChange={(e)=>setcategory(e.target.value)} value={category}/><br /><br />
    enter name      : <input type="text" id="title" onChange={(e)=>setname(e.target.value)}  value={name}/><br /><br />
    enterz image    : <input type="text" id="image" onChange={(e)=>setimage(e.target.value)} value={image}/><br /><br />
    enter price     : <input type="text" id="price" onChange={(e)=>setprice(e.target.value)} value={price}/><br /><br />
    enter description : <input type="text" id="description" onChange={(e)=>setdescription(e.target.value)} value={description}/><br /><br />
    <button type="submit" defaultValue="postdata" onClick={(e)=>{
        e.preventDefault();
      if(dataedt){
        dataedit()
      }else{
        datainsert()
      }
      setdataedt(false)
    }}>{dataedt ? "edititem":"additem"}</button> 
  </form>
 
  <table className="table" border={2}>
  <thead>
    <tr>
      <th scope="col">category</th>
      <th scope="col">name</th>
      <th scope="col">image</th>
      <th scope="col">price</th>
      <th scope="col">description</th>
      <th scope="col">id</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {data.map((val, index)=>{
    return(
      <tbody key={index}>
    <tr>
      <td>{val.category}</td>
      <td>{val.name}</td>
      <td><img src={val.image} width={50} height={50} ></img></td>
      <td>{val.price}</td>
      <td>{val.description}</td>
      <td>{val.id}</td>
      <td>
        <button onClick={() => { datadelete(val.id) }}>delete</button>
      </td>
      <td>
        <button onClick={() => {
          editmode();
          setid(val.id);
          setdescription(val.description);
          setprice(val.price);
          setimage(val.image);
          setname(val.name);
          setcategory(val.category);
        }}>Edit</button>
      </td>
    </tr>
  </tbody>
    )
  })}
  
</table>
,
  {/* <div>
    <Router>
      <ul>
        <Link to='/cnt'>Contact</Link>
        <Link to= '/home'>  Home</Link>
        <Link to= '/service'>  Service</Link>
      </ul>
      <Routes>
        <Route path='/cnt' element={<Contact></Contact>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
      </Routes>
    </Router>
  </div> */}
</div>


  )
}
