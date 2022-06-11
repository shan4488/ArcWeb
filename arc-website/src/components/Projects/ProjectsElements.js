import styled from 'styled-components'

export const ProjectMain = styled.div`
    width:100%;
    background:#fff;
    display:flex;
    align-items: center;
    flex-direction: column;
    
`

export const ProjectTitle = styled.h1`
    color:#000;
    font-size:36px;
    text-align: center;
    padding: 10px;
`

export const ProjectContainer = styled.div`
    width: 80%;
    //max-width: 1600px;
    margin: 40px, auto;
    padding:20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    background-color:#fff;
    height:800px;
    color:white;
    overflow:scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Card = styled.div`
    width: 100%;
    max-width: 400px;
    height:40%;
    padding: 30px;
    background: #373b56;
    color: #fff;
    border-radius: 10px;
    margin: 10px 0px;
`

export const CardId = styled.div`
    width:40px;
    height: 40px;
    border: 2px solid black;
    border-radius:50%;
    display: flex;
`

export const CardSpan = styled.span`
    margin: auto;
    font-size: 17px; 
`

export const CardBody = styled.p`
    font-size: 17px;
    margin: 15px 0 0 0;
`

export const ProjectButton = styled.button`
    border: none;
    outline:none;
    width: 20%;
    height:60px;
    border-radius:10px;
    padding: 16px, 0;
    margin: 10px 0 0 0;
    background: #373b56;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`