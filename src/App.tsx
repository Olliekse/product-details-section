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
    <div className="min-[375px]:w-[100%] min-[1440px]:w-[1280px] min-[375px]:py-[16px] min-[375px]:px-[16px] min-[768px]:py-[16px] min-[768px]:px-[32px] min-[1440px]:grid min-[1440px]:grid-cols-2">
      <ImageGrid />
      <div className="min-[1440px]:pl-[32px] min-[1440px]:py-[96px]">
        <h1 className="font-semibold text-3xl text-neutral-900 pt-[48px] pb-[20px] min-[1440px]:text-font-semibold min-[1440px]:text-5xl min-[1440px]:pt-[0]">
          Voyager Hoodie
        </h1>
        <Pricing />
        <StarRating rating={4.1} />
        <p className="text-neutral-600 pb-[32px]">
          The Voyager Hoodie is for the explorer at heart. Its durable fabric
          and roomy pockets are perfect for those who are always searching for
          the next adventure.
        </p>
        <ColorPicker />
        <Sizes />
        <Quantity />
        <Button />
        <Description />
      </div>
    </div>
  );
}

export default App;
