import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack, Box, Heading } from "@chakra-ui/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Front from "./Front";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    // Simulate login success and navigate to "/"
    console.log("Login Button Clicked");
    navigate("/home"); // Redirect to root path
  };

  const handleGuestLogin = () => {
    setEmail("guest@example.com");
    setPassword("123456");
  };

  return (
    
   
    <Box
      maxW="400px"
      w="100%"
      p={6}
      m="auto"
      mt={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
    >
      

      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Login
      </Heading>
      <VStack spacing="10px">
        <FormControl id="email" isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            value={email}
            type="email"
            placeholder="Enter Your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleLogin} // Call the handleLogin function
        >
          Login
        </Button>

        <Button
          variant="solid"
          colorScheme="red"
          width="100%"
          onClick={handleGuestLogin}
        >
          Get Guest User Credentials
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
