import { useContext } from 'react';
import './Header.css'
import {  Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { ModeContext } from "../../context";
import moon from "../../icons/moon_4700960.png"
import light from "../../icons/weather_16382131.png"
// import srct from "../../icons/translate.png"

const Header = () => {
    const { mode, setMode, active, setactive } = useContext(ModeContext)
    const lis = [
        { title: "About", href: "/" },
        { title: "Projects", href: "/projects" },
        { title: "Services", href: "/services" },
        { title: "Skills", href: "/skills" },
        { title: "Contact", href: "/contact" },
    ];
    const src = mode === "dark" ? light : moon

    return (<header className='header' id='header'>
        <div className='lefts'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .4, delay: .2 }}
            >Portfolio</motion.h2>
        </div>
        <div className='centers'>
            <motion.ul>
                {lis.map((item, index) => (
                    <motion.li

                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .4, delay: index * 0.3 }}

                    >
                        <Link to={item.href}
                            onClick={() => setactive(item.title)}
                            className={`${item.title === active ? "activestyle" : ""}`}
                        >
                            {item.title}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>

        </div>
        <div className='rights'
        >
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .4, delay: 1.5 }} onClick={() => setMode(prev => prev === "dark" ? "light" : "dark")}>
                <img src={src} alt="" />
            </motion.button>
            {/* <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .4, delay: 1.8 }} >
                <img src={srct} alt="" />
            </motion.button> */}

        </div>
    </header>
    );
}

export default Header;
