import Link from "next/link";
import image from "next/image";
import { Box, Flex, Text, Avatar} from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/images/house.jpg"

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}}) => (
    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap="wrap" width="420px" padding="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : defaultImage} />
            </Box>

        </Flex>
    </Link>
);

export default Property;