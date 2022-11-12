import axios from "axios";

export const baseUrl = "http://localhost:9292"

  export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            "Content-Type": "application/json",
          }

    })
    return data;
  }
