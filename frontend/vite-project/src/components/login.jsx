import { useState } from "react";
 Ashfaq
import { 
  Button, 
  Input, 
  VStack, 
  FormControl, 
  FormLabel, 
  Container, 
  Box, 
  Text,
  useToast
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const toast = useToast();

  async function HandleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      
      const response = await axios.post(
        "https://login-signup-ndpt.onrender.com/user/login",
        { email, password }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        
        toast({
          title: "Login Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Invalid email or password");
      toast({
        title: "Error",
        description: "Error while logging in",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
=======
import { Button } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
// import useHistory from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Loginpage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  let navigate = useNavigate();

  async function HandleSubmit(e) {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
    try {
      setLoading(true);
      setError("");

      let response = await axios.post(
        "https://login-signup-ndpt.onrender.com/user/login",
        { email, password }
      );
      console.log(response);
      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
        alert("sucessful logged in");
      }

      alert("Data saved successfully");
    } catch (error) {
      setError("Inavlid");

      alert("error while logging in");
 main
    } finally {
      setLoading(false);
    }
    setEmail("");
    setPassword("");
  }

  return (
 Ashfaq
    <Container maxW="md" py={10}>
      <Box
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        <form onSubmit={HandleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
                _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                borderColor="gray.300"
                _hover={{ borderColor: "gray.400" }}
                _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
              mt={4}
              isLoading={loading}
              loadingText="Loading..."
            >
              Login
            </Button>

            {error && (
              <Text color="red.500" textAlign="center" mt={2}>
                {error}
              </Text>
            )}
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Loginpage;


