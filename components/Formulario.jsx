import React from 'react'

const Formulario = () => {
  return <>
    <form className='space-y-3'>
        <div className='flex flex-col space-y-2'>
            <label htmlFor='nombre' className='font-semibold uppercase'>Nombre:</label>
            <input type='text' id='nombre' placeholder='Nombre del agendado' className='p-2 rounded-md'></input>
        </div>
        <div className='flex flex-col space-y-2'>
            <label htmlFor='edad' className='font-semibold uppercase'>Edad:</label>
            <input type='text' id='edad' placeholder='Edad del agendado' className='p-2 rounded-md'></input>
        </div>
        <div className='flex flex-col space-y-2'>
            <label htmlFor='genero' className='font-semibold uppercase'>Genero:</label>
            <input type='text' id='genero' placeholder='Genero del agendado' className='p-2 rounded-md'></input>
        </div>
        <div className='flex flex-col space-y-2'>
            <label htmlFor='telefono' className='font-semibold uppercase'>Telefono:</label>
            <input type='text' id='telefono' placeholder='Telefono del agendado' className='p-2 rounded-md'></input>
        </div>
        <div className='flex flex-col space-y-2'>
            <label htmlFor='sintomas' className='font-semibold uppercase'>Sintomas:</label>
            <textarea type='text' id='sintomas' placeholder='Sintomas del agendado' className='p-2 rounded-md resize-none'></textarea>
        </div>
        <div>
            <button className='bg-red-400 p-2 rounded-md'>Agendar Cita</button>
        </div>
    </form>
  </>
}

export default Formulario