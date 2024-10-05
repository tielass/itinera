import "./App.css";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTopButton from "./ui/ScrollToTopButton";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
