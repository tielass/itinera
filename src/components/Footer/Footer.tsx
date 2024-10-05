import Logo from "../../assets/images/itinera-logo.svg";
import PrimaryButton from "../../ui/PrimaryButton";
import {
  BottomLink,
  FooterContainer,
  FooterText,
  LogoImage,
  TextContainer,
} from "./Footer.styles";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer id="footer">
      <LogoImage src={Logo} alt="" />
      <TextContainer>
        <FooterText>
          Itinera is a free chrome extension, <br />
          plan your trip seamlessly in seconds!
        </FooterText>
        <div>
          <PrimaryButton
            href="https://chromewebstore.google.com/detail/itinera-%E2%80%93-plan-your-trip/ijkbbldofdehelecdeeomckgccbfebfo?utm_source=ext_app_menu"
            target="_blank"
          >
            {" "}
            Add to Chrome - Its Free{" "}
          </PrimaryButton>
        </div>
      </TextContainer>
      <div>
        <BottomLink href="">Impressum</BottomLink>
        <BottomLink href="">Datenschutz</BottomLink>
      </div>
      <FooterText>&copy; {currentYear} Itinera</FooterText>
    </FooterContainer>
  );
}

export default Footer;
