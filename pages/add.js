import { Flex, FormControl, FormLabel, FormHelperText, Input, Button, Box, Alert, AlertIcon, Select,Badge } from "@chakra-ui/react"
import { useState } from "react"

const Add = () => {
      const [property, setProperty] = useState({})
      const [success, setSuccess] = useState(false)

      // {
      //       "cover_photo": "img.com",
      //       "price": 4635,
      //       "rent_frequency": 3,
      //       "rooms": 5,
      //       "name": "my property",
      //       "baths": 3,
      //       "area": "Rongai",
      //       "is_verified": true,
      //       "external_id": 34,
      //       "description": null,
      //       "typen": null,
      //       "purpose": null,
      //       "furnishing_status": null,
      //       "amenities": null,
      //       "photos": null,
      //       "agency_id": null,
      //       "client_id": null,
      //       "created_at": "2022-11-12T13:43:25.318Z",
      //       "updated_at": "2022-11-12T13:43:25.318Z",
      //       "agencies_id": null,
      //       "clients_id": null
      // }

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(property)
            const new_property = {
                  "cover_photo":e.target.cover_photo.value,
                  "price":e.target.price.value,
                  "rent_frequency":e.target.freq.value,
                  "rooms":e.target.rooms.value,
                  "title":e.target.title.value,
                  "baths":e.target.baths.value,
                  "area":e.target.area.value,
                  "description":e.target.desc.value,
                  "typen":e.target.type.value,
                  "purpose":e.target.purpose.value,
                  "furnishing_status":e.target.status.value,
                  "amenities":e.target.amenities.value,
                  "photos":e.target.photos.value
            }
            fetch("http://localhost:9292/properties", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(new_property)

            })
                  .then(res => {
                        //scroll to top
                        window.scrollTo(0, 0)
                        setSuccess(true)
                        return res.json()
                  })
            .then((data) => {
                  window.location.assign(`/property/${data.id}`)
            })
      }


      return (
            <form onSubmit={handleSubmit}>
                  {
                        success && (<Alert status="success">
                        <AlertIcon />
                        Property Added Successfully
                  </Alert>
                 ) }
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
                                    <Input type="text" name="cover_photo" />
                                    <FormHelperText>cover photo url(text)</FormHelperText>
                                    <br />
                                    <FormLabel>price</FormLabel>
                                    <Input type="text" name="price" />
                                    <FormHelperText>price</FormHelperText>
                                    <br />
                                    <FormLabel>rent frequency</FormLabel>
                                    <Input type="text" name="freq"/>
                                    <FormHelperText>How often rent is to be paid e.g month, year, week</FormHelperText>
                                    <br />
                                    <FormLabel>rooms</FormLabel>
                                    <Input type="text" name="rooms" />
                                    <FormHelperText>Nmber of rooms</FormHelperText>
                                    <br />
                                    <FormLabel>title</FormLabel>
                                    <Input type="text" name="title" />
                                    <FormHelperText>title of the property</FormHelperText>
                                    <br />
                                    <FormLabel>baths</FormLabel>
                                    <Input type="text" name="baths" />
                                    <FormHelperText>Howmany baths are in the property</FormHelperText>
                                    <br />
                                    <FormLabel>area</FormLabel>
                                    <Input type="text" name="area" />
                                    <FormHelperText>area</FormHelperText>
                                    <br />
                                    <FormLabel>description</FormLabel>
                                    <Input type="textarea" name="desc" />
                                    <FormHelperText>A brief description of your property</FormHelperText>
                                    <br />
                                    <FormLabel>type</FormLabel>
                                    <Select placeholder="Select option" name="type">
                                          <option value="single">Single</option>
                                          <option value="bedsitter">Bedsitter</option>
                                          <option value="1 bedroom">1 Bedroom</option>
                                          <option value="2 bedroom">2 Bedroom</option>
                                          <option value="3 bedroom">3 Bedroom</option>
                                    </Select>
                                    <br/>
                                    <FormLabel>purpose</FormLabel>
                                    <Select placeholder="select option" name="purpose" >
                                          <option value="rent">rent</option>
                                          <option value="sale">sale</option>
                                    </Select>
                                    <br />
                                    <FormLabel>furnishing status</FormLabel>
                                    <Select placeholder="Select option" name="status">
                                          <option value="furnished">Furnished</option>
                                          <option value="semi-furnished">Semi-Furnished</option>
                                          <option value="unfurnished">Unfurnished</option>
                                    </Select>
                                    <br />
                                    <FormLabel>amenities</FormLabel>
                                    <Input type="text" name="amenities" onChange={(e) => setProperty({ ...property, amenities: e.target.value })} />
                                    <FormHelperText>Availble amenities(comma separated)</FormHelperText>
                                    <br />
                                    {property.amenities && property.amenities.split(",").map((amenity, index) => (
                                          <Badge key={index} colorScheme="grey" m={1}>{amenity}</Badge>
                                    ))}
                                    <br />
                                    <FormLabel>photos</FormLabel>
                                    <Input type="text" name="photos" />
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
