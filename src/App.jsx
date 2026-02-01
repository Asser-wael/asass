import { useEffect } from 'react'; // ✅ Added missing import
import './App.css';
import Header from './components/1-Header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-Main/Main';
import Services from './components/4-Services/Services';
import Skills from './components/5-Skills/Skills';
import Contact from './components/6-Contact/Contact';
import Footer from './components/7-Footer/Footer';
import Error from './components/errorPage';
import { ModeProvider } from "./context";
import { AnimatePresence, motion } from 'framer-motion';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

/* 🔹 Layout Component */
function PortfolioLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioLayout />, errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageTransition>
            <Hero />
          </PageTransition>
        )
      },
      {
        path: "projects",
        element: (
          <PageTransition>
            <Main />
          </PageTransition>
        )
      },
      {
        path: "services",
        element: (
          <PageTransition>
            <Services />
          </PageTransition>
        )
      },
      {
        path: "skills",
        element: (
          <PageTransition>
            <Skills />
          </PageTransition>
        )
      },
      {
        path: "contact",
        element: (
          <PageTransition>
            <Contact />
          </PageTransition>
        )
      }
    ]
  }
]);

function App() {

  return (
    <ModeProvider>
      <RouterProvider router={router} />
    </ModeProvider>
  );
}

export default App;