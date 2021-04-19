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

    img{
        width: 160px;
    }
`;


const IframeArea = styled.div`
    max-width: 100%;
    height: 100%;
    padding: 0 36px;
    position: relative;
    div.iframe-container{
        width: 350px;
        height: 350px;
        cursor: pointer;
        position: absolute;
        border-radius: 10px;
        margin: 15px;
        overflow: hidden;
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 65px;
            background-color: #4D82C1;
            pointer-events: none;
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
        section{
            overflow: auto;
            max-height: 75%;
            ul{
                list-style: none;
                margin: 0 16px;
                overflow: auto; 
                li{
                    display: flex; 
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    line-height: 26px;
                    color: #FFF;
                    user-select: none;
                    a{
                        width: 100%;
                    }
                }
            }
            aside{
                display: flex;
                justify-content: center;
                align-items:center;
                z-index: 9999;
            }
            span{
                width: 10px;
                height: 10px;
                margin-right: 10px;
                border-radius: 50%;
                background-color: #4EF300;
            }
            button{
                height: 20px;
                padding: 0 15px;
                margin: 0%;
                :hover{
                    background-color: #F1F1F1;
                }
            }
        }
        button{
            margin: 16px;
            height: 40px;
            border: 0;
            border-radius: 3px;
            background-color: #FFF;
            cursor: pointer;
            font-weight: bolder;
            color: #4D82C1;
        }
    }
  `;


const EditArea = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #4D82C1;
    padding: 16px 36px; 
    overflow: scroll; 
    h3{
        color: #FFF;
    }
    hr{
            margin: 20px 0;
        }
    section{
        display: flex; 
        justify-content: space-between;
        flex-wrap: wrap; 
        width: 100%;
       
        div{
            display: flex;
            flex-direction: column;
            min-width: 300px;
            width: 30%;
        }
        label{
            margin-top: 6px;
            color: #FFF;
            font-weight: bold;
        }
        input{
            width: 100%;
            min-width: 300px;
            margin-top: 8px;
            border: 0;
            border-radius: 5px;
            height: 35px;
            padding: 8px;
        }
    }
`;

export { Container, Header, IframeArea, IframeList, EditArea };
