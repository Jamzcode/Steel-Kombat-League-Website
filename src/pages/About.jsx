import Image from "../components/Image";
import PageTransition from "../components/PageTransition";

import pic1 from "../assets/headshot.jpeg";

export default function About() {
  return (
    <PageTransition>
      <div class="page-layout">
        <Image src={pic1} size="w-120 h-120"/>
        <div class="text-bubble ">
          <h3 class="section-header">About Us</h3>
          {/* <p>Built by a Local Fighter </p> */}

          <p>
            Founded by a San Antonio native and steel enthusiast, our club was
            created to give local fighters a place to learn, train, and grow
            together. Coach John has been a dedicated steel fighting enthusiast
            for years and brings a fighter's mindset to every training session.
            Alongside a love for armored combat, John has spent the last three
            years training in Muay Thai, developing a fusion style that
            emphasizes movement, pressure, timing, conditioning, and powerful
            striking mechanics into the steel fighting arena.{" "}
            <span class="text-blood-iron">
              <b>
                The result is a fighting style that blends the excitement of
                steel fighting with proven Muay Thai martial arts principles.
              </b>
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
        <div class="text-bubble bg-ember-dark border-blood-iron border-[0.5px] rounded-sm">
          <h3 class="section-header">Training Schedule</h3>
          <h3 class="uppercase">
            <b>Training Days:</b>
          </h3>
          <ul>
            <li>
              Monday 7-8pm <i>soft kit training</i>
            </li>
            <li>
              Tuesday 7-8pm <i>steel Muay Thai</i>
            </li>
            <li>
              Wednesday 7-8pm <i>steel Muay Thai</i>
            </li>
            <li>
              Thursday 6-8pm{" "}
              <i>
                Steel-on-Steel fighting Applied combat training, sparring
                drills, scenario work, and team development.
              </i>
            </li>
          </ul>
          <br />

          <h3 class="uppercase">
            <b>Training Class structure 60 minutes:</b>
          </h3>
          <ul>
            <li> Warmup (Muay Thai, jog, lunges, etc.) bag warmup</li>
            <li>
              {" "}
              Technique 1, 1st round, <i>break</i>
            </li>{" "}
            <li>
              {" "}
              Technique 2, 2nd round, <i>break</i>
            </li>{" "}
            <li>
              {" "}
              Technique 3, 3rd round, <i>break</i>
            </li>{" "}
            <li> Sparring (3 rounds, 4mins each, breaks. 20 minutes)</li>
            <li> Closing and shut down</li>
          </ul>
          <br />
          <p>
            <i>
              Every training session focuses on fundamentals, safety movements, footwork,
              Muay Thai-inspired striking mechanics, steel weapon handling
              techniques, endurance training, and skills development.
            </i>
          </p>
          <br />
          <p class="uppercase">
            <b>New members are always welcome!</b>
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
