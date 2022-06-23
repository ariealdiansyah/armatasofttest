import axios, { api } from "src/boot/axios";

export default {
  getData(userid) {
    return api.get(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
  }
}
