const ContactPage = () => {
  return (
    <section className="body-font relative text-gray-600">
      <div className="contactMap absolute inset-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.207264704306!2d19.2407667!3d42.442594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb261ab478b7%3A0x841bb5a318032bf5!2sFaculty%20of%20Electrical%20Engineering!5e0!3m2!1sen!2s!4v1722477958438!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          title="map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container mx-auto flex px-5 py-24">
        <div className="contactForm relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
          <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
            Feedback
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              defaultValue={""}
            />
          </div>
          <button className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            Button
          </button>
          <p className="mt-3 text-xs text-gray-500">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
