import axios from "axios";

export const baseUrl = "https://sheltered-brook-92533.herokuapp.com"

  export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            "Content-Type": "application/json",
          }

    })
    return data;
  }
