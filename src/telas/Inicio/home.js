// Importações do React
import React from 'react'

// Importações de estilos
import './home.css'

// Importações de imagens
import piscina1 from '../../assets/piscina1.jpg'
import piscina2 from '../../assets/piscina2.jpg'
import piscina3 from '../../assets/piscina3.jpg'

const Home = () => {
  return (
    <div>
      <section className="main_images">
        <div className="slider">
          <div className="slides">
            
            <input type="radio" name="slider" className='slider1' defaultChecked />
            <input type="radio" name="slider" className='slider2' />
            <input type="radio" name="slider" className='slider3' />

            <div className='imagem first'>
              <img src={piscina1} alt="Imagem de piscina" />
            </div>

            <div className='imagem'>
              <img src={piscina2} alt="Imagem de piscina" />
            </div>

            <div className='imagem'>
              <img src={piscina3} alt="Imagem de piscina" />
            </div>

            <div className="navigation-auto">
              <div className="btn1"></div>
              <div className="btn2"></div>
              <div className="btn3"></div>
            </div>
          </div>

          <div className="navigation-manual">
            <label htmlFor="slider1" className="manual-btn"></label>
            <label htmlFor="slider2" className="manual-btn"></label>
            <label htmlFor="slider3" className="manual-btn"></label>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home