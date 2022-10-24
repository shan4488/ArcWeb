import styled from "styled-components";
import {Link} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: #101522; 
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content: center;
    display:none;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`


export const SocialMedia = styled.div`
    max-width: 1000px;
    width: 100%;
    position:relative;
    left:40px;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align:center;
    max-width: 1100px;
    margin: 40px 100px 0 auto; //note margin-left is 100px - starred

    @media screen and (max-width: 820px) {
        flex-direction: column;
        text-align:center;
        align-items: center;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-content: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin: bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
    text-align:center;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 24px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    padding: 10px;
`

export const DevTag = styled.p`
    display:block;
    color:#fff;
    font-size:16px;

    @media screen and (max-width: 820px) {
        text-align:center;
        color:red;
        position:relative;
        left:-40px;
    }
`
