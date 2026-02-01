import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import animationData from "./done.json"; 
import animationData2 from "./Mail.json"; 
import { motion } from 'framer-motion'; 
const Contact = () => {
  const [state, handleSubmit] = useForm("xkgvzzro");

  if (state.succeeded) {
    return (
      <div className="success">
        <p style={{ display: 'flex', alignItems: "center", gap: '10px' }}>
          شكراً! رسالتك وصلت بنجاح
          <Lottie animationData={animationData} loop={false} style={{ width: 40 }} />
        </p>
      </div>
    );
  }

  return (
    <div className='ContactUS'>
      <motion.div className='ls'
                  initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1}}
      >
        <h1>
          <span className='icon-mail-envelope-closed'></span>
          Contact Us
        </h1>
        <p>Contact us for more information and get notified when we publish something new</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>
      <motion.div className='rs'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1}}>
        <Lottie animationData={animationData2} loop={true} style={{ width: '100%', maxWidth: 500, height: 'auto'}} />
      </motion.div>
    <hr />
    </div>
  );
}

export default Contact;
