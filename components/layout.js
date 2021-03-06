import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";
import { Box, Flex } from "@chakra-ui/react";
import BaseContainer from "../components/BaseContainer";

import theme from "../styles/theme";
import SocialIcons from "./SocialIcons";

const name = "Jonathas Souza";
export const siteTitle = "Jônathas Souza | Product Designer";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Box bg={theme.colors.fauxblack} color="white" py="1.5rem">
        <BaseContainer>
          <Flex
            direction={["column", "row"]}
            align="center"
            justify="space-between"
          >
            <Box mb={[4, 0]}>
              <p d="block">
                reach me at{" "}
                <a fontWeight="500" href="mailto:jonathasbsouza@gmail.com">
                  jonathasbsouza@gmail.com
                </a>
              </p>
            </Box>
            <SocialIcons color="white" />
          </Flex>
        </BaseContainer>
      </Box>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  );
}
