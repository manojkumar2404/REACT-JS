import { useDispatch, useSelector } from "react-redux";
import { incrementqty, decrementqty, removeitem } from "../redux/slice/cartSlice";

function Cart() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartincrementqty = ()=>{
    dispatch(incrementqty(state))
  }
  const cartdecrementqty = ()=>{
    dispatch(decrementqty(state))
  }
  const cartremoveitem = ()=>{
    dispatch(removeitem(state))
  }

  // Calculate total price
  const cartTotal = cartItem
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      {cartItem.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty!</h4>
          <p>Add some items to your cart to see them here.</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="card mb-3 d-flex flex-row align-items-center p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <div className="ms-3">
                  <h5>{item.title}</h5>
                  <p className="mb-1">Price: ${item.price.toFixed(2)}</p>
                  <p className="mb-1">Quantity: {item.quantity}</p>
                </div>

                <div className="ms-auto d-flex align-items-center">
                  <button
                    className="btn btn-outline-dark btn-sm mx-1"
                    // onClick={() => }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-dark btn-sm mx-1"
                    // onClick={() => }
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-3"
                    // onClick={() => }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Cart Summary</h4>
              <hr />
              <p>
                Total Items: {cartItem.reduce((total, item) => total + item.quantity, 0)}
              </p>
              <h5>Total Price: ${cartTotal.toFixed(2)}</h5>
              <button className="btn btn-dark btn-block mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;





