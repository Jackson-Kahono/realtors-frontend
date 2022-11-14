import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property"
import noresult from "../assets/images/no-results.png"
import { fetchApi, baseUrl } from "../utils/fetchAPI";


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
        {properties.length === 0 && (
            <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                <Image alt="no result" src={noresult} />
                <Text fontSize="2xl" marginTop="3">No results found</Text>
            </Flex>
        )}
      </Box>
    )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || "rent";
    const rentFrequency = query.rentFrequency || "yearly";
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/search?&purpose=${purpose}&baths=${bathsMin}&rent_frequency=${rentFrequency}&price_min=${minPrice}&price_max=${maxPrice}&rooms_min=${roomsMin}&sort=${sort}&area=${areaMax}`);

    return {
      props: {
        properties: data,
      },
    };
  }
  export default Search;

  //next.js has two forms of pre-rendering: static generation and Server side rendering.
  //next.js functions for pre-rendering;
  //getServerSideProps- fetches data on each request
  //getStaticProps- fetches data at build time
  //getStaticPaths-  specifies dynamic routes to pre-render pages based on data
