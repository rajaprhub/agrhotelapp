import { ReactNode} from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();



  


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

             <Link to="/">
                <Button> Home</Button>
             </Link>
            
             <Link to="/showhotellist">
                <Button> Book Hotels</Button>
             </Link>

             <Link to="/addhotels">
                <Button>AddHotels</Button>
             </Link>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            
                <Button> Login</Button>
             
             
              <Link to="/register">
                <Button> Sign up</Button>
              </Link>
              <Button onClick={toggleColorMode}>
                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
             </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}