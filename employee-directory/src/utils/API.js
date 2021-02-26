import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=us,dk,fr,gb"; 


export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
