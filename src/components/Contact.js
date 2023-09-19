import React from "react";

export default function Contact() {
  return (
    <>
      <hr className="w-4/5 mx-auto" />
      <section id="contact" className="containerr pt-12 pb-52 md:pt-24 lg:pt-24 text-white text-center">
        <div className="mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Contact Me</h2>
          <div className="space-y-2 mt-6 md:mt-9 md:flex md:flex-col md:items-center">
            <p className="text-base md:text-lg">
              <a href="mailto:your.email@example.com" className="font-semibold">
                farhanhasan295@gmail.com
              </a>
            </p>
            <p className="text-base md:text-lg font-semibold">
              <a href="tel:01641991515" className="">
                +880 1641991515
              </a>
            </p>
            <div className="flex pt-3 justify-center items-center space-x-6">
              <a href="https://facebook.com/farhan.jabill" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook text-2xl md:text-3xl"></i>
              </a>
              <a href="https://instagram.com/farhan_jabil" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram text-2xl md:text-3xl"></i>
              </a>
              <a href="https://github.com/farhan-jabil" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github text-2xl md:text-3xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/farhan-hasan-751066162" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin text-2xl md:text-3xl"></i>
              </a>
            </div>
          </div>
          {/* Add any additional contact information or a contact form here */}
        </div>
      </section>
    </>
  );
}
