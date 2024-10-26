import "./index.css";
import Header from "./components/Common/Header";
import Herosec from "./components/hero-seaction/Herosec";
import PopulorSales from "./components/populerSales/PopulorSales";
import TopRates from "./components/TopRates/TopRates";
import Highlight1 from "./components/Highlights/Highlight1";
import Highlight2 from "./components/Highlights/Highlight2";
import Footer from "./components/Common/Footer";
import "react-toastify/dist/ReactToastify.css";
import Stories from "./components/topStories/Stories";
function App() {
  return (
    <>
      <Header />
      <Herosec />
      <PopulorSales />
      <Highlight1 />
      <TopRates />
      <Highlight2 />
      <Stories />
      <Footer />
    </>
  );
}

export default App;
