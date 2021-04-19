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

const [iframes, setIframes] = useState<IframeData[]>([
  {
    id: 1,
    name: 'Youtube',
    src: "https://www.youtube.com/embed?listType=playlist&list=PLC77007E23FF423C6",
    selected: true,
    width: 350,
    height: 350,
  },
]);

let mousePosition;
let offset = [0, 0];
let isDown = false;

const mouseDown = (e: any) => {
  isDown = true;
  offset = [
    e.target.offsetLeft - e.clientX,
    e.target.offsetTop - e.clientY
  ];
}

const mouseUp = () => {
  isDown = false;
}

const mouseMove = (e: any) => {
  if (isDown) {
    mousePosition = {

      x: e.clientX,
      y: e.clientY

    };
    e.target.style.left = (mousePosition.x + offset[0]) + 'px';
    // Para evitar que os iframes invadam áreas não previstas, limitar os valores neste trecho de forma dinâmica
    e.target.style.top = ((mousePosition.y < 100 ? mousePosition.y = 100 : mousePosition.y) + offset[1]) + 'px';
  }
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
        {iframes.map(iframe => (
            <div className="iframe-container" key={iframe.id} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove} >
              <div>
                <h3>{iframe.name}</h3>
              </div>
              <iframe src={iframe.src} > {iframe.name} </iframe>
            </div>
          ))}

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
