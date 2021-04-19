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

  // Observa alterações no estado dos iframes mantendo o menu de edição preenchido com as informações do iframe selecionado
  useEffect(() => {
    const iframeSelected = iframes.filter(i => i.selected)
    const [i] = iframeSelected;

    // OBS: HTMLInputElement não reconhece o tipo string, verificar possíveis soluções 
    if (i !== undefined) {
      (document.getElementById('name') as HTMLInputElement).value = i.name;
      (document.getElementById('src') as HTMLInputElement).value = i.src;
      (document.getElementById('width') as HTMLInputElement).value = i.width;
      (document.getElementById('id') as HTMLInputElement).value = i.id;
      (document.getElementById('height') as HTMLInputElement).value = i.height;
    }

  }, [iframes])

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

  // Adiciona um novo iframe com ID aleatória 
  const addNewIframe = () => {
    const generateId = Math.floor(Math.random() * 100);
    setIframes([
      ...iframes,
      { id: generateId, name: "Novo Iframe", src: "https://teste.com", selected: false, width: 350, height: 350 }
    ])
  }

  // Recebe uma ID e deleta o iframe com ID correspondente
  const deleteIframe = (id: number) => {
    const newIframeList = [...iframes].filter(iframe => {
      return iframe.id !== id;
    })
    setIframes(newIframeList);
  }

  // Adiciona a propriedade selected para identificar um iframe selecionado 
  const selectIframe = (id: number) => {
    const iframeSelected = iframes.map(i => {
      return i.id === id ? { ...i, selected: true } : { ...i, selected: false }
    })
    setIframes(iframeSelected)

  }

  // Verifica inputs que estão sendo alteradas e adiciona atualiza o iframe selecionado no momento
  const handleInputChange = (e: any) => {
    const updateIframe = iframes.map(i => {
      return i.selected === true ? { ...i, [e.target.name]: e.target.value } : { ...i}
    })
    setIframes(updateIframe);
  }

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
            <div onClick={() => selectIframe(iframe.id)} className="iframe-container" key={iframe.id} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove} >
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
                  {iframes.map(iframe => (
                    <li key={iframe.id}>
                      <a onClick={() => selectIframe(iframe.id)}>
                        {iframe.name}
                      </a>
                      <aside>
                        {iframe.selected && <span></span>}
                        <button onClick={() => deleteIframe(iframe.id)}> Apagar </ button>
                      </aside>
                    </li>
                  ))}
                </ul>
              </section>
              <button onClick={addNewIframe}> Novo iframe </button>
            </div>

          </IframeList>
        </IframeArea>
      </main>

      <EditArea>
        <h3>Editar atributos</h3>
        <section>
          <input name="id" id="id" placeholder="ID" readOnly type="text" />
          <input name="name" id="name" onChange={handleInputChange} placeholder="Nome do iframe" type="text" />
          <input name="src" id="src" onChange={handleInputChange} placeholder="Endereço" type="text" />
          <input name="width" id="width" onChange={handleInputChange} placeholder="Largura" type="number" />
          <input name="height" id="height" onChange={handleInputChange} placeholder="Altura" type="number" />
          <input placeholder="" type="text" />
        </section>
      </EditArea>

    </Container>

  );
}

export default App;
