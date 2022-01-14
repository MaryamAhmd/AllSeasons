const Cart = (props) => {
    return( 
    <div id="image" style={{height:586}}>
        <h3 style={{textAlign:"center",position:'absolute',marginTop:10}}>Shopping Cart</h3>
        <table className="table table-light table-striped table-bordered position-absolute mt-5">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">Product</th>
  <th scope="col">Quantity</th>
  <th scope="col">Price</th>
</tr>
</thead>
<tbody>
<tr>
  <th scope="row">1</th>
  <td>{props.match.params.name}</td>
  <td></td>
  <td>{props.match.params.price}</td>
</tr>
</tbody>
</table>
    </div>
    );
};


export default Cart;