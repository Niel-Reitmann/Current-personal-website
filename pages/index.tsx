import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Niel Reitmann`}</title>
        <link rel="icon" href="/websitefav.png" />
      </Head>
      <div className="w-full min-h-screen text-gray-500 flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col w-1/1 sm:w-1/2 justify-center min-h-screen p-5 sm:px-5 gap-6 md:gap-10 md:px-0 ">
          <div className="text-3xl sm:text-5xl font-light leading-tight">
            Hello. My name is Niel Reitmann. Currently comp sci student at UNSW
            . Previously product at{" "}
            <a
              href="https://www.startmate.com/ "
              className="text-black hover:underline transition duration-100"
            >
              {" "}
              Startmate
            </a>
            and
            <a
              href="https://www.atlassian.com/ "
              className="text-black hover:underline transition duration-100"
            >
              {" "}
              Atlassian
            </a>
            ,{" "}
            <a
              href="https://www.entrylevel.net/ "
              className="text-black hover:underline transition duration-100"
            >
              {" "}
              EntryLevel
            </a>{" "}
            designer, co-founder of{" "}
            <a
              href="https://drive.google.com/file/d/1qoGOsiCukKNY37tBBAq5Dx2K7zSIo5jv/view"
              className="text-black hover:underline transition duration-100"
            >
              Flaming Galahs
            </a>{" "}
            and{" "}
            <a
              href="https://drive.google.com/file/d/1ri0wYzXAbHVwrk_a10ITqaIVeT0sMwmH/view"
              className="text-black hover:underline transition duration-100"
            >
              Travelator
            </a>
            .
          </div>
          <div className="flex flex-wrap flex-row justify-start items-left gap-3 sm:gap-12">
            <a
              className="text-gray-500"
              href="https://www.linkedin.com/in/niel-reitmann/"
            >
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                LinkedIn
              </div>
            </a>
            <a
              className="text-gray-500"
              href="https://twitter.com/NielReitmann"
            >
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                Twitter
              </div>
            </a>
            <a
              className="text-gray-500"
              href="https://github.com/Niel-Reitmann"
            >
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                GitHub
              </div>
            </a>
            <a className="text-gray-500" href="/blog">
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                Blog
              </div>
            </a>
          </div>

          <div className="projects w-full flex flex-wrap justify-between align-items">
            <div className="flex flex-wrap gap-4 sm:gap-8 justify-between">
              <div className="flex sm:basis-[46%] w-100">
                <div className=" text-gray-500 flex justify-center items-center">
                  <div className="project h-full flex justify-start items-center min-w-100 flex-1-0-20">
                    <img
                      className="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                      src="./SmLogo.jpeg"
                      alt="Startmate"
                    />
                  </div>
                  <div className="flex flex-col flex-grow-0 flex-basis-60% pl-2">
                    <p className="projtitle m-1 text-base lg:text-lg">
                      Startmate
                    </p>
                    <p className="projdesc m-1 text-sm pr-2">
                      The epicentre for startup ambition across Australia and
                      New Zealand.{" "}
                    </p>
                  </div>
                  <div className="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                    <a href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite">
                      <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform text-gray-500">
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex sm:basis-[46%] w-full">
                <div className="text-gray-500 flex justify-center items-center">
                  <div className="project h-full flex justify-start items-center min-w-100 flex-1-0-20">
                    <img
                      className="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                      src="./Flaming Galah Logo.png"
                      alt="Flaming Galahs"
                    />
                  </div>
                  <div className="flex flex-col flex-grow-0 flex-basis-60% pl-2">
                    <p className="projtitle m-1 text-base lg:text-lg">
                      Flaming Galahs
                    </p>
                    <p className="projdesc m-1 text-sm pr-2">
                      A technology collective exclusively for Australia's
                      university students.
                    </p>
                  </div>
                  <div className="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                    <a href="https://galah.community/">
                      <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform text-gray-500">
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex sm:basis-[46%] w-full ">
                <div className="text-gray-500 flex justify-center items-center">
                  <div className="project h-full flex justify-start items-center min-w-100 flex-1-0-20">
                    <img
                      className="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                      src="./Travelator1by1.png"
                      alt="Travelator"
                    />
                  </div>
                  <div className="flex flex-col flex-grow-0 flex-basis-60% pl-2">
                    <p className="projtitle m-1 text-base lg:text-lg">
                      Travelator
                    </p>
                    <p className="projdesc m-1 text-sm pr-2">
                      Pioneering the future of tourism influencer marketing.
                    </p>
                  </div>
                  <div className="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                    <a href="https://youtu.be/2agY80N9i4w">
                      <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform text-gray-500">
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex sm:basis-[46%] w-full text-gray-500 justify-center items-center">
                <div className="project h-full flex justify-start items-center min-w-100 flex-basis-0 sm:flex-1-0-10">
                  <img
                    className="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                    src="./UQIESlogo.png"
                    alt="UQ Innovation & Entrepreneurship Society"
                  />
                </div>
                <div className="flex flex-col flex-grow-0 flex-basis-60 pl-2">
                  <p className="projtitle m-1 text-base lg:text-lg">UQIES</p>
                  <p className="projdesc m-1 text-sm pr-2">
                    The most influential entrepreneurship society at The
                    University of Queensland.
                  </p>
                </div>
                <div className="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                  <a href="https://www.facebook.com/uqiesociety/">
                    <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform text-gray-500">
                      View
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
