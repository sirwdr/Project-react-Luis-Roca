import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import cell_store_sin_fondo from '/src/assets/img/cell_store_sin_fondo.png'


const NavBar = () => {
  return (
    <div>
        
        <Flex bg='gray.100' color='black'>
        <Box boxSize='-moz-min-content'>
  <img src={cell_store_sin_fondo} alt="logo" width={100} />
</Box>
            <Spacer />
            <Menu>
                <MenuButton>
                   <strong>Categorias</strong>
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