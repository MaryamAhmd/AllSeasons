import { Link } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../Service/api";
const Card4 = (props) =>{
  
  const [ quantity, setQuantity] = useState(0)
  // const [item, setItem] = useState("")

const incQuantity = () => {
  setQuantity(quantity + 1);
}

const decQuantity = () => {
  setQuantity(quantity - 1); 
}

// const checkAvailability = () => {
//   const { quantity } = setQuantity;
//   return quantity === 0 ? "Out of stock" : quantity;
// }

// const addItem = async() => {
//   setItem(props.match.params.name);
// }

// const addDetails = async (e) => {
//   e.preventDefault();
//   await addToCart(quantity);
// }

    return(
        <div id="image" style={{height:586}}>
        <div className="card mb-3 ms-5 bg-light position-absolute start-50 top-50 translate-middle" style={{width: 500,height:260,borderRadius:20}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.match.params.name}</h5>
        <p className="card-text text-danger fs-5 fw-bold">{props.match.params.price}</p>
        <p className="card-text">Quantity:</p>
        <button onClick={incQuantity} id="button" class="btn text-white">+</button>
        <button
                style={{ marginLeft: "10px" }}
                className="btn btn-outline-none"
              >
                {quantity}
              </button>
        <button onClick={decQuantity} id="button" class="btn text-white text-center ms-3">-</button>
        <br></br>
        {/* <input type="number" className="form-control" id="input1" placeholder="enter quantity"/> */}
        {/* <div class="number-input md-number-input">
  <button onClick={decQuantity} class="minus"></button>
  <input class="quantity" min="0" name="quantity" value="1" type="number"/>
  <button onClick={incQuantity} class="plus"></button>
</div> */}
       <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to ={`/Cart/${props.match.params.name}/${props.match.params.price}`}><button id="button" class="btn text-white text-center mt-4">ADD TO CART</button></Link>
       <div>
       {/* <button id="button" class="btn text-white text-center mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD TO CART</button> */}
        {/* <button id="button" class="btn text-white text-center mt-4 ms-4">BUY NOW</button> */}
        </div>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Item sucessfully added to cart!</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/Cart"> <button type="button" id="button" className="btn text-white text-center" data-bs-dismiss="modal">View Cart</button></Link>
                              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/"> <button type="button" id="button" className="btn text-white text-center">Buy More</button></Link>
                            </div>
                          </div>
                        </div>
                        </div>
</div>
    );
}

export default Card4;