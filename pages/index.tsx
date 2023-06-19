import Link from "next/link";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen text-gray-500 flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col w-1/1 sm:w-1/2 justify-center min-h-screen p-5 sm:px-5 gap-6 md:gap-10 md:px-0 ">
          <div className="introheader text-3xl sm:text-5xl font-light">
            My name is Niel Reitmann. I'm currently a Growth Associate at{" "}
            <a
              href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
              className="text-black hover:underline transition duration-100"
            >
              Startmate
            </a>
            . Previously design at{" "}
            <a
              href="https://www.entrylevel.net/"
              className="text-black hover:underline transition duration-100"
            >
              {" "}
              EntryLevel
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/uqiesociety/"
              className="text-black hover:underline transition duration-100"
            >
              {" "}
              UQIES
            </a>{" "}
            Vice-President, Co-founder of{" "}
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
            {/* <a className="text-gray-500" href="/story.html">
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition-colors duration-200 ease-in">
                Story
              </div>
            </a> */}
            <a
              className="text-gray-500"
              href="https://www.linkedin.com/in/niel-reitmann/"
            >
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition-colors duration-200 ease-in">
                LinkedIn
              </div>
            </a>
            <a
              className="text-gray-500"
              href="https://twitter.com/NielReitmann"
            >
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition-colors duration-200 ease-in">
                Twitter
              </div>
            </a>
            <a
              className="text-gray-500"
              href="https://github.com/Niel-Reitmann"
            >
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition-colors duration-200 ease-in">
                GitHub
              </div>
            </a>
            <a className="text-gray-500" href="/blogpage">
              <div className="social-btn inline-flex relative items-center font-normal rounded-md shadow-sm px-6 py-1 transition-colors duration-200 ease-in">
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
                      alt="Project 1"
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
                      <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
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
                      src="./Flaming Galah Logo.png"
                      alt="Project 2"
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
                      <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
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
                      alt="Project 3"
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
                      <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
                        View
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex sm:basis-[46%] w-full text-gray-500 flex justify-center items-center">
                <div className="project h-full flex justify-start items-center min-w-100 flex-basis-0 sm:flex-1-0-10">
                  <img
                    className="h-[75px] w-[75px] max-w-none border-2 border-gray-400 rounded-2xl"
                    src="./UQIESlogo.png"
                    alt="Project 3"
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
                    <div className="btnsecondary inline-flex items-center relative rounded-md border border-gray-300 shadow-sm px-3 py-1 transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-gray-200 hover:via-gray-100 hover:to-gray-200 hover:transform">
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

// v2

//     <div className="container mx-auto">
//       <Head>
//         <title>Niel Reitmann</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="data:image/svg+xml,&lt;svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'&gt;&lt;text x='0' y='80' style='font-size:90px; font-weight:bold;'&gt;&#x1F680;&lt;/text&gt;&lt;/svg&gt;" />
//       </Head>

//       <div className="flex flex-col items-center justify-center min-h-screen h-full max-w-screen-xl mx-auto gap-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
//         <div className="topsection flex flex-col gap-4 w-full">
//           <div className="introheader">
//             My name is Niel Reitmann. I'm currently a Growth Associate at{' '}
//             <a
//               href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
//               className="text-blue-500 hover:underline"
//             >
//               Startmate
//             </a>
//             . Previously design at{' '}
//             <a href="https://www.entrylevel.net/" className="text-blue-500 hover:underline">
//               EntryLevel
//             </a>
//             ,{' '}
//             <a href="https://www.facebook.com/uqiesociety/" className="text-blue-500 hover:underline">
//               UQIES
//             </a>{' '}
//             Vice-President, Co-founder of{' '}
//             <a
//               href="https://drive.google.com/file/d/1qoGOsiCukKNY37tBBAq5Dx2K7zSIo5jv/view"
//               className="text-blue-500 hover:underline"
//             >
//               Flaming Galahs
//             </a>{' '}
//             and{' '}
//             <a
//               href="https://drive.google.com/file/d/1ri0wYzXAbHVwrk_a10ITqaIVeT0sMwmH/view"
//               className="text-blue-500 hover:underline"
//             >
//               Travelator
//             </a>
//             .
//           </div>

//           <div className="social-links">
//             <a href="/story.html">
//               <div className="social-btn">Story</div>
//             </a>
//             <a href="https://www.linkedin.com/in/niel-reitmann/">
//               <div className="social-btn">LinkedIn</div>
//             </a>
//             <a href="https://twitter.com/NielReitmann">
//               <div className="social-btn">Twitter</div>
//             </a>
//             <a href="https://github.com/Niel-Reitmann">
//               <div className="social-btn">GitHub</div>
//             </a>
//             <a href="/blog.html">
//               <div className="social-btn">Blog</div>
//             </a>
//           </div>
//         </div>

//         <div className="projects">
//           <div className="project">
//             <div className="imagediv">
//               <img
//                 src="/images/SmLogo.jpeg"
//                 alt="Project 1"
//                 className="imagefile"
//               />
//             </div>
//             <div className="project-details">
//               <p className="projtitle">Startmate</p>
//               <p className="projdesc">
//                 The epicentre for startup ambition across Australia and New
//                 Zealand.
//               </p>
//             </div>
//             <div className="viewbutton">
//               <a href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
//                 className="text-white hover:text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-600"
//                 >
//                 View
//                 </a>
//             </div>
//             </div>
//             <div className="project">
//         <div className="imagediv">
//           <img
//             src="/images/SmLogo.jpeg"
//             alt="Project 2"
//             className="imagefile"
//           />
//         </div>
//         <div className="project-details">
//           <p className="projtitle">EntryLevel</p>
//           <p className="projdesc">
//             Connecting top talent with the best entry-level jobs.
//           </p>
//         </div>
//         <div className="viewbutton">
//           <a
//             href="https://www.entrylevel.net/"
//             className="text-white hover:text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-600"
//           >
//             View
//           </a>
//         </div>
//       </div>

//       <div className="project">
//         <div className="imagediv">
//           <img
//             src="/images/SmLogo.jpeg"
//             alt="Project 3"
//             className="imagefile"
//           />
//         </div>
//         <div className="project-details">
//           <p className="projtitle">UQIES</p>
//           <p className="projdesc">
//             A community of students passionate about innovation and
//             entrepreneurship at the University of Queensland.
//           </p>
//         </div>
//         <div className="viewbutton">
//           <a
//             href="https://www.facebook.com/uqiesociety/"
//             className="text-white hover:text-white py-2 px-4 rounded bg-blue-500 hover:bg-blue-600"
//           >
//             View
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// v1

// export default function NielSite() {
//   return (
//     <div className="container w-full min-h-screen text-gray-600 flex justify-center items-center">
//       <div className="flex flex-col items-center justify-center min-h-screen h-full w-960 gap-26 px-24 overflow-x-hidden">
//         <div className="flex flex-col gap-24 w-full">
//           <div className="text-4xl font-light introheader">
//             My name is Niel Reitmann. I'm currently a Growth Associate at{" "}
//             <a
//               href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
//               className="text-black no-underline hover:underline transition duration-1000"
//             >
//               Startmate
//             </a>
//             . Previously design at{" "}
//             <a href="https://www.entrylevel.net/" className="text-black no-underline hover:underline transition duration-1000">
//               EntryLevel
//             </a>
//             ,{" "}
//             <a href="https://www.facebook.com/uqiesociety/" className="text-black no-underline hover:underline transition duration-1000">
//               UQIES
//             </a>{" "}
//             Vice-President, Co-founder of{" "}
//             <a
//               href="https://drive.google.com/file/d/1qoGOsiCukKNY37tBBAq5Dx2K7zSIo5jv/view"
//               className="text-black no-underline hover:underline transition duration-1000"
//             >
//               Flaming Galahs
//             </a>{" "}
//             and{" "}
//             <a
//               href="https://drive.google.com/file/d/1ri0wYzXAbHVwrk_a10ITqaIVeT0sMwmH/view"
//               className="text-black no-underline hover:underline transition duration-1000"
//             >
//               Travelator
//             </a>
//             .
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-start items-center gap-24">
//           <a
//             href="/story.html"
//             className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
//           >
//             Story
//           </a>
//           <a
//             href="https://www.linkedin.com/in/niel-reitmann/"
//             className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://twitter.com/NielReitmann"
//             className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
//           >
//             Twitter
//           </a>
//           <a
//             href="https://github.com/Niel-Reitmann"
//             className="text-gray-600 text-base font-medium rounded-md border-none px-6 h-8 transition duration-200 ease-in relative inline-flex items-center shadow-sm hover:bg-gradient-to-r from-gray-200 to-transparent"
//           >
//             GitHub
//           </a>

//             <Link className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" href="/blogpage">Blog</Link>

//         </div>

//         <div className="w-full flex flex-wrap justify-between gap-16">
//           <div className="">
//             <div className="">

//                 <div className="text-gray-500 w-48 flex justify-center items-center">
//                     <div className="w-full">
//                     <img
//                     src="/images/SmLogo.jpeg"
//                     />
//                     </div>
//                   <h3 className="text-lg font-medium text-gray-900">
//                     Startmate
//                   </h3>
//                   <p className="text-base font-normal my-1">
//                   The epicentre for startup ambition across Australia and New Zealand.
//                   </p>
//                   <a
//                     href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
//                     className="text-indigo-500 hover:text-indigo-400"
//                   >
//                     Learn more
//                   </a>
//                 </div>
//                 <div className="text-gray-500 w-48 flex justify-center items-center">
//                 <div className="w-full">
//                     <img
//                     src="/images/SmLogo.jpeg"
//                     />
//                     </div>
//                   <h3 className="text-lg font-normal my-1">
//                     Travelator
//                   </h3>
//                   <p className="text-base font-normal my-1">
//                   The epicentre for startup ambition across Australia and New Zealand.
//                   </p>
//                   <a
//                     href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
//                     className="text-indigo-500 hover:text-indigo-400"
//                   >
//                     Learn more
//                   </a>
//                 </div>
//                 <div className="text-gray-500 w-48 flex justify-center items-center">
//                 <div className="w-full">
//                     <img
//                     src="/images/SmLogo.jpeg"
//                     />
//                     </div>
//                   <h3 className="text-lg font-normal my-1">
//                     Flaming Galahs
//                   </h3>
//                   <p className="text-base font-normal my-1">
//                   The epicentre for startup ambition across Australia and New Zealand.
//                   </p>
//                   <a
//                     href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
//                     className="text-indigo-500 hover:text-indigo-400"
//                   >
//                     Learn more
//                   </a>
//                 </div>
//                 <div className="text-gray-500 w-48 flex justify-center items-center">
//                     <div className="w-full">
//                     <img
//                     src="/images/SmLogo.jpeg"
//                     />
//                     </div>
//                   <h3 className="text-lg font-normal my-1">
//                     UQIES
//                   </h3>
//                   <p className="text-base font-normal my-1">
//                   The epicentre for startup ambition across Australia and New Zealand.
//                   </p>
//                   <a
//                     href="https://www.startmate.com/?utm_source=Google&utm_medium=NielWebsite&utm_campaign=NielWebsite"
//                     className="text-indigo-500 hover:text-indigo-400"
//                   >
//                     Learn more
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     </div>

//   );

// }
