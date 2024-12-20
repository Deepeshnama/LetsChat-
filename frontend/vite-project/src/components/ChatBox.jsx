import { Box } from "@chakra-ui/react";
import '../components/styles.css';

const Chatbox = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      {/* Chat content goes here */}
    </Box>
  );
};

export default Chatbox;
