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
    <div className='main'>
      <div className='main_images'>
        <div class="slider">
          <div class="slide">
            <img src={piscina1} alt="Imagem 1"/>
          </div>
          <div class="slide">
            <img src={piscina2} alt="Imagem 2"/>
          </div>
          <div class="slide">
            <img src={piscina3} alt="Imagem 3"/>
          </div>
        </div>
      </div>

      <div className='main_text'>
        <h1>Seja bem-vindo(a)!</h1>
        <p>
        Bem-vindo ao meu projeto! O objetivo desse projeto é praticar as minhas habilidades de programação (nesse caso focado ao front-end) e aumentar meus repositórios no git-hub, fazendo assim, com que além de praticar, posso valorizar o meu currículo. Voltarei periodicamente para atualizar o projeto, adicionando novas funcionalidades e melhorando o código.
        </p>
      </div>
    </div>
  )
}

export default Home