import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import '../pages/Singleproduct.css';
export default function SingleProduct() {

    let {id} = useParams();
    // console.log(id)
 const [x, setx] = useState([]);
    
 const singledatafetch = async ()=>{
  try {
    const response = await axios.get(`https://677f586f0476123f76a60be7.mockapi.io/product/${id}`);
     setx(response.data);
 } catch (error) {
     console.log(error);
 }
 }

useEffect(()=>{
  singledatafetch()
},[id])

  return (

    <div className="card-body">
      <div className="product-card">
  <img src={x.image} alt={x.name} className="product-img" />
  <div className="product-info">
    <h2 className="product-title">{x.title}</h2>
    <p className="product-category">{x.category}</p>
    <p className="product-description">{x.description}</p>
    <p className="product-price">${x.price}</p>
    <div className="button-group">
      <Link
        to={"/wish/"}
        className="btn btn-dark"
        onClick={() => toast.success("Added to Wishlist")}
      >
        Wish-Product
      </Link>
      <Link
        to={"/cart/"}
        className="btn btn-dark"
        onClick={() => toast.success("Added to Cart")}
      >
        Add to Cart
      </Link>
    </div>
  </div>
</div>

          {/* <img src={x.image} alt={x.name} style={{ width: '200px' }} />
          <p>{x.title}</p>
          <p>{x.category}</p>
          <p>{x.description}</p>
          <p>{x.price}</p>
                  <Link
                    to={"/wish/"}
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to Wishlist");
                      
                    }}
                  >
                    Wish-Product
                  </Link>

                  <Link
                    to={"/cart/"}
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      
                    }}
                  >
                    Add to Cart
                  </Link> */}

                </div>

  

  
  )
}
