import axios from 'axios';

const url = "http://localhost:5000";

export const addUser = async (customerData) => {
     return await axios.post(`${url}/Customers`, customerData);
}

export const addToCart = async (cartData) => {
    return await axios.post(`${url}/Cart`, cartData);
}

// export const getApplicant = async () => {
//      return await axios.get(`${url}/viewApplicants`);
//  }

//  export const deleteApplicant = async (applicantData) => {
//      return await axios.delete(`${url}/deleteApplication`, {data: applicantData});
//  }

//  export const updateApplicant = async (applicantData) => {
//     return await axios.put(`${url}/updateApplication`, applicantData);
// }