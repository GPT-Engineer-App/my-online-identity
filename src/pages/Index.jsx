import { Container, VStack, Heading, Text, Button, Box, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image src="/path/to/your/profile-picture.jpg" alt="Profile Picture" borderRadius="full" />
        </Box>
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm John Doe. I'm a full-stack developer with a passion for creating beautiful and functional web applications.
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com/yourusername" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com/in/yourusername" target="_blank" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as="a" href="https://twitter.com/yourusername" target="_blank" />
        </HStack>
        <Button colorScheme="teal" size="lg" as="a" href="mailto:your.email@example.com">
          Contact Me
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;