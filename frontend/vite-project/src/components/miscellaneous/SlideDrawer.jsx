import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Button,
  Tooltip,
  Text,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  Input,
  position,
  useToast,
} from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import ProfileModal from '../miscellaneous/ProfileModal';
import ChatLoading from '../ChatLoading';
import UserListItem from '../useAvtar/UserListItem';

const SlideDrawer = () => {
  const [search,setSearch]=useState("")
  const[loading,setLoading]=useState(false)
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();  // Chakra UI hook for managing drawer state

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };
const toast=useToast();
  const handleSearch=()=>{
if(!search){
toast({
  title:'Please Enter something in search',
  status:'warning',
  duration:5000,
isClosable:true,
position:'top-left'

})
}
  }

  return (
    <>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px"
        borderWidth="5px"
      >
        {/* Search Users */}
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" display="flex" alignItems="center" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text display={{ base: 'none', md: 'flex' }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>

        {/* App Name */}
        <Text fontSize="2xl" fontFamily="Work sans" textAlign="center">
          LETS CHAT
        </Text>

        {/* Notifications and Profile */}
        <Flex alignItems="center" gap={4}>
          {/* Notifications */}
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            {/* Add MenuList for notifications if needed */}
          </Menu>

          {/* Profile */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                name="Dan Abrahmov"
                size="sm"
                cursor="pointer"
                src="https://bit.ly/dan-abramov"
              />
            </MenuButton>
            <MenuList>
              <ProfileModal>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/* Drawer for Search Users */}
      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Search Users</DrawerHeader>
            <DrawerBody>
             <Box display='flex' pb={2}>
              <Input
              placeholder='Search by name or email'
              mr={2}
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              />
              <Button 
             onClick={handleSearch}>Go</Button>
             </Box>
             {loading ?
             (<ChatLoading/>):
             (<UserListItem/>)}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default SlideDrawer;
