import { Cerveza } from '@/interfaces/interfaces'
import React from 'react'

interface Props {
    cerveza:Cerveza
}
const CervezaComponent = ({cerveza}:Props) => {
  return (
    <>
      <div key={cerveza.id} className="flex flex-col justify-between rounded-lg border-2 shadow-lg p-2">
            <div className="flex justify-between  items-center">
            <h1 className="text-2xl italic font-bold text-red-600">{cerveza.precio} €</h1>
            <h1 className="text-md italic font-bold">{cerveza.pais}</h1>
            </div>
            <img src={cerveza?.foto} />
            <h2 className="text-center text-md font-bold">{cerveza.nombre}</h2>
            <button className="bg-yellow-400 text-white rounded-md p-2 ">Añadir a carrito</button>
          </div>
    </>
  )
}

export default CervezaComponent
