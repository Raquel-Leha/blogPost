import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='div-footer'>
    <div className='div-1'>
    <div className='container-colum-1'>
        <h3>CONTACTO</h3>
        <a href='http://www.w3schools.com'>raquel@deliciosaraquel.com</a>
        <a href='http://www.w3schools.com'>Contacto</a>
      </div>
      <div className='container-colum-1'>
        <h3>NAVEGACIÓN</h3>
        <a href='http://www.w3schools.com'>Sobre mí</a>
        <a href='http://www.w3schools.com'>Tienda</a>
        <a href='http://www.w3schools.com'>Recetario</a>
        <a href='http://www.w3schools.com'>Contacto</a>
      </div>
      <div className = "container-colum-1">
        <h3>RECETARIO</h3>
        <a href='http://www.w3schools.com'>Recetas dulces</a>
        <a href='http://www.w3schools.com'>Recetas saladas</a>
        <a href='http://www.w3schools.com'>Recetas rápidas</a>

      </div>
      <div className='container-colum-1'>
        <h3>LEGAL</h3>
        <a href='http://www.w3schools.com'>Aviso legal</a>
        <a href='http://www.w3schools.com'>Política de privacidad</a>
        <a href='http://www.w3schools.com'>Política de cookies</a>
        <a href='http://www.w3schools.com'>Condiciones generales de compra</a>
      </div>

    </div>
    <div className='div-center'></div>
    <div className='div-2'>
    <h1>SÍGUEME Y SUSCRÍBETE</h1>
    <div className='div-email'>
      <p>Introduce tu correo electrónico</p>
      <button>ENVIAR</button>
    </div>
    <div className='line-div'></div>
    <div className='social-media'>
      <a href='http://www.w3schools.com'>FACEBOOK</a>
      <a href='http://www.w3schools.com'>INSTAGRAM</a>
      <a href='http://www.w3schools.com'>YOUTUBE</a>
      <a href='http://www.w3schools.com'>TIKTOK</a>
    </div>


    </div>

    </footer>
  )
}

export default Footer