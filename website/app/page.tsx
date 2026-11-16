
"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#392b30]">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 md:px-16 py-5 bg-white">
        <div>
          <h1 className="text-2xl font-serif font-bold tracking-wide text-[#a65c70]">
            SUNITA MAKEOVER
          </h1>
          <p className="text-[10px] tracking-[4px] text-gray-500">
            BEAUTY & WELLNESS STUDIO
          </p>
        </div>

        <div className="flex flex-nowrap items-center justify-between gap-3 text-xs whitespace-nowrap overflow-x-auto w-full md:w-auto">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#booking"
          className="bg-[#a65c70] text-white px-5 py-3 rounded-full text-sm text-center hover:bg-[#87475b]"
        >
          Book Appointment
        </a>
      </nav>
      <div className="bg-[#fff9f6] py-4 px-6 flex flex-wrap justify-center gap-6 text-sm text-[#a65c70]">
        <Link href="/consultation">AI Beauty Consultation</Link>
        <Link href="/chat">AI Chat Assistant</Link>
        <Link href="/content-generator">AI Content Generator</Link>
        <Link href="/automated-messages">WhatsApp & SMS</Link>
      </div>

      {/* Hero */}
      <section
        id="home"
        className="min-h-[600px] flex items-center px-6 md:px-16 py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,250,248,.97) 0%, rgba(255,250,248,.88) 48%, rgba(255,250,248,.12) 100%), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600')",
        }}
      >
        <div className="max-w-xl">
          <p className="uppercase tracking-[5px] text-[#a65c70] text-sm mb-5">
            Beauty • Elegance • Confidence
          </p>

          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            Reveal Your
            <span className="block italic text-[#a65c70]">
              Beautiful Self
            </span>
          </h2>

          <p className="text-gray-600 leading-8 mb-9 max-w-md">
            Experience beauty, care and elegance with our professional
            beauty services. Let us make every moment special.
          </p>

          <a
            href="#booking"
            className="inline-block bg-[#a65c70] text-white px-9 py-4 rounded-full hover:bg-[#87475b]"
          >
            Book Your Visit →
          </a>
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="py-20 px-6 text-center">
        <p className="text-[#a65c70] tracking-[4px] text-sm mb-4">
          WELCOME TO OUR STUDIO
        </p>
        <h2 className="text-4xl font-serif mb-5">
          Your Beauty, Our Passion
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-8">
          At Sunita Makeover, we believe every person deserves to feel
          beautiful and confident. Discover beauty services designed
          with care, creativity and attention to detail.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#f8eeed] py-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <p className="text-[#a65c70] tracking-[4px] text-sm mb-3">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl font-serif">Our Beauty Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {[
            ["💄", "Bridal Makeup", "Look unforgettable on your special day."],
            ["✂️", "Hair Styling", "Beautiful styles for every occasion."],
            ["🌸", "Facial & Skincare", "Care and glow for your skin."],
            ["💅", "Nail Art", "Elegant details to complete your look."],
            ["✨", "Party Makeup", "Get ready to shine at every event."],
            ["🧖‍♀️", "Beauty Treatments", "Relax, refresh and feel beautiful."],
          ].map(([icon, name, description]) => (
            <div
              key={name}
              className="bg-white p-9 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="text-2xl font-serif mb-3">{name}</h3>
              <p className="text-gray-500 text-sm leading-7">
                {description}
              </p>
              <p className="text-[#a65c70] text-sm font-medium mt-3">
                Contact for Pricing
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <p className="text-[#a65c70] tracking-[4px] text-sm mb-3">
            OUR WORK
          </p>
          <h2 className="text-4xl font-serif">Beauty Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "photo-1487412720507-e7ab37603c6f",
            "photo-1522335789203-aabd1fc54bc9",
            "photo-1512496015851-a90fb38ba796",
          ].map((photo) => (
            <div
              key={photo}
              className="h-64 md:h-80 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/${photo}?w=700)`,
              }}
            />
          ))}
        </div>
      </section>
      {/* Before & After Gallery */}
      <section className="py-20 px-6 bg-[#fff9f6]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#a65c70] tracking-widest text-sm mb-3">
            OUR TRANSFORMATIONS
          </p>
          <h2 className="text-4xl font-serif text-center mb-4">
            Before & After
          </h2>
          <p className="text-center text-gray-500 mb-10">
            See the beauty of our transformations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-56 bg-[#f8eeed] rounded-xl flex items-center justify-center text-gray-500">
                  Before
                </div>
                <div className="h-56 bg-[#f8eeed] rounded-xl flex items-center justify-center text-gray-500">
                  After
                </div>
              </div>
              <h3 className="text-center font-semibold mt-4">
                Makeup Transformation
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-56 bg-[#f8eeed] rounded-xl flex items-center justify-center text-gray-500">
                  Before
                </div>
                <div className="h-56 bg-[#f8eeed] rounded-xl flex items-center justify-center text-gray-500">
                  After
                </div>
              </div>
              <h3 className="text-center font-semibold mt-4">
                Beauty Transformation
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews & Testimonials */}
      <section className="py-20 px-6 bg-[#fff9f6]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#a65c70] tracking-widest text-sm mb-3">
            CUSTOMER LOVE
          </p>

          <h2 className="text-4xl font-serif mb-4">
            Reviews & Testimonials
          </h2>

          <p className="text-gray-500 mb-10">
            Your experience matters to us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Customer Review 1", "Customer Review 2", "Customer Review 3"].map((review) => (
              <div key={review} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-[#c6a66b] text-2xl mb-4">★★★★★</p>
                <p className="text-gray-500 mb-5">
                  Customer feedback will be added here.
                </p>
                <h3 className="font-semibold text-[#a65c70]">
                  {review}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Special Offers & Packages */}
      <section className="py-20 px-6 bg-[#f8eeed]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#a65c70] tracking-widest text-sm mb-3">
            SPECIAL OFFERS
          </p>
          <h2 className="text-4xl font-serif mb-4">
            Special Offers & Packages
          </h2>
          <p className="text-gray-500 mb-10">
            Details of our latest offers and beauty packages will be added here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Beauty Package 1", "Beauty Package 2", "Beauty Package 3"].map((offer) => (
              <div key={offer} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-serif text-[#a65c70] mb-4">
                  {offer}
                </h3>
                <p className="text-gray-500">
                  Offer details and pricing will be announced soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Booking */}
      <section id="booking-intro" className="bg-[#a65c70] text-white py-20 px-6 text-center">
        <p className="tracking-[4px] text-sm mb-4">YOUR BEAUTY JOURNEY STARTS HERE</p>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Ready for a Beautiful Transformation?
        </h2>
        <p className="mb-8 text-white/80">
          Contact us to enquire about your appointment.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-[#a65c70] px-9 py-4 rounded-full font-semibold"
        >
          Contact Us →
        </a>
      </section>
      {/* Appointment Booking */}
      <section id="booking" className="py-20 px-6 bg-[#f8eeed]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#a65c70] tracking-widest text-sm mb-3">
            BOOK YOUR VISIT
          </p>
          <h2 className="text-4xl font-serif mb-4">
            Book an Appointment
          </h2>
          <p className="text-gray-500 mb-10">
            Choose your service and request your appointment.
          </p>
          <form
            className="bg-white p-8 rounded-2xl shadow-sm text-left space-y-5"
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);

              const appointment = {
                name: formData.get("name"),
                phone: formData.get("phone"),
                service: formData.get("service"),
                date: formData.get("date"),
              };

              const oldAppointments = JSON.parse(
                localStorage.getItem("appointments") || "[]"
              );

              oldAppointments.push(appointment);

              localStorage.setItem(
                "appointments",
                JSON.stringify(oldAppointments)
              );

              alert("Your appointment has been saved!");
              e.currentTarget.reset();
            }}
          >
            <div>
              <label className="block mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your mobile number"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Select Service</label>
              <select name="service" required className="w-full border rounded-lg p-3">
                <option value="">Choose a service</option>
                <option>Bridal Makeup</option>
                <option>Hair Styling</option>
                <option>Facial & Skincare</option>
                <option>Nail Art</option>
                <option>Party Makeup</option>
                <option>Beauty Treatments</option>
              </select>
            </div>

            <div>
              <label className="block mb-2">Appointment Date</label>
              <input
                type="date"
                name="date"
                required
                min="2026-11-16"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#a65c70] text-white py-4 rounded-full font-semibold hover:bg-[#873f55]"
            >
              Request Appointment
            </button>
          </form>
        </div>
      </section>{/* Team Introduction */}
      <section className="py-20 px-6 bg-[#fff9f6]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#a65c70] tracking-widest text-sm mb-3">
            MEET OUR TEAM
          </p>
          <h2 className="text-4xl font-serif mb-4">
            Team Introduction
          </h2>
          <p className="text-gray-500 mb-10">
            Meet the talented team behind Sunita Makeover.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Team Member 1", "Team Member 2", "Team Member 3"].map((member) => (
              <div key={member} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-24 h-24 rounded-full bg-[#f8eeed] mx-auto mb-5 flex items-center justify-center text-[#a65c70] text-3xl">
                  ✨
                </div>
                <h3 className="text-xl font-serif text-[#a65c70]">
                  {member}
                </h3>
                <p className="text-gray-500 mt-2">
                  Beauty Professional
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      {/* Customer Inquiry Form */}
      <section className="py-20 px-6 bg-[#f8eeed]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#a65c70] tracking-widest text-sm mb-3">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl font-serif mb-4">
            Customer Inquiry
          </h2>
          <p className="text-gray-500 mb-10">
            Have a question? Send us a message.
          </p>

          <form
            className="bg-white p-8 rounded-2xl shadow-sm text-left space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);

              const inquiry = {
                name: formData.get("inquiryName"),
                phone: formData.get("inquiryPhone"),
                message: formData.get("message"),
              };

              const oldInquiries = JSON.parse(
                localStorage.getItem("inquiries") || "[]"
              );

              oldInquiries.push(inquiry);
              localStorage.setItem("inquiries", JSON.stringify(oldInquiries));

              alert("Your inquiry has been saved!");
              e.currentTarget.reset();
            }}
          >
            <div>
              <label className="block mb-2">Your Name</label>
              <input
                name="inquiryName"
                required
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Mobile Number</label>
              <input
                name="inquiryPhone"
                type="tel"
                required
                placeholder="Enter your mobile number"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Your Message</label>
              <textarea
                name="message"
                required
                placeholder="Write your question here"
                className="w-full border rounded-lg p-3"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#a65c70] text-white py-4 rounded-full font-semibold"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-serif mb-5">Visit Sunita Makeover</h2>
        <p className="text-gray-500 mb-7">
          We would love to welcome you to our beauty studio.
        </p>
        <a
          href="mailto:hello@sunitamakeover.com"
          className="text-[#a65c70] underline"
        >
          Contact us by
          <div className="mt-8 max-w-3xl mx-auto">
            <iframe
              src="https://www.google.com/maps?q=Baliar+Khurd,+Rewari,+Haryana+123401&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="Sunita Makeover Location"
            />
            <p className="mt-4 text-gray-500">
              Baliar Khurd, Rewari, Haryana - 123401
            </p>
          </div>
        </a>
      </section>

      <footer className="bg-[#35252b] text-white text-center py-8">
        <h3 className="font-serif text-xl mb-2">SUNІTA MAKEOVER</h3>
        <p className="text-sm text-white/60">
          Beauty & Wellness Studio
        </p>
        <p className="text-xs text-white/40 mt-5">
          © 2026 Sunita Makeover. All rights reserved.
        </p>
      </footer>
      {/* WhatsApp Booking Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg font-semibold z-50"
      >
        WhatsApp Booking
      </a>
    </main>
  );
}
