import axios from "axios";

const instance = axios.create({
    baseURL: 'http://192.168.18.212/myRide/api/'
})

export default instance;