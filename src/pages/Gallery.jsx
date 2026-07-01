import Image from "../components/Image";
import PageTransition from "../components/PageTransition";

import pic1 from "../assets/equipment2.jpg";
// import pic2 from "../assets/full-armor.jpg";
import pic3 from "../assets/full-armor2.jpg";
import pic4 from "../assets/full-armor3.jpg";
import pic5 from "../assets/san-antonio-legion.jpg";

export default function Gallery() {
  return (
    <PageTransition>
      <div class="page-layout">
        <Image src={pic5} />
        <p class="text-center">Training location</p>
        <Image src={pic1} />
        {/* <Image src={pic2} /> */}
        <p class="text-center">Community Outreach, 2025</p>
        <Image src={pic3} />
        <Image src={pic4} />
         <div class="flex justify-center py-lg">
            <a
              href="/"
              class="btn btn-primary w-full text-center transition-transform duration-150 ease-out
  active:scale-95 active:opacity-80"
            >
              Back to Home
            </a>
          </div>
      </div>
      
    </PageTransition>
  );
}
