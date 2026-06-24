import Image from "../components/Image";
import PageTransition from "../components/PageTransition";

import pic1 from "../assets/equipment2.jpg";
import pic2 from "../assets/full-armor.jpg";
import pic3 from "../assets/full-armor2.jpg";
import pic4 from "../assets/full-armor3.jpg";
import pic5 from "../assets/san-antonio-legion.jpg";

export default function Gallery() {
  return (
    <PageTransition>
      <div class="page-layout">
        <Image src={pic5} />
        <Image src={pic1} />
        <Image src={pic2} />
        <Image src={pic3} />
        <Image src={pic4} />
      </div>
    </PageTransition>
  );
}
