import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  const productos = [
    {id: 1, nombre: "Producto A", description: "Descripcion de Producto A", stock: 5, category: "cat1"},
    {id: 2, nombre: "Producto B", description: "Descripcion de Producto B", stock: 10, category: "cat2"},
    {id: 3, nombre: "Producto C", description: "Descripcion de Producto C", stock: 15, category: "cat3"},
    {id: 4, nombre: "Producto D", description: "Descripcion de Producto D", stock: 20, category: "cat1"},
    {id: 5, nombre: "Producto E", description: "Descripcion de Producto E", stock: 25, category: "cat2"},
    {id: 6, nombre: "Producto F", description: "Descripcion de Producto F", stock: 30, category: "cat3"}
  ]

  const getProductos = new Promise((resolve, reject)=> {
    if(productos.length > 0) {
      setTimeout(()=> {
        resolve(productos)
      }, 2000)
    } else {
      reject(new Error("No se encontraron productos"))
    }
      })

      getProductos
      .then((res) => {
      })
      .catch((error) => {
        console.log(error)
      })

      

  return (
    <div>
        <ItemDetail productos={productos}/>
        
    </div>
  )
}

export default ItemDetailContainer