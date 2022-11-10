import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiAward, FiEdit, FiKey } from "react-icons/fi";
import { useEffect, useRef } from "react";

const Navbar = () => {
  let admin = false;
  useRef(() => {
    if (localStorage.getItem("admin")) {
      admin = true;
    }
  }, []);
  return (
    <Flex padding="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.800" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          MWANIKI REALTORS AGENCY
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="purple.400"
          />
          <MenuList>
            <Link href="/" passHref>
              <MenuItem icon={<FcHome />}>Home</MenuItem>
            </Link>
            <Link href="/search" passHref>
              <MenuItem icon={<BsSearch />}>Search</MenuItem>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy a Property</MenuItem>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <MenuItem icon={<FiKey />}>Rent a Property</MenuItem>
            </Link>
            {admin && (
              <Link href="/add" passHref>
                <MenuItem icon={<FiEdit />}>Add a Property</MenuItem>
              </Link>
            )}
            <Link href="/myproperties" passHref>
              <MenuItem icon={<FiAward />}>My Properties</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
