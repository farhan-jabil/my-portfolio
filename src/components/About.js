import React from "react";

export default function About() {
  return (
    <>
      <hr className="w-4/5 mx-auto" />
      <section id="about" className="containerr">
        <div className="mx-auto text-left space-y-10 py-12 md:py-24 lg:py-28">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-300 mb-4">
            About Me
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 mb-6">
            Hello, I'm Farhan Hassan Jabil, a passionate software engineer with
            a deep-rooted expertise in front-end development, specializing in
            React and Tailwind. With a strong foundation in modern web
            technologies and a knack for crafting elegant user interfaces, I'm
            dedicated to delivering exceptional digital experiences.
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-300 mb-4">
            What I Bring to the Table
          </h3>
          <p className="text-lg lg:text-xl text-gray-400 mb-6">
            As a seasoned developer, I thrive on turning complex ideas into
            intuitive and visually appealing web applications. My proficiency
            extends beyond React, Node.js, Express.js,
            MongoDB, and Mongoose. This versatile skill set allows me to
            seamlessly bridge the gap between front-end and back-end
            development, creating cohesive and feature-rich solutions.
          </p>

          {/* ... (remaining content remains the same) ... */}

          <h3 className="text-xl lg:text-2xl font-semibold text-gray-300 mb-4">
            Let's Collaborate
          </h3>
          <p className="text-lg lg:text-xl text-gray-400">
            If you're looking for a front-end development expert who can
            transform your vision into a pixel-perfect reality, I'd love to
            hear from you. Feel free to reach out, and let's embark on an
            exciting journey of creating stunning and user-friendly web
            experiences together.
          </p>
        </div>
      </section>
    </>
  );
}
