import "./App.css";
import ColorPicker from "./components/ColorPicker";
import ImageGrid from "./components/ImageGrid";
import Pricing from "./components/Pricing";
import Sizes from "./components/Sizes";
import StarRating from "./components/StarRating";
import Quantity from "./components/Quantity";
import Button from "./components/Button";
import Description from "./components/Description";

function App() {
  return (
    <div className="py-[64px] px-[32px]">
      <ImageGrid />
      <h1 className="font-semibold text-3xl text-neutral-900 pt-[48px] pb-[20px]">
        Voyager Hoodie
      </h1>
      <Pricing />
      <StarRating />
      <p className="text-neutral-600 pb-[32px]">
        The Voyager Hoodie is for the explorer at heart. Its durable fabric and
        roomy pockets are perfect for those who are always searching for the
        next adventure.
      </p>
      <ColorPicker />
      <Sizes />
      <Quantity />
      <Button />
      <Description />
    </div>
  );
}

export default App;
