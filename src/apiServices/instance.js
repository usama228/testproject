import axios from "axios";
import { baseURL } from "./baseUrl";
export const instance = () =>
    axios.create({
        baseURL,
    });