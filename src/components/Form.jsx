
import {useState} from 'react'

const Form = () => {
const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const [id, setId] = useState("")


const handleSubmit = (e) => {
    e.preventDefault()

    console.log(nombre)
    console.log(email)
};

  return (
    <div>
        
        
        <form action="" onSubmit={handleSubmit}>
            <input type='text' onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese su Nombre'/>
            <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su email'/>
            <button type='submit'>Enviar</button>
        </form>

        <p>Purchase order id: {purchaseid}</p>
    </div>
  )
}

export default Form