import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/54781517?s=460&u=9d9c61260da44910ca50a045300415efed2e8dc0&v=4" alt="Bruno Brito"/>
        <div>
          <strong>Bruno Brito</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Maluco que se diz programador mas sabe porra nenhuma.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;