import Head from 'next/head'
import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from 'next/image';
import yo from "../public/yo.png";
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Askjell Portofolio </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/e.png" />
        </Head>

        <main className=" bg-white px-10">
          <section className="min-h-screen">
          
            
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className=" tex-xl font-burton py-3 font-sans ">EderCrypto.eth</h1>
              <ul className=" flex items-center">
                <li><a>Projects</a></li>
                <li><a>Abaout</a></li>
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=" cursor-pointer text-2xl"/>
                </li>
                <li>  <a className= "bg-gradient-to-r from-amber-500 text- to-yellow-500 text-white px-4 py-2 border-none rounded-md ml-8"
                      href="#"> Resume </a>
                </li>

              </ul>

            </nav>

            <div className="text-center p-10 py-10">
                <h2 className="text-5xl font-akira py-2 text-orange-400 font-medium dark:text-orange-400 md:text-6xl">Eder M.
                </h2>
                <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Web3 Developer.
                </h3> 
                <p className="text-md py-5 leading-8 text-gray-800">Freelancer offering programming services. Join me below and let's get to work!

                </p>

            </div>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle/>
              <AiFillLinkedin/>
              <AiFillGithub/>
            </div>

            <div className="mx-auto bg-gradient-to-b from-yellow-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={yo} layout="fill" objectFit="cover" />
            </div>
          </section>

          <section>
          <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={yo} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
            </div>
            
              
          </section>


         </main>
      </div>   

    </>
  )
}
