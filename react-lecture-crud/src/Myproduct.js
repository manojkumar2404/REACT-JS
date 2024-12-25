import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebaseApp from './firebase';
import { getAuth, signOut } from 'firebase/auth';

export default function Myproduct() {

  const [data, setData] = useState([]); // all data
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  // const [datadlt, setDatadlt] = useState(null);  //data delete
  const [dataedt, setDataedt] = useState(false); //data edit

  
  const datainsert = async () => {
    let data = {
      category: category,
      name: name,
      image: image,
      price: price,
      description: description
    };

    try {
      await axios.post(`https://675beb0e9ce247eb1937dc4a.mockapi.io/user`, data);
      formdatareset();
      dataFetch();
    } catch (error) {
      console.log('INSERT ERROR', error);
    }
  };

  const formdatareset = () => {
    setCategory('');
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
    setId('');
  };


  const dataFetch = async () => {
    try {
      const response = await axios.get(`https://675beb0e9ce247eb1937dc4a.mockapi.io/user`);
      setData(response.data)
    } catch (error) {
      console.log('FETCH ERROR', error);
    }
  }

  useEffect(() => {
    dataFetch();
  }, []);


  const dataDelete= async (id)=>{
    try {
      await axios.delete(`https://675beb0e9ce247eb1937dc4a.mockapi.io/user/${id}`);
      dataFetch();
    } catch (error) {
      console.log('DELETE ERROR', error);
    }
  };

  const editMode = ()=>{
    setDataedt(true);
  };

  const dataEdit = async () => {
    let updateData = {
      category: category,
      name: name,
      image: image,
      price: price,
      description: description
    };

    try {
      await axios.put(`https://675beb0e9ce247eb1937dc4a.mockapi.io/user/${id}`, updateData);
      formdatareset();
      dataFetch();
      setDataedt(false);
    } catch (error) {
      console.log('EDIT ERROR', error);
    }
  };

  let nav = useNavigate()
  
  const auth = getAuth(firebaseApp);
 
  const logout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
      nav('/login');
    } catch (error) {
      console.error(error);
    }
  };

  
  const datanavigate =(pid)=>{
    nav('/product/pid')
  }


  
  return (
    <div>
      <form className='form'>
        <button type='button' onClick={logout}>Logout</button><br /><br />
        enter category    : <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /><br /><br />
        enter name        : <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        enter image       : <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /><br /><br />
        enter price       : <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
        enter description : <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
        <button type="button" onClick={()=>{
          if(dataedt){
            dataEdit();
          }else{
            datainsert();
          }
        }}>{dataedt ? 'Edit-item':'Add-item'}</button> 
      </form>

    <table className="table" border={1}>
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
   {
    data.map((val, index)=>{
      return(
      <tbody key={index}>
        <tr>
          <td>{val.category}</td>
          <td>{val.name}</td>
          <td><img src={val.image} width={50} height={50} ></img></td>
          <td>{val.price}</td>
          <td>{val.description}</td>
          <td>{val.id}</td>
          <td> <button onClick={() => { dataDelete(val.id) }}>DELETE</button></td>
          <td>
            <button onClick={() => {
              editMode();
              setCategory(val.category);
              setName(val.name);
              setImage(val.image);
              setPrice(val.price);
              setDescription(val.description);
              setId(val.id);
            }}>EDIT</button></td>
            <td><button onClick={() => nav(`/product/${val.id}`)}>VIEW PRODUCT</button></td>
        
    </tr>
  </tbody>
    )
  })}
  
</table>

    </div>
  );
}

