import TutorialStep from "../../ui/TutorialStep";
import Banner from "../Banner/Banner";
import {
  BoldText,
  MainContainer,
  Orange,
  TutorialContainer,
  TutorialHeader,
} from "./LandingPage.styles";
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
          text={
            <span>
              Install the Google <BoldText>Chrome extension</BoldText> on your
              device
            </span>
          }
          img={Step1}
          reverse
        />
        <TutorialStep
          title="Step 2"
          text={
            <span>
              Open Google Calendar in the <BoldText>Google Chrome</BoldText>{" "}
              browser
            </span>
          }
          img={Step2}
        />
        <TutorialStep
          title="Step 3"
          text={
            <span>
              Click on the <BoldText>extension icon</BoldText> on the top right
            </span>
          }
          img={Step3}
          reverse
        />
        <TutorialStep
          title="Step 4"
          text={
            <span>
              Navigate to the button on the right of the page and click on the
              <BoldText> orange button</BoldText>
            </span>
          }
          img={Step4}
        />
        <TutorialStep
          title="Step 5"
          text={
            <span>
              Type the <BoldText>destination</BoldText> you are planning to
              visit
            </span>
          }
          img={Step5}
          reverse
        />
        <TutorialStep
          title="Step 6"
          addText={
            <span>
              <Orange>AI Feature (OpenAI) </Orange>🤖
            </span>
          }
          text={
            <span>
              <BoldText>Browse</BoldText> through activities and read{" "}
              <BoldText>more details</BoldText> about the attractions
            </span>
          }
          img={Step6}
        />
        <TutorialStep
          title="Step 7"
          text={
            <span>
              <BoldText>Drag</BoldText> the chosen activities
            </span>
          }
          img={Step7}
          reverse
        />
        <TutorialStep
          title="Step 8"
          text={
            <span>
              Here you go - you have a <BoldText>plan for your trip!</BoldText>
            </span>
          }
          img={Step8}
        />
      </TutorialContainer>
    </MainContainer>
  );
}

export default LandingPage;
