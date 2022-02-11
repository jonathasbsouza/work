import { Container } from "@chakra-ui/react";

export default function BaseContainer({ children }) {
  return <Container maxW={{ base: "100%", lg: "71rem" }}>{children}</Container>;
}
