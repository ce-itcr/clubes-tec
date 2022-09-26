import axios from "axios";
import { apiUrl } from "../assets/utils/constants";

export class Auth {
  async verifyUser(user, password) {
    const requestUrl =
      apiUrl + "api/user/login/?user=" + user + "&password=" + password;
    const response = await axios.get(requestUrl);
    return response;
  }

  async verifyUserPost(user, password) {
    const requestUrl = apiUrl + "api/user/login";
    const headers = { "Content-Type": "application/json" };
    const response = await axios
      .post(requestUrl, {
        user: user,
        password: password,
      }, headers)
      .catch((error) => {
        return error.response;
      });
    return response;
  }

  async singUp(fullName, user, password, section, userType) {
    const requestUrl =
      apiUrl +
      "api/user/signup/?fullName=" +
      fullName +
      "&user=" +
      user +
      "&password=" +
      password +
      "&section=" +
      section +
      "&userType=" +
      userType;
    const response = await axios.get(requestUrl);
    return response;
  }

  async findUser(user) {
    const requestUrl = apiUrl + "api/student/info/?user=" + user;
    const response = await axios.get(requestUrl);
    return response;
  }

  async getUserSuggestion(user) {
    const requestUrl = apiUrl + "api/student/suggestions/?user=" + user;
    const response = await axios.get(requestUrl);
    return response;
  }
}
