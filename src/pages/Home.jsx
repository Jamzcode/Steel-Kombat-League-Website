// import Image from "../components/Image";
import Hero from "../components/Hero";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div class="page-layout">
        {/* HERO section */}
        <div>
          <Hero />
        </div>
        <section>
          <h2 class="text-section uppercase text-center py-md ">
            Forge Your Skills. Test Your Steel.
          </h2>
          <div class="text-bubble text-body ">
            <p>
              Welcome to San Antonio's newest steel fighting community. We're
              building something special: a fast-paced, hard-hitting martial art
              that combines <b class="text-xl">steel fighting</b> with the
              explosive striking principles and athleticism of{" "}
              <b class="text-xl">Muay Thai</b>. Whether you're an experienced
              fighter, martial artist, history enthusiast, or someone looking
              for an unforgettable challenge, you've found your tribe.
            </p>
          </div>
        </section>
        <section>
          <div class="text-bubble ">
            <h3 class="section-header">Why Train With Us?</h3>
            <p>
              Steel fighting isn't just about armor and weapons—it's about
              discipline, technique, conditioning, and the thrill of stepping
              onto the field ready to compete. Learn authentic steel fighting
              fundamentals:{" "}
            </p>
            <ul>
              <li>+Build strength, endurance, and confidence</li>
              <li>+Train in a welcoming team environment</li>
              <li>+Develop striking and movement inspired by Muay Thai</li>
            </ul>
            <p>
              Join a growing combat sport community in San Antonio and challenge
              yourself in a way few sports can.
            </p>
          </div>
        </section>
        <section>
          <div class="text-bubble ">
            <h3 class="section-header">
              A New Sport Is Rising in San Antonio.
            </h3>
            <p>
              Steel fighting is gaining momentum across the country, and we're
              proud to help bring this exciting combat sport to South Texas. Our
              goal is simple:{" "}
              <span class="text-blood-iron">
                build a strong community of fighters who love learning,
                competing, and pushing their limits.
              </span>{" "}
              Whether you dream of stepping into competition or simply want a
              unique way to train, now is the perfect time to get involved.
            </p>
            <p>
              Become part of San Antonio's next generation of steel fighters.
              Grab your gear, bring your determination, and start training with
              us today.
            </p>
            <div class="flex justify-center py-lg">
              <a
                href="/about"
                class="btn btn-primary w-full text-center transition-transform duration-150 ease-out
  active:scale-95 active:opacity-80"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
