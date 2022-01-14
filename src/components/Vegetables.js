import React, { Component } from 'react';
import Card3 from './Card3';
import pic1 from "../images/brocolli.jpg";
import pic2 from "../images/potatoes.jpg";
import pic3 from "../images/cucumber.png";
import pic4 from "../images/onions.jpg";
import pic5 from "../images/spinach.jpg";
import pic6 from "../images/peas.jpg";
import pic7 from "../images/beetroot.jpg";

class Vegetables extends React.Component {

    state={
        vegetables: [
            {id:1,name:'Broccoli - Half Kg',price:'Rs.250',pic: pic1},
            {id:2,name:'Potatoes - Per Kg',price:'Rs.70',pic: pic2},
            {id:3,name:'Cucumber - Per Kg',price:'Rs.80',pic: pic3}
        ],
        vegetables2: [
            {id:4,name:'Onions - Per Kg',price:'Rs.49',pic: pic4},
            {id:5,name:'Spinach - Per Kg',price:'Rs.80',pic: pic5},
            {id:6,name:'Peas - Per Half Kg',price:'Rs.240',pic: pic6}        
        ],
        vegetables3: [
            {id:7,name:'Beetroot - Per Kg',price:'Rs.90',pic: pic7}
        ]
    }
    render() { 
        return (
            <div id='image' style={{height:1000}}>
        <div class="container" style={{display: "flex",flexDirection:'row'}}>
            
            {this.state.vegetables.map((v) => (
            <div className = 'row'>
            <div className = 'col-4 ms-5'>
                <Card3 
                name = {v.name}
                price = {v.price}
                pic = {v.pic}
                buttonText ="ADD TO CART"
                />
            </div>
            </div>
            ))}
           
        </div>
        <div class="container" style={{display: "flex",flexDirection:'row'}}>
            
            {this.state.vegetables2.map((v) => (
            <div className = 'row'>
            <div className = 'col-4 ms-5'>
                <Card3 
                name = {v.name}
                price = {v.price}
                pic = {v.pic}
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
 
export default Vegetables;