import {
  Button,
  Center,
  Grid,
  Heading,
  Icon,
  Image,
  Stack,
  Wrap,
} from "@chakra-ui/core";

import socials from "~/src/socials";

const baseTemplateAreas = `
  "memoji"
  "content"
`;

const mdTemplateAreas = `
  "memoji content"
`;

export default function HomePage() {
  return (
    <Center maxW="6xl" minH="100vh" mx="auto" p={4}>
      <Grid
        templateAreas={{ base: baseTemplateAreas, md: mdTemplateAreas }}
        templateColumns="auto auto"
        templateRows="auto"
      >
        <Image
          alt="Tommy Ferdian Hadimarta"
          gridArea="memoji"
          _hover={{ transform: "rotate(4deg) scale(1.1)" }}
          maxH={64}
          mx="auto"
          p={8}
          src="/me.png"
          transition="transform 150ms ease"
        />

        <Stack
          alignItems={{ base: "center", md: "flex-start" }}
          gridArea="content"
          justify="center"
          h="full"
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
      </Grid>
    </Center>
  );
}
