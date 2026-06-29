import Image from "../components/Image";
import PageTransition from "../components/PageTransition";

import pic1 from "../assets/full-armor.jpg";

export default function Contact() {
  return (
    <PageTransition>
      <div class="page-layout ">
        <div class="text-bubble">
          <h3 class="section-header">Get In Touch</h3>
          <div>
            <Image src={pic1} />
          </div>
          <p class="py-sm ">
            Have questions about equipment? Curious about steel fighting? We'd
            love to hear from you!
          </p>
          <div class="bg-ember-dark border-blood-iron border-[0.5px] rounded-sm p-md">
            <h3 class="text-card text-center">Contact Information</h3>
            <div>
              Email: <b>sanantoniolegion@gmail.com</b>
            </div>
            <div>
              Phone: <b>(210) 725-0718</b>
            </div>
            <div>
              Location: <b>5345 Glen Ridge Dr.</b>
              <b>San Antonio, Texas 78229</b>
            </div>
          </div>
        </div>

        <div class="text-bubble ">
          <h3 class="section-header">Send Us a Message</h3>
          <p>
            Tell us a little about yourself, your experience level, and what
            interests you about steel fighting.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/"
            class="flex flex-col gap-md"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="flex flex-col gap-sm text-xs items-start py-sm ">
              <label name="name">
                Name:{" "}
                <input
                  type="text"
                  name="name"
                  class="bg-ash w-full px-sm text-iron-void"
                  required
                />
              </label>
              <label name="email">
                Email:{" "}
                <input
                  type="email"
                  name="email"
                  class="bg-ash w-full px-sm  text-iron-void"
                  required
                />
              </label>
              <label name="phone">
                Phone:{" "}
                <input
                  type="tel"
                  name="phone"
                  class="bg-ash w-full px-sm  text-iron-void"
                  required
                />
              </label>
            </div>
            <label name="message">
              Message:
              <textarea
                type="text"
                name="message"
                class="bg-ash w-full text-iron-void"
              />
            </label>
            <button
              type="submit"
              class="btn btn-primary w-full text-center transition-transform duration-150 ease-out
  active:scale-95 active:opacity-80"
            >
              Send
            </button>
          </form>
        </div>
        <div class="text-bubble ">
          <h3 class="section-header">Join the Community</h3>
          <p>
            Steel fighting is growing in San Antonio, and there's never been a
            better time to become part of it. Come train, learn, compete, and
            help build the future of the sport with us. Your journey starts
            here.
          </p>
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
      </div>
    </PageTransition>
  );
}

//  Whether you're completely new to the sport or
//           already have martial arts experience, reach out and we'll help you get
//           started.
