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
  Button,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout, FcLeave } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiAward, FiEdit, FiKey } from "react-icons/fi";
import { useEffect} from "react";

const Navbar = () => {
  let agent = false;
  useEffect(() => {
    if (localStorage.getItem("agent")) {
      agent = true;
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
            <Link href="/search?purpose=sale" passHref>
              <MenuItem icon={<FcAbout />}>Buy a Property</MenuItem>
            </Link>
            <Link href="/search?purpose=rent" passHref>
              <MenuItem icon={<FiKey />}>Rent a Property</MenuItem>
            </Link>
            {true==true? (
              <Link href="/add" passHref>
                <MenuItem icon={<FiEdit />}>Add a Property</MenuItem>
              </Link>
            ): null}
            <Link href="/myproperties" passHref>
              <MenuItem icon={<FiAward />}>My Properties</MenuItem>
            </Link>
            <Link href="/login" passHref>
              <MenuItem onClick={()=>{
                localStorage.removeItem("agent");
                localStorage.removeItem("token");
              }} icon={<FcLeave/>}>Logout</MenuItem>
            </Link>

          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
