import './Skills.css';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const cards = [
    { className: "icon-html5", name: "HTML", level: 95, text: "Building clean, semantic, and accessible page structures" },
    { className: "icon-css3", name: "CSS", level: 90, text: "Styling modern, responsive layouts with Flexbox and Grid" },
    { className: "icon-javascript", name: "JavaScript", level: 80, text: "Adding interactivity, logic, and dynamic behavior to websites" },
    { className: "icon-react", name: "React", level: 85, text: "Creating reusable components and dynamic user interfaces" },
    { className: "icon-node-dot-js", name: "Node.js", level: 50, text: "Building simple backend APIs and handling server-side logic" },
];

const Skills = () => {
    return (
        <>
            {/* Helmet metadata */}
            <Helmet>
                <title>مهاراتي | Asser Wael Portfolio</title>
                <meta
                  name="description"
                  content="تعرف على مهارات Asser Wael في تطوير الويب: HTML, CSS, JavaScript, React, و Node.js."
                />
                <meta property="og:title" content="مهارات Asser Wael" />
                <meta property="og:description" content="Building modern, responsive, and interactive web applications." />
                <meta property="og:image" content="/skills-preview.png" />
            </Helmet>

            <motion.div className='skills'>
                {cards.map((item, index) => (
                    <motion.div key={item.name} className="skill-card">
                        <motion.i
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className={item.className}></motion.i>
                        <h2>{item.name}</h2>
                        <p>{item.text}</p>
                        Level:
                        <span>{item.level} %</span>
                        <div style={{ backgroundColor: "var(--border)" }} className="skill-bar">
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                whileInView={{ opacity: 1, width: `${item.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.3 }}
                                style={{ width: `${item.level}%` }}
                            ></motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}

export default Skills;