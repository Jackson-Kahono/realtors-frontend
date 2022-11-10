import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

  export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '1093047bc9msh1375ae17a2a753cp165fdejsnd28fe78f4e18',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
          }

    })
    return data;
  }
