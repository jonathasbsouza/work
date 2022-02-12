import {
  Heading,
  Text,
  Image,
  Stack,
  Box,
  Button,
  propNames,
} from "@chakra-ui/react";

export default function WorkPost({
  company,
  year,
  title,
  description,
  url,
  thumb,
}) {
  return (
    <Stack align="center" direction={["column", "row"]} spacing={"1.5rem"}>
      <Image maxW={["100%", "50%"]} objectFit="cover" src={thumb} alt="Thumb" />
      <Box>
        <Text fontSize="xs" marginBottom={4}>
          {company}, {year}
        </Text>
        <Heading as="h4" size="md" marginBottom={2} fontWeight={400}>
          {title}
        </Heading>
        <Text fontSize="sm" marginBottom={4}>
          {description}
        </Text>
        {url ? (
          <Button colorScheme="blue">Work principles</Button>
        ) : (
          <Text fontSize="sm">SOON</Text>
        )}
      </Box>
    </Stack>
  );
}
