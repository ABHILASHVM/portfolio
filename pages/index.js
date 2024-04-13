import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/me.png";
import code from "../public/bus.png";
import design from "../public/nlp.png";

import hackerrank from "../public/hackerrank.svg";
import leetcode from "../public/leetcode.svg";

import Image from "next/image";
import web1 from "../public/certificate1.png";
import web2 from "../public/certificate2.png";
import web3 from "../public/certificate3.png";
import web4 from "../public/certificate4.png";
import web5 from "../public/certificate5.png";
import web6 from "../public/certificate6.png";
import web7 from "../public/certificate7.png";
import web8 from "../public/certificate8.png";
import badges from "../public/badges.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js" async></script>
        <script src="https://mediafiles.botpress.cloud/cbcc0236-c5ab-4c14-9bc0-1d8d239ceb72/webchat/config.js" defer></script>


        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">abhilashvm</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://www.canva.com/design/DAFtRg1xMy4/IiEvApVnAlBTT-enh77KQw/view?utm_content=DAFtRg1xMy4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image alt="a" src={deved} layout="fill" objectFit="cover" />
          </div>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Abhilash V M
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              BTech in Computer Science.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I’m skilled in Python, NodeJS, MongoDB, MySQL, HTML, CSS, Java, and C programming.A dedicated programmer and problem solver with a passion for tackling challenges
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/AbhilashVm74358"><AiFillTwitterCircle /></a>
              <a href="https://www.linkedin.com/in/abhilash-vm-4a08a3214/"><AiFillLinkedin /></a>
              <a href="https://github.com/ABHILASHVM"><AiFillGithub /></a>
            </div>

          </div>
          <div className="text-center mb-11">
            <h1 className="font-burtons text-xl pb-3 text-teal-600">coding profile</h1>
            <div className="text-center flex justify-center text-5xl gap-5">
              <a href="https://www.hackerrank.com/profile/abhilashvm44"><Image alt="hack" width={45} height={45} src={hackerrank} style={darkMode ? { filter: 'invert(60%)' } : {}} /></a>
              <a href="https://leetcode.com/abhilashvm44/"><Image alt="leet" width={45} height={43} src={leetcode} style={darkMode ? { filter: 'invert(70%)' } : {}} /></a>
            </div>
          </div>
        </section>
        <section>
          <div className="pb-8">
            <h3 className="lg:text-left sm:text-center text-3xl py-1 dark:text-white text-center">Achievements</h3>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-200">
              &gt;&gt;&gt; Problem Solving (Intermediate) certification in Hackerrank (<a href="https://www.hackerrank.com/certificates/f15210ace519" className="text-teal-600">View Certificate</a>).
            </p>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-200">&gt;&gt;&gt; Golden badges for Python, Problem Solving and 10 Days of JS form HackerRank
            </p>

          </div>
          <div className="">
            <h3 className=" lg:text-left sm:text-center text-3xl py-1 dark:text-white text-center">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome to my portfolio, Here you will find a selection of projects that I have worked on, showcasing my skills, creativity, and passion for Computer Science.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Each project represents a unique journey, from conception to execution, where I have applied my expertise to solve real-world problems and deliver impactful solutions. Whether it is designing intuitive user interfaces, crafting robust backend systems, or implementing cutting-edge technologies, I have poured my heart and soul into each endeavor.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              {/* <img src="../public/hackerrank.svg" alt="GeeksforGeeks logo"/> */}
              <Image alt="bus" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Online Tourist Bus Booking System(<a href="https://github.com/ABHILASHVM/Tourist-Bus-Booking-System.git" className="text-teal-600 text-3"> GitHub </a>)
              </h3>
              <p className="pb-8 pt-5 px-10">
                A web App that allows customers to manage and book tourist buses as well as tour packages for various destinations
              </p>
              <h4 ><span className="py-4 text-teal-600">Frontend:</span> HTML,CSS,JavaScript
              </h4>
              <h4 ><span className="py-4 text-teal-600">Backend:</span> NodeJS(ExpressJS),MongoDB
              </h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image alt="nlp" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Neural Machine Translation System
              </h3>
              <p className="py-2 px-10">
                This project focuses on implementing a baseline NMT between Kannada and Malayalam. Methodology revolves around the implementation of advanced neural network architectures, including encoder-decoder models.Through meticulous data preprocessing, model training, and evaluation
              </p>
              <h4 >Tool: <span className="py-4 text-teal-600"> OpenNMT-py</span>
              </h4>
              <p className="text-gray-800 py-1">preprocessing</p>
              <p className="text-gray-800 py-1">Word Embeddings</p>
              <p className="text-gray-800 py-1">Morphology</p>

            </div>

          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="lg:text-left sm:text-center text-3xl py-1 dark:text-white ">Certifications</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome to the certificates section of my portfolio, Here, I am thrilled to share with you some of the certifications and credentials I have earned throughout my journey.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Each certification represents not only the knowledge and skills I have acquired but also the countless hours of hard work, dedication, and determination invested in my professional growth. From mastering industry-standard tools and frameworks to earning specialized qualifications in niche domains, these certificates showcase my versatility and adaptability in tackling diverse challenges.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web7}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"77%"}
                layout="responsive"
                src={web8}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="certi"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"50%"}
                layout="responsive"
                src={badges}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
