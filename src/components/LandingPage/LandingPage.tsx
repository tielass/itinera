import TutorialStep from "../../ui/TutorialStep";
import Banner from "../Banner/Banner";
import { MainContainer, Orange, TutorialContainer, TutorialHeader } from "./LandingPage.styles";
import Step1 from "../../assets/images/step-1.png";
import Step2 from "../../assets/images/step-2.png";
import Step3 from "../../assets/images/step-3.png";
import Step4 from "../../assets/images/step-4.png";
import Step5 from "../../assets/images/step-5.png";
import Step6 from "../../assets/images/step-6.png";
import Step7 from "../../assets/images/step-7.png";
import Step8 from "../../assets/images/step-8.png";

function LandingPage() {
  return (
    <MainContainer>
      <Banner />
      <TutorialContainer id="tutorial-container">
        <TutorialHeader>
          How it <Orange>works</Orange>
        </TutorialHeader>
        <TutorialStep
          title="Step 1"
          text="Install the Google Chrome extension on your device"
          img={Step1}
          reverse
        />
        <TutorialStep
          title="Step 2"
          text="Open Google Calendar in the Google Chrome browser"
          img={Step2}
          
        />
        <TutorialStep
          title="Step 3"
          text="Click on the extension icon on the top right"
          img={Step3}
          reverse
        />
        <TutorialStep
          title="Step 4"
          text="Navigate to the button on the right of the page and click on the orange button"
          img={Step4}
          
        />
        <TutorialStep
          title="Step 5"
          text="Type the destination you are planning to visit"
          img={Step5}
          reverse
        />
        <TutorialStep
          title="Step 6"
          text="Browse through activities and read more details about the attractions "
          img={Step6}
          
        />
        <TutorialStep
          title="Step 7"
          text="Drag the chosen activities"
          img={Step7}
          reverse
        />
        <TutorialStep
          title="Step 8"
          text="Here you go - you have a plan for your trip!"
          img={Step8}
        />
      </TutorialContainer>
    </MainContainer>
  );
}

export default LandingPage;
