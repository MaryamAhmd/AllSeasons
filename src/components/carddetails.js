import pic1 from "../images/4.jpg";
import pic2 from "../images/dryfruits.jpg";
import pic3 from "../images/2.jpg";

const carddetails = [
    {
      id: 1,
      title: "Vegetables",
      link: "Vegetables",
      pic: pic1
    },
    {
      id: 2,
      title: "Dry Fruits",
      link: "DryFruits",
      pic: pic2
    },
    {
        id: 3,
        title: "Fruits",
        link: "Fruits",
        pic: pic3
      },
  ];
  
  export function getDetails(){
      return carddetails;
  }