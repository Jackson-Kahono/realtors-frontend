import { useState } from "react";
import { Flex, Select, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
    const [filters] = useState(filterData);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
              query[item.name] = item.value
            }
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