import { useEffect, useState } from "react";
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            query[item.name] = item.value
        })
        router.push({ pathname: path, query: query })
    }

return (
    <Flex background="gray.200" padding="4" justifyContent="center" flexWrap="wrap">
        {filters.map((filter) => (
            <Box key={filter.queryName}>
                <Select 
                placeholder={filter.placeholder}
                width="fit-content"
                padding="2"
                onChange={(event) => searchProperties({[ filter.queryName ] : event.target.value})}>
                    {filter?.items?.map((item) => (
                        <option value={item.value} key={item.value}>{item.name}</option>
                    )

                    )}

                </Select>

            </Box>
        )
        )}

    </Flex>
)
}
export default SearchFilters;