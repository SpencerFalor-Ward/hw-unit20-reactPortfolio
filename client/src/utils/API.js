import axios from "axios";

export default {
  saveMessage: function(messageData) {
    return axios.post("/api/messages", messageData);
  }
};