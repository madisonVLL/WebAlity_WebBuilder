import Layout from '../components/Layout';

const projects = [{title: "Passion T Plates Website", url: "https://github.com/madisonVLL/passiontplates", description: "Created a website for Passion T Plates LLC resturant including google reviews, instagram links, videos, updated menus, google maps apis, and more.", image: ""}, {title: "Personal Website", url: "https://github.com/madisonVLL/tensor_event_planning", description: "Website giving more information about myself in addition to showcase my resume and projects."}, {title: "Blokus Game", url: "https://github.com/madisonVLL/Blokus-School-Project", description: "Created a version of the Blokus boardgame using Python."}, {title: "Events AI", url: "https://github.com/madisonVLL/event-ai/tree/main/events-ai", description: "Tensor flow and web scrapping to create a full-stack web application using JavaScript, Next.js, HTML, CSS for front end and Python on back end to create an event planning timeline using an event type (wedding, baby shower, birthday party, etc.) and an event date.", image:""}]
const About = () => {
  return (
    <Layout>
    <div className="max-w-7xl mx-auto p-4">
      <h1>Portfolio</h1>
    </div>
    </Layout>
  );
};

export default About;
