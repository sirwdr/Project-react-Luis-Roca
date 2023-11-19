import { FaShoppingCart } from 'react-icons/fa';
import React from 'react'
import { Badge } from '@chakra-ui/react'

const CartWidget = () => {
  return (

    <div>
      
<h5> <FaShoppingCart /></h5>
<Badge colorScheme='gray.400'>3</Badge>
      
</div>
  )
}

export default CartWidget
