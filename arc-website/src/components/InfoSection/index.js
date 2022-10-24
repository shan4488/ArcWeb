import React from 'react'
import { Button } from '../HeroSection/ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrapper, Img, BtnLink   } from './InfoElements'

const InfoSection = ({lightBg, lightText, id, imgStart, topLine, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2,link}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                        <BtnWrap>
                            <Button 
                                to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                            >
                                </Button>
                                <BtnLink href={link} target='_blank'>{buttonLabel}</BtnLink>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection