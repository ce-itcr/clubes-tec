import axios from "axios";
import { apiUrl } from "../assets/utils/constants";

export class Suggestions {
  
  async getAllSuggestions() {
    const requestUrl = apiUrl + "/tabs/suggestions";
    const response = await axios.get(requestUrl);
    return response;
  }
  async createSuggestions(){
    
  }

}
