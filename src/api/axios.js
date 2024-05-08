import axios from "axios"
import data from "./user.js"
// export const api = axios.create({
//     baseURL : "http://localhost:5000/"
// })
axios.defaults.baseURL = "http://localhost:3000"
export const getAllUsers = async () => {
    return data
}