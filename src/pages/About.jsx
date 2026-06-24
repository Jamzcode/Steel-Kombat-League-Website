import Image from "../components/Image";
import PageTransition from "../components/PageTransition";

import pic1 from "../assets/equipment.jpg";

export default function About() {
  return (
    <PageTransition>
      <div class="page-layout">
        <Image src={pic1} />
        <div class="text-bubble ">
          <h3 class="section-header">About Us</h3>
          {/* <p>Built by a Local Fighter </p> */}

          <p>
            Founded by a San Antonio native with a passion for steel combat, our
            club was created to give local fighters a place to learn, train, and
            grow together. Our coach has been a dedicated steel fighting
            enthusiast for years and brings a fighter's mindset to every
            training session. Alongside a love for armored combat, he has spent
            the last three years training Muay Thai, developing a style that
            emphasizes movement, pressure, timing, conditioning, and powerful
            striking mechanics.{" "}
            <span class="text-blood-iron">
              The result is a training environment that blends the excitement of
              steel fighting with proven martial arts principles.
            </span>
          </p>
        </div>
        <div class="text-bubble ">
          <h3 class="section-header"> Our Mission</h3>
          <p>
            To build a welcoming community where beginners and experienced
            fighters alike can learn the sport, sharpen their skills, and
            represent San Antonio as steel fighting continues to grow.
          </p>
        </div>
        <div class="text-bubble ">
          <h3 class="section-header">Who Can Join?</h3>
          <p>
            Everyone. Seriously. Whether you've never worn armor before or
            already have combat experience, we'll help you develop the skills
            needed to train safely and effectively. If you enjoy martial arts,
            historical combat, competition, fitness, or simply trying something
            new, you'll fit right in.
          </p>
        </div>
        {/* Create separate training schedule page? */}
        <div class="text-bubble ">
          <h3 class="section-header">Training Schedule</h3>
          <p>
            Weekly Training Sessions Monday 7:00 PM - 9:00 PM Technical
            instruction, footwork, striking drills, partner work, and
            conditioning. Friday 7:00 PM - 9:00 PM Applied combat training,
            sparring drills, scenario work, and team development. What to Expect
            Every session focuses on: Fundamentals and safety Movement and
            footwork Muay Thai-inspired striking mechanics Steel weapon handling
            Conditioning and endurance Controlled sparring and skill development
            New members are always welcome.
          </p>
        </div>
        <div class="text-bubble ">
          <p>
            <h3 class="section-header">Ready to Train?</h3>
            The best time to start is now. Join us on the training field and
            discover what steel fighting is all about.
          </p>
          <div class="flex justify-center py-lg">
            <a
              href="/contact"
              class="btn btn-primary w-full text-center transition-transform duration-150 ease-out
  active:scale-95 active:opacity-80"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
