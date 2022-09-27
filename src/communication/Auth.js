import axios from "axios";
import { apiUrl } from "../assets/utils/constants";

export class Auth {
  async verifyUserPost(user1, password1) {
    const requestUrl = apiUrl + "api/user/login";
    const response = await axios.post(requestUrl, {
      user: user1,
      password: password1,
    });
    return response;
  }

  async createUser(fullName1, user1, password1, section1, userType1) {
    const requestUrl = apiUrl + "api/user/signup";
    const response = await axios.post(requestUrl, {
      fullname: fullName1,
      user: user1,
      password: password1,
      section: section1,
      userType: userType1,
    });
    return response;
  }

  async findSuggestionsUser(user) {
    const requestUrl = apiUrl + "api/student/suggestions";
    const response = await axios.post(requestUrl, {
      user: user,
    });
    return response;
  }
}
