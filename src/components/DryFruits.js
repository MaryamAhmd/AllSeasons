import React, { Component } from 'react';
import Card3 from './Card3';
import pic1 from "../images/cashew.jpg";
import pic2 from "../images/walnuts.jpg";
import pic3 from "../images/almonds.jpg";
import pic4 from "../images/kishmish.png";

class DryFruits extends React.Component {

    state={
        dryfruits: [
            {id:1,name:'Cashew Nuts - Half Kg',price:'Rs.1100',pic: pic1},
            {id:2,name:'Walnuts - Half Kg',price:'Rs.450',pic: pic2},
            {id:3,name:'Almonds - Half Kg',price:'Rs.1250',pic: pic3}
        ],
        dryfruits2: [
            {id:4,name:'Kishmish - Half Kg',price:'Rs.600',pic: pic4}      
        ]
    }
    render() { 
        return (
            <div id='image' style={{height:1000}}>
        <div class="container" style={{display: "flex",flexDirection:'row'}}>
            
            {this.state.dryfruits.map((f) => (
            <div className = 'row'>
            <div className = 'col-4 ms-5'>
                <Card3 
                name = {f.name}
                price = {f.price}
                pic = {f.pic}
                buttonText ="ADD TO CART"
                />
            </div>
            </div>
            ))}
           
        </div>
        <div class="container" style={{display: "flex",flexDirection:'row'}}>
            
            {this.state.dryfruits2.map((f) => (
            <div className = 'row'>
            <div className = 'col-4 ms-5'>
                <Card3 
                name = {f.name}
                price = {f.price}
                pic = {f.pic}
                buttonText ="ADD TO CART"
                />
            </div>
            </div>
            ))}
           
        </div>
        </div>
            
    );
    }
}
 
export default DryFruits;