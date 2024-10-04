import Logo from "../../assets/images/itinera-logo.svg";
import PrimaryButton from "../../ui/PrimaryButton";
import ScrollButton from "../../ui/ScrollButton";
import { ButtonContainer, LogoImage, NavbarContainer } from "./Navbar.styles";

function Navbar() {
  return (
    <NavbarContainer>
      <LogoImage src={Logo} alt="" title="Itinera" />
      <ButtonContainer>
        <ScrollButton>How to use it</ScrollButton>
        <PrimaryButton
          href="https://chromewebstore.google.com/detail/itinera-%E2%80%93-plan-your-trip/ijkbbldofdehelecdeeomckgccbfebfo?utm_source=ext_app_menu"
          target="_blank"
        >
          Add to Chrome
        </PrimaryButton>
      </ButtonContainer>
    </NavbarContainer>
  );
}

export default Navbar;
