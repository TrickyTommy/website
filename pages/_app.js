import { Box, ChakraProvider } from "@chakra-ui/core";

import { DefaultSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import siteConfig from "~/site-config";
import theme from "~/src/theme";

/** @param {import('next/app').AppProps} props */
export default function App(props) {
  const { Component, pageProps, router } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <DefaultSeo
        title="Welcome!"
        titleTemplate={`%s · ${siteConfig.title}`}
        description={siteConfig.description}
        canonical={siteConfig.url + (router.asPath || "")}
        openGraph={{
          title: siteConfig.title,
          description: siteConfig.description,
          type: "website",
          site_name: siteConfig.title,
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />
      <ChakraProvider resetCSS theme={theme}>
        <Box maxW="6xl" mx="auto">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}
