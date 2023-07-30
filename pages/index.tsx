import Link from "next/link";
import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Niel Reitmann`}</title>
        <link rel="icon" href="/websitefav.png" />
        <link href="index.css" rel="stylesheet" />
      </Head>

      <div>
        <article className="thumb b">
          <a
            className="thumb-content"
            href=""
            rel="noreferrer"
            aria-label="View Feature"
          >
            <h1 className="thumb-title">Sana Sleep Mask</h1>
            <h2 className="thumb-subtitle">Office for Product Design</h2>
            <figure className="thumb-container">
              <Image
                className="thumbnail-image"
                src=""
                alt=""
                width={600}
                height={400}
              />
            </figure>
          </a>
        </article>
        {/* Rest of the articles go here */}
      </div>
    </>
  );
}

/* <div classNameName="w-full min-h-screen text-gray-500 flex flex-col justify-center items-center bg-white">
        <div classNameName="flex flex-col w-1/1 sm:w-1/2 justify-center min-h-screen p-5 sm:px-5 gap-6 md:gap-10 md:px-0 ">
          <div classNameName="text-3xl sm:text-5xl font-light leading-tight">
            My name is Niel Reitmann. I'm currently a Growth Associate at{" "}
            <a
              href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
              classNameName="text-black hover:underline transition duration-100"
            >
              Startmate
            </a>
            . Previously design at{" "}
            <a
              href="https://www.entrylevel.net/"
              classNameName="text-black hover:underline transition duration-100"
            >
              {" "}
              EntryLevel
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/uqiesociety/"
              classNameName="text-black hover:underline transition duration-100"
            >
              {" "}
              UQIES
            </a>{" "}
            Vice-President, Co-founder of{" "}
            <a
              href="https://drive.google.com/file/d/1qoGOsiCukKNY37tBBAq5Dx2K7zSIo5jv/view"
              classNameName="text-black hover:underline transition duration-100"
            >
              Flaming Galahs
            </a>{" "}
            and{" "}
            <a
              href="https://drive.google.com/file/d/1ri0wYzXAbHVwrk_a10ITqaIVeT0sMwmH/view"
              classNameName="text-black hover:underline transition duration-100"
            >
              Travelator
            </a>
            .
          </div>
          <div classNameName="flex flex-wrap flex-row justify-start items-left gap-3 sm:gap-12">
            {/* <a classNameName="text-gray-500" href="/story">
              <div classNameName="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition-colors duration-200 ease-in">
                Story
              </div>
            </a> */

/* <a
              classNameName="text-gray-500"
              href="https://www.linkedin.com/in/niel-reitmann/"
            >
              <div classNameName="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                LinkedIn
              </div>
            </a>
            <a
              classNameName="text-gray-500"
              href="https://twitter.com/NielReitmann"
            >
              <div classNameName="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                Twitter
              </div>
            </a>
            <a
              classNameName="text-gray-500"
              href="https://github.com/Niel-Reitmann"
            >
              <div classNameName="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                GitHub
              </div>
            </a>
            <a classNameName="text-gray-500" href="/blogpage">
              <div classNameName="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                Blog
              </div>
            </a>
          </div>

          <div classNameName="projects w-full flex flex-wrap justify-between align-items">
            <div classNameName="flex flex-wrap gap-4 sm:gap-8 justify-between">
              <div classNameName="flex sm:basis-[46%] w-100">
                <div classNameName=" text-gray-500 flex justify-center items-center">
                  <div classNameName="project h-full flex justify-start items-center min-w-100 flex-1-0-20">
                    <Image
                      classNameName="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                      src="./SmLogo.jpeg"
                      alt="Project 1"
                    />
                  </div>
                  <div classNameName="flex flex-col flex-grow-0 flex-basis-60% pl-2">
                    <p classNameName="projtitle m-1 text-base lg:text-lg">
                      Startmate
                    </p>
                    <p classNameName="projdesc m-1 text-sm pr-2">
                      The epicentre for startup ambition across Australia and
                      New Zealand.{" "}
                    </p>
                  </div>
                  <div classNameName="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                    <a href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite">
                      <div classNameName="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div classNameName="flex sm:basis-[46%] w-full ">
                <div classNameName="text-gray-500 flex justify-center items-center">
                  <div classNameName="project h-full flex justify-start items-center min-w-100 flex-1-0-20">
                    <Image
                      classNameName="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                      src="./Flaming Galah Logo.png"
                      alt="Project 2"
                    />
                  </div>
                  <div classNameName="flex flex-col flex-grow-0 flex-basis-60% pl-2">
                    <p classNameName="projtitle m-1 text-base lg:text-lg">
                      Flaming Galahs
                    </p>
                    <p classNameName="projdesc m-1 text-sm pr-2">
                      A technology collective exclusively for Australia's
                      university students.
                    </p>
                  </div>
                  <div classNameName="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                    <a href="https://galah.community/">
                      <div classNameName="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div classNameName="flex sm:basis-[46%] w-full ">
                <div classNameName="text-gray-500 flex justify-center items-center">
                  <div classNameName="project h-full flex justify-start items-center min-w-100 flex-1-0-20">
                    <Image
                      classNameName="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                      src="./Travelator1by1.png"
                      alt="Project 3"
                    />
                  </div>
                  <div classNameName="flex flex-col flex-grow-0 flex-basis-60% pl-2">
                    <p classNameName="projtitle m-1 text-base lg:text-lg">
                      Travelator
                    </p>
                    <p classNameName="projdesc m-1 text-sm pr-2">
                      Pioneering the future of tourism influencer marketing.
                    </p>
                  </div>
                  <div classNameName="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                    <a href="https://youtu.be/2agY80N9i4w">
                      <div classNameName="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div classNameName="flex sm:basis-[46%] w-full text-gray-500 flex justify-center items-center">
                <div classNameName="project h-full flex justify-start items-center min-w-100 flex-basis-0 sm:flex-1-0-10">
                  <Image
                    classNameName="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                    src="./UQIESlogo.png"
                    alt="Project 3"
                  />
                </div>
                <div classNameName="flex flex-col flex-grow-0 flex-basis-60 pl-2">
                  <p classNameName="projtitle m-1 text-base lg:text-lg">UQIES</p>
                  <p classNameName="projdesc m-1 text-sm pr-2">
                    The most influential entrepreneurship society at The
                    University of Queensland.
                  </p>
                </div>
                <div classNameName="viewbutton flex items-center flex-grow-0 flex-basis-20 text-sm">
                  <a href="https://www.facebook.com/uqiesociety/">
                    <div classNameName="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                      View
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
