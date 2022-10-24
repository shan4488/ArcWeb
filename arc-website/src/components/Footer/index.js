import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import { BsFillHeartFill } from "react-icons/bs";
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,
SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, DevTag} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            {/* <FooterLinksContainer> */}
                {/* <FooterLinksWrapper>
                    <FooterLinkItems  id='ft1'>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems id='ft2'>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">About us</FooterLink>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer> */}
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        arc
                    </SocialLogo>
                    <WebsiteRights>arc &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.google.com" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                        <SocialIconLink href="https://instagram.com/arc_sjec?igshid=YmMyMTA2M2Y=" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                        <SocialIconLink href="https://www.google.com" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/in/arc-sjec-a83b49229" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                <DevTag>Made with <BsFillHeartFill/> by Sharan Kumar</DevTag>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer