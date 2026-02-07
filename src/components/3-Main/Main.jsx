import './Main.css';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
// استيراد جميع الصور من مجلد src
import imgi from "./download (1).jpg";
import imgii from "./11f3ac83-7b34-446d-941c-73763a295e82.jpg";
import imgiii from "./Pin af Benjamin Dreux på Ui Design _ Websitedesign, Hjemmeside.jpg";
import imgiiii from "./AI and UI design_ A match made in digital heaven.jpg";
import imgiiiii from "./WebDesign.jpg";
import imgiiiiii from "./Landing Page_ Fitness trainer homepage.jpg";
import imgv from "./a56488e4-de71-40af-ad68-ed8111933c3e.jpg";
import imgvi from "./Single page website developer design.jpg";

const Main = () => {
  const projects = [
    {
      img: imgi,
      title: "Landing Page 1",
      subtitle: "Modern landing page built with HTML & CSS.",
      category: "css",
      link: "https://example.com/landing1",
      github: "https://github.com/example/landing1",
      more: "#"
    },
    {
      img: imgii,
      title: "Portfolio Website",
      subtitle: "Personal portfolio site to showcase projects and skills.",
      category: "css",
      link: "https://example.com/portfolio",
      github: "https://github.com/example/portfolio",
      more: "#"
    },
    {
      img: imgiii,
      title: "E-Commerce Store",
      subtitle: "React & Node based e-commerce store with Stripe API.",
      category: "react",
      link: "https://example.com/store",
      github: "https://github.com/example/store",
      more: "#"
    },
    {
      img: imgiiii,
      title: "Admin Dashboard",
      subtitle: "Interactive dashboard built with React and Chart.js.",
      category: "react",
      link: "https://example.com/dashboard",
      github: "https://github.com/example/dashboard",
      more: "#"
    },
    {
      img: imgiiiii,
      title: "Chat App",
      subtitle: "Real-time chat app with Node & Socket.io backend.",
      category: "Node",
      link: "https://example.com/chatapp",
      github: "https://github.com/example/chatapp",
      more: "#"
    },
    {
      img: imgiiiiii,
      title: "Blog Platform",
      subtitle: "Full-stack blog with authentication and comments.",
      category: "Node",
      link: "https://example.com/blog",
      github: "https://github.com/example/blog",
      more: "#"
    },
    {
      img: imgv,
      title: "Designer Landing Page",
      subtitle: "Creative landing page for designers and agencies.",
      category: "java",
      link: "https://example.com/designer",
      github: "https://github.com/example/designer",
      more: "#"
    },
    {
      img: imgvi,
      title: "Car Landing Page",
      subtitle: "Sleek landing page showcasing a sports car.",
      category: "java",
      link: "https://example.com/car",
      github: "https://github.com/example/car",
      more: "#"
    }
  ];

  const [animate] = useState(false);



  return (
    <>
     <Helmet>
        <title>المشاريع | Asser Wael Portfolio</title>
        <meta
          name="description"
          content="استعرض أحدث مشاريع Asser Wael في تطوير الويب باستخدام React, Node, و CSS."
        />
        <meta property="og:title" content="مشاريع Asser Wael" />
        <meta property="og:description" content="نماذج من أعمالي في تصميم مواقع حديثة وتطبيقات ويب." />
        <meta property="og:image" content="/preview.png" />
      </Helmet>

      <main>
        <div className='r-section'>
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`card ${animate ? "animate" : ""}`}
              key={index}
            >
              <div className='img'>
                <img src={project.img} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <div className='Git-link-more'>
                <div>
                  <a href={project.link}><span className='icon-link'></span></a>
                  <a href={project.github}><span className='icon-github'></span></a>
                </div>
                <a href={project.more}><span className='icon-arrow-right'></span></a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Main;
