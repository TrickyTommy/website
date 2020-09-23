import * as React from "react";

import { Button, Heading, Icon, Stack, Wrap } from "@chakra-ui/core";

import socials from "~/src/socials";

export default function HomePage() {
  return (
    <Stack
      alignItems={{ base: "center", md: "flex-start" }}
      justify="center"
      minH="100vh"
      p={4}
      spacing={4}
    >
      <Heading textAlign={{ base: "center", md: "match-parent" }}>
        Hi, I am Tommy Ferdian Hadimarta! 👋
      </Heading>
      <Wrap justify="center">
        {socials.map(({ name, href, SocialIcon, colorScheme }) => (
          <Button
            as="a"
            colorScheme={colorScheme}
            href={href}
            key={href}
            leftIcon={<Icon as={SocialIcon} />}
          >
            {name}
          </Button>
        ))}
      </Wrap>
    </Stack>
  );
}
