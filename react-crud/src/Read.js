import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([]);

    function getData(){
        axios.get('https://674d47ad54e1fca9290eee95.mockapi.io/crud')
        .then((res)=>{
            console.log(res)
            setData(res.data)
        }) 
    }

    function handleDelete(id){
      axios.delete(`https://674d47ad54e1fca9290eee95.mockapi.io/crud/${id}`).then(()=>{
        getData()
      })
    }



    useEffect(() => {
        getData()
    }, []);

  return (
    <div>
  <h2>Read Operation</h2>
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col"></th> 
        <th scope="col"></th> 
      </tr>
    </thead>
    
    {
        data.map((eachData)=>{
            return(
        
        <tbody key={eachData.id}>
        <tr>
            <th scope="row">{eachData.id}</th>
            <td>{eachData.name}</td>
            <td>{eachData.email}</td>

            <td><Link to={`/update/${eachData.id}`}><button type="button" className="btn btn-success">Edit</button></Link></td>

            <td><button type="button" className="btn btn-danger" onClick={()=> handleDelete(eachData.id)}>Delete</button></td>
        </tr>
        </tbody>
    
            )
        })
        
    }
   
  </table>
</div>

  );
}

export default Read;
