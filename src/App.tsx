import React, { useEffect, useState } from 'react'
import GlobalStyle from './styles/global'
import { Container, Header, IframeArea, IframeList, EditArea } from './styles/app'
import Logo from './assets/stormx-logo.png';
interface IframeData {
  id: number;
  name: string;
  src: string;
  selected: boolean;
  width: number;
  height: number;
}

const App = () => {


  return (
    <Container>
      <GlobalStyle />

      <main>
        <Header>
          <div>
            <img src={Logo} alt="Logo" />
          </div>
        </Header>

        <IframeArea>

          <IframeList >
            <header>
              <h3> Lista de Iframes </h3>
            </header>

            <div>
              <section>
                <ul>
                    <li >
                      <aside>
                        <button > Apagar </ button>
                      </aside>
                    </li>
                </ul>
              </section>
              <button> Novo iframe </button>
            </div>

          </IframeList>
        </IframeArea>
      </main>

      <EditArea>
        <h3>Editar atributos</h3>
        <section>
          <input name="id" id="id" placeholder="ID" readOnly type="text" />
          <input name="name" id="name"  placeholder="Nome do iframe" type="text" />
          <input name="src" id="src"  placeholder="Endereço" type="text" />
          <input name="width" id="width"  placeholder="Largura" type="number" />
          <input name="height" id="height"  placeholder="Altura" type="number" />
          <input placeholder="" type="text" />
        </section>
      </EditArea>

    </Container>

  );
}

export default App;
