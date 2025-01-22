import { useDispatch, useSelector } from "react-redux";
import { incrementqtywish, decrementqtywish, removeitemwish } from "../redux/slice/wishSlice";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishitem } = useSelector((state) => state.wish); // Access wishlist from Redux state
  const dispatch = useDispatch();

  // Increment item quantity in wishlist
  const wishIncrementQty = (item) => {
    dispatch(incrementqtywish(item));
  };

  // Decrement item quantity in wishlist
  const wishDecrementQty = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementqtywish(item));
    }
  };

  // Remove item from wishlist
  const wishRemoveItem = (item) => {
    dispatch(removeitemwish(item));
  };

  // Render wishlist items
  return (
    <div className="container my-3 py-3">
      <h2 className="display-5 text-center">My Wishlist</h2>
      <hr />

      {wishitem.length === 0 ? (
        <div className="text-center">
          <h5>Your Wishlist is Empty</h5>
          <Link to="/" className="btn btn-dark mt-3">
            Go to Products
          </Link>
        </div>
      ) : (
        <div className="row">
          {wishitem.map((item, index) => (
            <div key={`${item.id}-${index}`} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={item.image}
                  alt={item.title}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Quantity: {item.quantity || 1}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-secondary btn-sm"
                    // onClick={() => }
                  >
                    -
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    // onClick={() => }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    // onClick={() => }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;


















// import { useDispatch, useSelector } from "react-redux"
// import { incrementqtywish, decrementqtywish, removeitemwish } from "../redux/slice/wishSlice"
// function Wishlist() {

//   const {wishitem} = useSelector((state) => state.cart)

//   const dispatch = useDispatch();

//   const wishincrementqty = ()=>{
//     dispatch(incrementqtywish(state))
//   }
//   const wishdecrementqty = ()=>{
//     dispatch(decrementqtywish(state))
//   }
//   const wishremoveitem = ()=>{
//     dispatch(removeitemwish(state))
//   }

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Wishlist



