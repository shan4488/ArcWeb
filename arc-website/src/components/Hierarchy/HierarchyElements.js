import styled from "styled-components";


export const HierarchyContainer = styled.div`
    hieght: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1200px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const HierarchyWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom:40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 20px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const HierarchyCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 440px;
    padding: 30px;
    box-shadow: 0 1 px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const HierarchyIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`

export const HierarchyH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`


export const HierarchyH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const HierarchyP = styled.p`
    font-size: 1rem;
    text-align: center;
`