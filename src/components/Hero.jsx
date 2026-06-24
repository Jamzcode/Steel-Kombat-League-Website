import Image from "./Image";
import SKLlogo from "../assets/SKL-logo.jpg";

export default function Hero() {
  return (
    <div class="flex flex-col">
      <h1 class="section-header text-hero font-display mb-xl">
        Steel Kombat League | San Antonio
      </h1>
      <div class="flex justify-center ">
        <Image src={SKLlogo} size="w-full h-full" />
      </div>
    </div>
  );
}
