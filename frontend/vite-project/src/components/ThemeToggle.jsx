import React from 'react';

import { Button, useColorMode } from '@chakra-ui/react';

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} colorScheme="teal" size="sm">
      {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}

export default ThemeToggle;