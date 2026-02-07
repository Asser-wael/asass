import { Helmet } from "react-helmet-async";
import './Services.css';
const servicesData = [
    {
        title: 'Web Development',
        description: 'Modern, responsive websites built with React.',
    },
    {
        title: 'UI / UX Design',
        description: 'Clean, user-friendly interfaces with great UX.',
    },
    {
        title: 'SEO Optimization',
        description: 'Improve visibility and ranking on search engines.',
    },
];

const Services = () => {
    return (
        <>
         <Helmet>
                <title>خدماتنا | Asser Wael Portfolio</title>
                <meta
                  name="description"
                  content="تعرف على خدمات Asser Wael: تطوير مواقع حديثة، تصميم واجهات مستخدم وتجربة مستخدم، وتحسين SEO."
                />
                <meta property="og:title" content="خدمات Asser Wael" />
                <meta property="og:description" content="Web Development, UI/UX Design, SEO Optimization." />
                <meta property="og:image" content="/services-preview.png" />
            </Helmet>

        <div className="services-container">
            <h2 className="services-title">Our Services</h2>

            <div className="services-grid" >
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index} style={{display:"flex" ,flexDirection:"column",justifyContent:"center" ,alignItems:"center"
                    }}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
                </>
    );
};

export default Services;
// import './Services.css';
// import animationi from "./Coding.json"
// import animationii from "./an.json"
// import animationiii from "./seoe.json"
// import Lottie from "lottie-react";

// const servicesData = [
//     {
//         anime: animationi,
//         title: 'Web Development',
//         description: 'Modern, responsive websites built with React.',
//     },
//     {
//         anime: animationii,
//         title: 'UI / UX Design',
//         description: 'Clean, user-friendly interfaces with great UX.',
//     },
//     {
//         anime: animationiii,
//         title: 'SEO Optimization',
//         description: 'Improve visibility and ranking on search engines.',
//     },
// ];


// const Services = () => {
//     return (
//         <div className="services-container">
//             <h2 className="services-title">Our Services</h2>

//             <div className="services-grid" >
//                 {servicesData.map((service, index) => (
//                     <div className="service-card" key={index} style={{display:"flex" ,flexDirection:"column",justifyContent:"center" ,alignItems:"center"
//                     }}>
//                         <div style={{width:"200px"}}>
//                             <Lottie animationData={service.anime} loop />
// <hr />
//                         </div>
//                         <h3>{service.title}</h3>
//                         <p>{service.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;
