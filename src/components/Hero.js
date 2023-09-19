import React from "react";
import Typewriter from "typewriter-effect";
import { images } from "../utils/demo_images";

export default function Hero() {
  const documentPath = "../documents/Farhan_Hassan_Jabil.pdf";
  const fileName = "Farhan_Hassan_Jabil.pdf";

  const handleDownloadClick = () => {
    fetch(documentPath)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = blobURL;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.download = fileName;
        link.click();
        link.remove();
      });
  };
  return (
    <>
      <section id="hero">
        <div className="containerr flex flex-col md:flex-row justify-between w-[80%] m-auto py-8 lg:py-32">
          <div className="flex items-center">
            <div className="">
              <p className="text-[15px] lg:text-[25px] font-[400] text-[#ffffff]">
                Hi, I'm
              </p>
              <p className="text-[30px] lg:text-[60px] font-[500] text-[#ffffff]">
                Farhan Hassan Jabil
              </p>
              <div className="text-[20px] lg:text-[35px] font-[600] text-[#ffffff]">
                <Typewriter
                  options={{
                    strings: ["Software Engineer", "Front-End Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="flex flex-col lg:flex-row w-[70%] mx-auto lg:w-auto mt-7 lg:mt-9 lg:space-x-6 space-y-4 lg:space-y-0">
                <button
                  onClick={handleDownloadClick}
                  className="text-[white] bg-[#1e2167] border-[2px] border-solid border-[white] hover:text-white transition duration-[.3s] hover:ease-out text-[14px] lg:text-[16px] py-[8px] lg:py-[10px] px-[16px] lg:px-[20px] font-[600] tracking-[1px] rounded-md"
                >
                  Download CV
                </button>

                <button className="text-[white] bg-[#1e2167] border-[2px] border-solid border-[white] hover:text-white transition duration-[.3s] hover:ease-out text-[14px] lg:text-[16px] py-[8px] lg:py-[10px] px-[16px] lg:px-[20px] font-[600] tracking-[1px] rounded-md">
                  <a
                    href="https://github.com/farhan-jabil"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Github
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-40 h-40 lg:w-56 lg:h-56 mx-auto lg:mx-0 mt-8 lg:mt-0 rounded-full my-auto shadow-md border-2 border-white">
            <img
              src={images.hero}
              className="w-full h-full block rounded-full"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
