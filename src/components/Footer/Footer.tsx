import Logo from "../../assets/images/itinera-logo.svg";
import Instagram from "../../assets/images/ig.svg";
import Facebook from "../../assets/images/fb.svg";
import Twitter from "../../assets/images/x.svg";
import { BottomLink, FooterContainer, FooterText, LogoImage, SocialMediaContainer, TextContainer } from "./Footer.styles";

function Footer() {
  return (
    <FooterContainer>
      <LogoImage src={Logo} alt="" />
      <TextContainer>
      <FooterText>
        Lorem iFooterTextsum dolor sit amet, consectetur adipiscing elit. Fusce commodo
        dui nec quam imperdiet finibus. Aliquam libero ante, laoreet vitae purus
        sagittis, dictum maximus turpis. Nulla ut consectetur tortor. Aliquam
        ultrices ultrices mattis. Nulla dapibus ex eu tempor fringilla. Donec
        porta a eros nec porta. Donec quis porttitor nisi. Donec.
      </FooterText>

      </TextContainer>
      <SocialMediaContainer>
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
      </SocialMediaContainer>
      <div>
        <BottomLink href="">Impressum</BottomLink>
        <BottomLink href="">Datenschutz</BottomLink>
      </div>
    </FooterContainer>
  );
}

export default Footer;
