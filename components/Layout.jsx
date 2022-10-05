import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Children } from "react";


const Layout = ({ children }) => (
    <>
    <Head>
        <title>Real Estate </title>
    </Head>
    <Box maxWidth="1280px" margin="auto">
        <header>
           Navbar 
        </header>
        <main>
            {children}
        </main>

    </Box>
    </>
)