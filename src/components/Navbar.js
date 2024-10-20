import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Link,
  CSSReset,
  extendTheme,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { FaHome, FaChartBar, FaInfoCircle, FaBrain, FaRegLightbulb } from 'react-icons/fa';

const theme = extendTheme({
  colors: {
    sair: {
      primary: '#00A99D', // Green color
      dark: '#005F56', // Dark green color
    },
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
});

const Navbar = () => {
  const hoverColor = useColorModeValue('sair.primary', 'white');
  const underlineColor = useColorModeValue('sair.primary', 'gray.700');

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        boxShadow="md"
        zIndex="sticky"
      >
        <Flex
          maxW="6xl"
          mx="auto"
          justify="center"  // Centering the navigation
          align="center"
          p={4}
          as="nav"
          wrap="wrap"
        >
          <Flex
            align="center"
            wrap="wrap"
            gap={4}
          >
            <NavItem to="/" icon={FaHome} hoverColor={hoverColor} underlineColor={underlineColor}>
              Home
            </NavItem>
            <NavItem to="/form" icon={FaChartBar} hoverColor={hoverColor} underlineColor={underlineColor}>
              Analytics Dashboard
            </NavItem>
            <NavItem to="/stats" icon={FaInfoCircle} hoverColor={hoverColor} underlineColor={underlineColor}>
              Statistics
            </NavItem>
            <NavItem to="/effects" icon={FaBrain} hoverColor={hoverColor} underlineColor={underlineColor}>
              Effects
            </NavItem>
            <NavItem to="/recommendations" icon={FaRegLightbulb} hoverColor={hoverColor} underlineColor={underlineColor}>
              Recommendations
            </NavItem>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

const NavItem = ({ to, children, hoverColor, underlineColor, icon }) => {
  return (
    <Link
      href={to}
      p={2}
      display="flex"
      alignItems="center"
      position="relative"
      fontSize={{ base: 'sm', md: 'md' }}
      _hover={{
        textDecoration: 'none',
        color: hoverColor,
        _before: {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '2px',
          backgroundColor: underlineColor,
        },
      }}
    >
      {icon && <Icon as={icon} mr={2} />}
      {children}
    </Link>
  );
};

export default Navbar;
