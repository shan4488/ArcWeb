import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    // &:brfore {
    //     content: '';
    //     top:0;
    //     bottom:0;
    //     left:0;
    //     right:0;
    //     background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    //     z-index: 2;
    // }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    filter: brightness(50%);
    z-index: 1;
`
export const HeroContents = styled.div`
    display: flex;
    justify-content: center;
    align-content:center;
    flex-direction: column;
    z-index:4

`
export const Heroh1 = styled.h1`
    color:#fff;
    font-size: 3rem;
    text-align: center;
    left:50%;
    top:50%;
`

export const HeroPara1 = styled.p`
    color:#fff;
    font-size: 1.8rem;
    text-decoration:none;
    text-align: center;
    padding:8px;
`

export const HeroBtnWrap = styled.button`
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background: transparent;
    outline: none;
    border: none;
    padding: 10px;

`