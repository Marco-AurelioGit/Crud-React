import React, { useState } from 'react'
import FormDialog from '../DialogForm/dialogForm';
import './Card.css'

const Card = (props) => {
  const [open, setOpen] = useState(false);


  return (
    <>
      <FormDialog
        key={props.id}
        open={open}
        setOpen={setOpen}
        nome={props.nome}
        idade={props.idade}
        email={props.email}
        cargo={props.cargo}
        pais={props.pais}
        id={props.id}
        />
        <div className='container' onClick={() =>setOpen(true)}>
          <div className='card-container'>
            <h1 className='card-title'>{props.nome}</h1>
            <p className='card-email'>{props.email}</p>
            <p className='card-idade'>{props.idade}</p>
            <p className='card-cargo'>{props.cargo}</p>
            <p className='card-pais'>{props.pais}</p>
          </div>
        </div>
    </>
  )
}

export default Card
