import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeroGrid from "../components/heroGrid";

import theme from "../styles/theme";
import { Box, Button, Stack, Heading, Text } from "@chakra-ui/react";
import BaseContainer from "../components/BaseContainer";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <BaseContainer>
        <HeroGrid />
      </BaseContainer>
      <Box
        id="whoami"
        bg={theme.colors.lightBeige}
        pt="18rem"
        pb="4rem"
        mt={-232}
      >
        <BaseContainer>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </BaseContainer>
      </Box>
      <Box id="work" py="10rem">
        <BaseContainer>
          <Stack direction={["column", "row"]} spacing="3rem">
            <Stack
              direction="column"
              spacing="2rem"
              align="flex-start"
              flex="1"
            >
              <Heading as="h4" size="md">
                My Work
              </Heading>
              <Text fontSize="sm">
                In 10 years, I've worked in a lot of design disciplines, as
                Graphic, Editorial and Product Design. Here is some examples of
                this experience.
              </Text>
              <Button colorScheme="blue">Let's talk</Button>
            </Stack>
            <Box flex="4" bg="tomato">
              <Text>Box 3</Text>
            </Box>
          </Stack>
        </BaseContainer>
      </Box>
      <Box bg={theme.colors.fauxblack} color="white" py="1.5rem">
        <BaseContainer>
          <p>
            reach me at{" "}
            <a href="mailto:jonathasbsouza@gmail.com">
              jonathasbsouza@gmail.com
            </a>
          </p>
        </BaseContainer>
      </Box>
    </Layout>
  );
}
