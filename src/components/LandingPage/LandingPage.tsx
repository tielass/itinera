import TutorialStep from "../../ui/TutorialStep"
import Banner from "../Banner/Banner"
import { MainContainer, Orange } from "./LandingPage.styles"
import Step1 from "../../assets/images/step-1.png"
import Step2 from "../../assets/images/step-2.png"

function LandingPage() {
  return (
    <MainContainer>
        <Banner />
        <h1>How it <Orange>works</Orange></h1>
        <TutorialStep text="Step 1: Do this first" img={Step1} />
        <TutorialStep text="Step 2: Then do this" img={Step2} reverse/>
    </MainContainer>
  )
}

export default LandingPage