import MovieCard from "./components/MovieCard";
import Header from "./components/Header.jsx";
import Footer from "./components/Accordion.jsx";
import Jokes from "./components/Jokes.jsx";
import MyTravelJournal from "./components/MyTravelJournal.jsx";
import mount from "../src/images/mount.jpg";
import JokesData from "./components/JokesData.js";
import Accordion from "./components/Accordion.jsx";
import RandomColor from "./components/randomColor.jsx";
import StarRating from "./components/star-rating.jsx";
import ImageSlider from "./Image slider/ImageSlider.jsx";
import LoadMoreData from "./components/load-more-data/loadMoreData.jsx";
import TreeView from "./components/tree view/TreeView.jsx";
import menus from "./components/tree view/data";
import QRCodeGenerator from "./components/QrCode/QrCode.jsx";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode.jsx";
import ScrollIndicator from "./components/customScrollIndicator/ScrollIndicator.jsx";

function App() {
  return (
    <>
      {<Accordion />
      <RandomColor />
      <StarRating noOfStars={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData />
      <TreeView menus={menus} />
      {<QRCodeGenerator />
      <LightDarkMode />}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}
export default App;
