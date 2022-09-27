import axios from "axios";
import { apiUrl } from "../assets/utils/constants";

export class Suggestions {
  
  async getAllSuggestions() {
    const requestUrl = apiUrl + "api/suggestion/get";
    const response = await axios.get(requestUrl);
    return response;
  }

  async updateSuggestions(name,category,suggester){
    const requestUrl = apiUrl + "api/suggestion/update";
    const response = await axios.post(requestUrl,{
      name: name,
      category:category,
      suggester:suggester
      });
    console.log(response)
    return response;
  }

  async createSuggestions(name,category,suggester){
    const requestUrl = apiUrl + "api/suggestion/add";
    const response = await axios.post(requestUrl,{
      name: name,
      category:category,
      suggester:suggester
      });
    console.log(response)
    return response;
  }
  async getCategorySuggestions() {
    const requestUrl = apiUrl + "api/suggestion/stats";
    const response = await axios.get(requestUrl);
    return response;
  }

  async getTOPAdminSuggesters() {
    const requestUrl = apiUrl + "api/admin/top/suggesters";
    const response = await axios.get(requestUrl);
    return response;
  }

  async getTop5andBottom3Categories() {
    const requestUrl = apiUrl + "api/admin/sorted/categories";
    const response = await axios.get(requestUrl);
    return response;
  }

}
