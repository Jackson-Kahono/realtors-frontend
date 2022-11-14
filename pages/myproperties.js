import { fetchApi, baseUrl } from "../utils/fetchAPI";
import Property from "../components/Property";
import { Flex } from "@chakra-ui/react";
import { useEffect,useState } from "react";

const Mine = () => {
      const [properties, setProperties] = useState([])
      let id = ""
      useEffect(() => {
            id = localStorage.getItem("token")
            if (!id) {
                  window.location.href = "/login"
            }
      }, [])
      useEffect(() => {
            fetch(`${baseUrl}/properties/agent/${id}`)
                  .then(res => res.json())
                  .then(data => {
                        setProperties(data)
                  })
      }, [])


      return (
            <Flex flexWrap="wrap">
                  {properties.map((property) => <Property property={property} key={property.id} />)}
            </Flex>
      )
}

export default Mine;
