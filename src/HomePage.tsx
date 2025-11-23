import Logo from "../src/assets/images/Rehoboth logo.png";

import "../src/HomePage.css";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import MissionAndService from "./MissionAndService";
import MainPage from "./MainPage";
import Services from "./Services";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <title>Rehoboth Healthcare Professinals</title>
      <link rel='shortcut icon' type='image/x-icon' href={Logo} />

      <Header />
      <ImageSlider />
      <MissionAndService />
      <MainPage />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
