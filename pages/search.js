import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

const Search = () => {
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
      </Box>  


    )
}
export default Search;