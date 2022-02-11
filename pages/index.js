import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeroGrid from "../components/heroGrid";

import theme from "../styles/theme";
import { Box } from "@chakra-ui/react";
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
        sx={{
          backgroundColor: theme.colors.fauxblack,
        }}
      >
        <BaseContainer>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </BaseContainer>
      </Box>
    </Layout>
  );
}
