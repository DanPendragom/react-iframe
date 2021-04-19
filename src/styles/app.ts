import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    justify-content: space-between;
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 60px;
    padding: 0 60px;
    margin-bottom: 36px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);

`;


const IframeArea = styled.div`
    max-width: 100%;
    height: 100%;
    padding: 0 36px;
    position: relative;
    div.iframe-container{
     
        div{
          
            h3{
                color: #FFF;
            }
        }
    }
    iframe{
        width: 100%;
        border: 1px solid #4D82C1;
        border-radius: 0 0 10px 10px;
    }
`;
const IframeList = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 45vh;
    position: absolute;
    background: #4D82C1;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.28);
    border-radius: 13px;
    right: 36px;
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        border-bottom: 6px solid #FFF;
        margin-bottom: 16px;
        h3{
            font-size: 24px;
            color: #FFF;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
  `;


const EditArea = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #4D82C1;
    padding: 36px; 
    overflow: scroll; 
    h3{
        color: #FFF;
    }
    section{
        display: flex; 
        justify-content: space-between;
        flex-wrap: wrap; 
        width: 100%;
    }
`;

export { Container, Header, IframeArea, IframeList, EditArea };
