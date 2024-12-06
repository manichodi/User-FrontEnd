import axios from "axios";

const GET_ALL_USERS = "http://localhost:8080/getuser";


export const Userlist = () => 
     axios.get(GET_ALL_USERS);
