import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Input, Button } from '@chakra-ui/react';
import io from 'socket.io-client';

const Chatbox = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  // Dummy user and room data (you would get these dynamically)
  const senderId = '6763ff44652976b9f742ea9b'; // Example sender ID (logged-in user)
  const receiverId = '676400c1652976b9f742ea9e'; // Example receiver ID
  const roomId = '5'; // Example room ID (you can dynamically set this)

  // Socket connection
  const socket = io('http://localhost:7800'); // Replace with your server's URL

  useEffect(() => {
    // Join the room when the component mounts
    socket.emit('join room', roomId);

    // Listen for incoming messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('chat message');
    };
  }, []);

  // Function to send message to the backend
  const sendMessage = async () => {
    if (message.trim()) {
      try {
        const messagePayload = {
          sender: senderId,
          receiver: receiverId,
          content: message,
          room: roomId,
        };

        // Send message to the backend API using POST request
        const response = await fetch('https://login-signup-ndpt.onrender.com/chat/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(messagePayload),
        });

        const data = await response.json();

        if (data.success) {
          console.log('Message sent');
          setMessage(''); // Clear the input after sending
        } else {
          console.log('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: '100%', md: '68%' }}
      borderRadius="lg"
      borderWidth="1px"
    >
      {/* Display messages */}
      <VStack
        align="start"
        spacing={3}
        maxH="400px"
        overflowY="scroll"
        width="100%"
        p={2}
      >
        {messages.map((msg, index) => (
          <Box
            key={index}
            p={2}
            bg="gray.100"
            borderRadius="md"
            w="full"
            boxShadow="sm"
          >
            <Text>{msg.content}</Text>
          </Box>
        ))}
      </VStack>

      {/* Input field and send button */}
      <Box display="flex" mt={3} w="full">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          flex="1"
        />
        <Button onClick={sendMessage} colorScheme="teal" ml={3}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbox;