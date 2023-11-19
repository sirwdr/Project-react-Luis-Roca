import {useState} from 'react'
import { Button, Badge, useToast} from '@chakra-ui/react'

const ItemCount = () => {


    const toast = useToast()

    const [count, setCount] = useState(1)

    const addToCart =()=> {
        if(count > 0) {
            toast({
              title: 'Felicitaciones',
              description: `Has agregado ${count} unidades`,
              status: 'success',
              duration: 2000,
              isClosable: true,
            })
        } else {
           alert("No a seleccionado producto")
        }
        }

        const decrement = () => {
            if (count > 0) {
                setCount(count - 1)
            }
        }
 

  return (
    <div>
        <Button colorScheme='teal' variant='ghost' onClick={() => setCount(count + 1)}>
            +
        </Button>
        <Badge colorScheme='green'>{count}</Badge>
        <Button colorScheme='teal' variant='ghost' onClick={decrement}>
            -
        </Button>
        <Button colorScheme='facebook' onClick={(addToCart)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount