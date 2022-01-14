import React, { Component } from 'react';
import pic from '../images/2.jpg'
import { getDetails } from './carddetails';
import { Link } from 'react-router-dom';
class Card2 extends React.Component {

    state = {
        card: getDetails(),
      };

    render() { 
        return(
        <div class="container" style={{display: "flex",flexDirection:'row'}}>
            {this.state.card.map((c) => (
           <Link style={{ color: 'inherit', textDecoration: 'inherit',marginLeft:50,marginRight:60}} to = {`/${c.link}`}> <div className="card mt-5 ms-5 w-100" style={{width:100}}>
  <img src={c.pic} style={{height:150}} className="card-img-top" alt="..."/>
  <div className="card-body">
  <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = {`/${c.link}`}>
    <h5 className="card-title text-black">{c.title}</h5>
    </Link>
  </div>
</div></Link>
))}

        </div>
        );
    }
}
 
export default Card2;