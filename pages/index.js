import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeroGrid from "../components/heroGrid";
import NextLink from "next/link";
import theme from "../styles/theme";
import { Box, Button, Stack, Heading, Text, Image } from "@chakra-ui/react";
import BaseContainer from "../components/BaseContainer";

import WorkPost from "../components/WorkPost";

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
        pt={["8rem", "22rem"]}
        pb={["4rem", "0"]}
        mt={["-5rem", -267]}
      >
        <BaseContainer>
          <Stack align="center" direction={["column", "row"]} spacing="3rem">
            <Image
              maxW="40%"
              objectFit="cover"
              src="/images/eu.jpg"
              alt="Jonathas Souza"
              d={["none", "flex"]}
            />
            <Stack direction="column" spacing={["1rem", "2rem"]}>
              <Heading as="h2" size="md">
                Who am I
              </Heading>
              <Text fontSize="sm" mb={4}>
                In 10 years, I've worked in a lot of design disciplines, as
                Graphic, Editorial and Product Design. Here is some examples of
                this experience. In 10 years, I've worked in a lot of design
                disciplines, as Graphic, Editorial and Product Design. Here is
                some examples of this experience. In 10 years, I've worked in a
                lot of design disciplines, as Graphic, Editorial and Product
                Design. Here is some examples of this experience.
              </Text>
              <Stack direction="row" spacing="1rem">
                <NextLink href="#work">
                  <Button>My work</Button>
                </NextLink>
                <NextLink href="/work-principles">
                  <Button>Work principles</Button>
                </NextLink>
              </Stack>
            </Stack>
          </Stack>
        </BaseContainer>
      </Box>
      <Box id="work" py={["4rem", "10rem"]}>
        <BaseContainer>
          <Stack direction={["column", "row"]} spacing="4rem">
            <Stack
              direction="column"
              spacing={["1rem", "2rem"]}
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
            </Stack>
            <Box flex="4">
              <Stack direction="column" spacing={16} align="stretch">
                <WorkPost
                  year="2022"
                  company="Remessa Online"
                  title="Easy signup for companies to send money abroad"
                  description="How can students create better health habits, improving their lives?"
                  thumb="images/work/work_thumb.jpg"
                />
                <WorkPost
                  year="2021"
                  company="VTEX"
                  title="Easing money distribution in collaborative commerce"
                  description="How can students create better health habits, improving their lives?"
                  thumb="images/work/work_thumb.jpg"
                />
                <WorkPost
                  year="2020"
                  company="VTEX"
                  title="Helping ecommerces to choose and configure their payment processors"
                  description="How can students create better health habits, improving their lives?"
                  thumb="images/work/work_thumb.jpg"
                />
              </Stack>
            </Box>
          </Stack>
        </BaseContainer>
      </Box>
    </Layout>
  );
}
