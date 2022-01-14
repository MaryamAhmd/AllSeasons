import React, { Component } from 'react';
import Card3 from './Card3';
import { Link } from 'react-router-dom';
import pic1 from "../images/apple.jpg";
import pic2 from "../images/cherries.jpg";
import pic3 from "../images/peach.jpg";
import pic4 from "../images/watermelon.jpg";
import pic5 from "../images/grapes.jpg";
import pic6 from "../images/mango.jpeg";

class Fruits extends React.Component {

    state={
        fruits: [
            {id:1,name:'Apples - Per Kg',price:'Rs.420',pic: pic1},
            {id:2,name:'Cherries (Box)',price:'Rs.550',pic: pic2},
            {id:3,name:'Peach - Per Kg',price:'Rs.340',pic: pic3}
        ],
        fruits2: [
            {id:4,name:'Watermelon 4-5 Kg',price:'Rs.230',pic: pic4},
            {id:5,name:'Grapes - Per Kg',price:'Rs.350',pic: pic5},
            {id:6,name:'Mango - Per Kg',price:'Rs.260',pic: pic6}        
        ]
    }
    render() { 
        return (
            <div id='image' style={{height:1000}}>
        <div class="container" style={{display: "flex",flexDirection:'row'}}>
            
            {this.state.fruits.map((f) => (
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
            
            {this.state.fruits2.map((f) => (
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
 
export default Fruits;