import { Flex, FormControl, FormLabel, FormHelperText, Input, Button, Box } from "@chakra-ui/react"
import { useState } from "react"

const Add = () => {
      const [property, setProperty] = useState({})

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(property)
            fetch("http://localhost:3000/api/properties", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                        },
                  body: JSON.stringify(property)
            })
            .then((res) => res.json())
            .then((data) => {
                  window.location.assign(`/property/${data._id}`)
            })
      }


      return (
            <form onSubmit={handleSubmit}>
                  <Flex padding={"5"} display={"flex"} justifyContent={"center"} >
                        {/* ## Property

                  - coverPhoto
                  - price
                  - rentFrequency
                  - rooms
                  - title
                  - baths
                  - area
                  - agency
                  - isVerified
                  - externalID
                  - description
                  - type
                  - purpose
                  - furnishingStatus
                  - amenities
                  - photos */}
                  <Box w={"500px"} mt={"100px"} p={"5"} border={"1px solid #e2e8f0"} borderRadius={"md"}>
                        <FormControl>
                              <FormLabel>coverPhoto</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, coverPhoto: e.target.value })} />
                              <FormHelperText>cover photo url(text)</FormHelperText>
                              <br />
                              <FormLabel>price</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, price: e.target.value })} />
                              <FormHelperText>price</FormHelperText>
                              <br />
                              <FormLabel>rentFrequency</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, rentFrequency: e.target.value })} />
                              <FormHelperText>How often rent is to be paid e.g month, year, week</FormHelperText>
                              <br />
                              <FormLabel>rooms</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, rooms: e.target.value })} />
                              <FormHelperText>Nmber of rooms</FormHelperText>
                              <br />
                              <FormLabel>title</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, title: e.target.value })} />
                              <FormHelperText>title of the property</FormHelperText>
                              <br />
                              <FormLabel>baths</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, baths: e.target.value })} />
                              <FormHelperText>Howmany baths are in the property</FormHelperText>
                              <br />
                              <FormLabel>area</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, area: e.target.value })} />
                              <FormHelperText>area</FormHelperText>
                              <br />
                              <FormLabel>agency</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, agency: e.target.value })} />
                              <FormHelperText>agency</FormHelperText>
                              <br />
                              <FormLabel>isVerified</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, isVerified: e.target.value })} />
                              <FormHelperText>isVerified</FormHelperText>
                              <br />
                              <FormLabel>description</FormLabel>
                              <Input type="textarea" onChange={(e) => setProperty({ ...property, description: e.target.value })} />
                              <FormHelperText>A brief description of your property</FormHelperText>
                              <br />
                              <FormLabel>type</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, type: e.target.value })} />
                              <FormHelperText>e.g bed sitter, 1 bed room</FormHelperText>
                              <br />
                              <FormLabel>purpose</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, purpose: e.target.value })} />
                              <FormHelperText>purpose</FormHelperText>
                              <br />
                              <FormLabel>furnishingStatus</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, furnishingStatus: e.target.value })} />
                              <FormHelperText>furnishing status</FormHelperText>
                              <br />
                              <FormLabel>amenities</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, amenities: e.target.value })} />
                              <FormHelperText>Availble amenities(comma separated)</FormHelperText>
                              <br />
                              <FormLabel>photos</FormLabel>
                              <Input type="text" onChange={(e) => setProperty({ ...property, photos: e.target.value })} />
                              <FormHelperText>Comma separated links for images</FormHelperText>
                              <br />
                              <Button type="submit" background={"blue"} color={"white"}>Submit</Button>
                        </FormControl>
                        </Box>
                  </Flex>
            </form>
      )
}
export default Add
