import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import cell_store_sin_fondo from '/src/assets/img/cell_store_sin_fondo.png'



const NavBar = () => {
  return (
    <div>
        
        <Flex bg='gray.100' color='black'>
        <Box boxSize='-moz-min-content'>
          <Link to={"/"}>
  <img src={cell_store_sin_fondo} alt="logo" width={100} />
          </Link>
</Box>
            <Spacer />
            <Menu>
                <MenuButton>
                   <strong>Categorias</strong>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                    <Link to={`/category/${'cat1'}`}>
                    Samsung
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to={`/category/${'cat2'}`}>
                    Motorola
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to={`/category/${'cat3'}`}>
                    Xiaomi
                    </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Spacer />

            
            <Box p='4'>
              <Link to={"/CartWidget"}>
                <CartWidget />
              </Link>
            </Box>
        </Flex>
        
        
    </div>
  )
}

export default NavBar