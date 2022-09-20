import axios from "axios";
import { apiUrl } from "../assets/utils/constants";

export class Auth {
    async verifyUser(username, password){
        const requestUrl = apiUrl + '/users/search?username=' + username + '&password=' + password;
        const response = await axios.get(requestUrl);
        return response;
    }

}