import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Property from "../components/Property"
import { baseUrl, fetchApi } from "../utils/fetchAPI";
import { useEffect } from "react";
import { useRouter } from "next/router";


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" margin="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box padding="5">
      <Text color="gray.500" fontSize="small" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="large" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
)

function Home({ propertiesForSale, propertiesForRent }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login")
    }
  }, [])

  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap'>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy and Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap='wrap'>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/props/get?purpose=rent`);
  const propertyForRent = await fetchApi(`${baseUrl}/props/get?purpose=sale`);
  if(!propertyForSale || !propertyForRent) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      propertiesForSale: propertyForSale,
      propertiesForRent: propertyForRent,
    },
  };
}

export default Home;

///next.js has two forms of pre-rendering: static generation and Server side rendering.
  //next.js functions for pre-rendering;
  //getServerSideProps- fetches data on each request
  //getStaticProps- fetches data at build time
  //getStaticPaths-  specifies dynamic routes to pre-render pages based on data
