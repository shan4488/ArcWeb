import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    display: flex;
    height:3.5rem;
    width:10rem;
    background: #01BF71;
    border-radius: 50px;
    // background: ${({primary}) => (primary ? '#01BF71' : '#101606')};
    white-space: nowrap;
    // padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#101606' : '#fff')};
    // font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    // padding: 15px 0px 0px 0px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;   

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#fff')};
        color:#000;
    }
`