import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const { id: paramId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (paramId) {
      axios.get(`https://674d47ad54e1fca9290eee95.mockapi.io/crud/${paramId}`)
    
        .then((res) => {
          setId(res.data.id);
          setName(res.data.name);
          setEmail(res.data.email);
        })
        .catch((err) => console.log(err));
    }
  }, [paramId]);

  const handleUpdate = (e) => {
    e.preventDefault(); 
    axios
      .put(`https://674d47ad54e1fca9290eee95.mockapi.io/crud/${id}`, {
        name,
        email,
      })
      .then(() => {
        navigate("/read"); 
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>

        <button className="btn btn-secondary mx-2" onClick={(e) => { e.preventDefault(); navigate("/read"); }}>Back</button>
      </form>
    </>
  );
};

export default Update;
