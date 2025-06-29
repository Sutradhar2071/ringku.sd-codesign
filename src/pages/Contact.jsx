import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmm93at",
        "template_h9dxise",
        e.target,
        "cMCQWfLkEsCn_fgpQ"
      )
      .then((result) => {
        console.log("Email sent: ", result.text);
        Swal.fire("✅ Message Sent!", "Thanks for contacting me.", "success");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email send error: ", error.text);
        Swal.fire("❌ Failed!", "Please try again later.", "error");
      });
  };

  return (
    <section className="py-20 px-6 bg-base-200 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12 underline underline-offset-8">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 📞 Contact Info */}
          <div className="space-y-6 text-base-content text-lg bg-base-100 rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary text-2xl mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:sutradharringku@gmail.com"
                  className="text-accent hover:underline break-words"
                >
                  sutradharringku@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary text-2xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:+8801911041674"
                  className="text-accent hover:underline"
                >
                  +880 1911-041674
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-green-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <a
                  href="https://wa.me/8801911041674"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold">Location</p>
                <span>Mugda, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* 📬 Contact Form */}
          <form
            onSubmit={sendEmail}
            className="card bg-base-100 p-8 space-y-4 shadow-md rounded-xl"
          >
            <div>
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-semibold">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Your Country"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label font-semibold">Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              📩 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
