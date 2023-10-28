import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div>
        
        <Flex bg='gray.100' color='black'>
        <Box boxSize='-moz-min-content'>
  <h3>Logo</h3>
</Box>
            <Spacer />
            <Menu>
                <MenuButton>
                    Categorias
                </MenuButton>
                <MenuList>
                    <MenuItem>Samsung</MenuItem>
                    <MenuItem>Motorola</MenuItem>
                    <MenuItem>Xiaomi</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />

            
            <Box p='4'>
                <CartWidget />
            </Box>
        </Flex>
        
        
    </div>
  )
}

export default NavBar