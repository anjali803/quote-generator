import axios from "axios";

const api = axios.create({
  baseURL: "https://api.quotable.io/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const getQuote = () => api.get("random");
export const getQuoteWithTag = (tag) => api.get(`random?limit=1,tags=${tag}`);
export const getTags = () => api.get("tags");
