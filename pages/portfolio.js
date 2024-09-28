import Layout from '../components/Layout';
import Image from "next/image"; 
import Link from "next/link";

//Links to Images 
import blokus from "../public/images/portfolio/blokus.png";
import ptp from "../public/images/portfolio/PTPhome.png";
import ml from  "../public/images/portfolio/machine_learning.jpg";

const projects = [{title: "Passion T Plates Website", url: "https://github.com/madisonVLL/passiontplates", description: "Created a website for Passion T Plates LLC resturant including google reviews, instagram links, videos, updated menus, google maps APIs, and more.", image: ptp}, 
  {title: "Blokus Game", url: "https://github.com/madisonVLL/Blokus-School-Project", description: "Created a version of the Blokus boardgame using Python. This application is a text user interface  design with multiple different game modes including customization for game board size and amount of players.", image: blokus}, 
  {title: "Events AI", url: "https://github.com/madisonVLL/event-ai/tree/main/events-ai", description: "Tensor flow and web scrapping to create a full-stack web application using JavaScript, Next.js, HTML, CSS for front end and Python on back end to create an event planning timeline using an event type (wedding, baby shower, birthday party, etc.) and an event date.", image: ml}]
const About = () => {
  return (
    <Layout>
    <div className="p-4">
        <div className='m-2'>
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <br></br>
          <p className="text-2xl italic">Explore some of our previous projects to see what can be possible when you partner with WebAlity.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 w-full">
          {projects.map((category) => (
            <Link href={category.url} target="_blank" key={category.title}>
              <div className="bg-white shadow-xl rounded-lg p-6 text-center hover:text-white hover:bg-navyGreen m-2 flex flex-col h-full">
                <h1 className="text-xl font-bold">{category.title}</h1>
                <div className="flex-grow content-center">
                  <Image src={category.image} alt={category.title} className="w-full h-auto" />
                </div>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
