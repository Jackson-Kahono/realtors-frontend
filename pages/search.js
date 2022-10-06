import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property"
import noresult from "../assets/images/no-results.png"

const Search = ({properties}) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
      <Box>
        <Flex
        cursor="pointer"
        bg="gray.200"
        borderBottom="2px"
        borderColor="gray.400"
        padding="2"
        fontWeight="black"
        fontSize="large"
        justifyContent="center"
        alignItems="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
            <Text>Search properties by filter</Text>
            <Icon paddingLeft="2" width="7" as={BsFilter} />
        </Flex>
        {searchFilters && <SearchFilters />}
        <Text fontSize="2xl" padding="4" fontWeight="bold">
            Properties {router.query.purpose}
        </Text>
        <Flex flexWrap="wrap">
            {properties.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
        {[].length === 0 && (
            <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                <Image alt="no result" src={noresult} />
                <Text fontSize="2xl" marginTop="3">No results found</Text>
            </Flex>
        )}
      </Box>  
    )
}

export default Search;

export async function getStaticProps() {
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  
    return {
      props: {
        propertiesForSale: propertyForSale?.hits,
      },
    };
  }