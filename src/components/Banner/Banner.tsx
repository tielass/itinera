import PrimaryButton from "../../ui/PrimaryButton";
import BannerImage from "../../assets/images/banner-image.png";
import {
  BannerContainer,
  BannerHeader,
  BlackLine,
  Orange,
  StyledBannerImage,
} from "./Banner.styles";

function Banner() {
  return (
    <>
      <BannerContainer>
        <div>
          <BannerHeader>
            Plan Your Trip <Orange>in Seconds</Orange>
          </BannerHeader>
          <p>
            Discover attractions in cities worldwide and <br />
            seamlessly add them into your Google Calendar
          </p>
          <PrimaryButton
            href="https://chromewebstore.google.com/detail/itinera-%E2%80%93-plan-your-trip/ijkbbldofdehelecdeeomckgccbfebfo?utm_source=ext_app_menu"
            target="_blank"
          >
            Add to Chrome - Its Free{" "}
          </PrimaryButton>
        </div>
        <StyledBannerImage src={BannerImage} alt="" />
      </BannerContainer>
      <BlackLine />
    </>
  );
}

export default Banner;
