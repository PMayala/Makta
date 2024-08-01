import React from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBook, FaUsers, FaChartBar, FaQuestionCircle, FaFacebook, FaTwitter, FaInstagram, FaRocket, FaLightbulb, FaCog, FaMobileAlt, FaChartLine, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Button from "../components/atoms/Button";
import Navbar from "../components/organisms/Navbar";
import background from "/images/Home-bg.svg";
import tableImg from "/images/Home-table-pic.svg";
import modernLibraryImg from '../assets/emil-widlund-xrbbXIXAWY0-unsplash.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-50 transition duration-300 transform hover:-translate-y-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <h3 className="text-xl font-bold my-3 text-indigo-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-purple-50 transition duration-300 transform hover:-translate-y-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <h3 className="text-xl font-bold my-3 text-purple-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, feedback }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-green-50 transition duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <p className="text-lg italic text-gray-600">"{feedback}"</p>
    <h4 className="text-xl font-bold mt-4 text-green-700">{name}</h4>
  </motion.div>
);

const FAQCard = ({ question, answer }) => (
  <motion.div
    className="p-6 bg-white rounded-lg shadow-lg hover:bg-yellow-50 transition duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <h4 className="text-lg font-bold text-yellow-700">{question}</h4>
    <p className="mt-2 text-gray-600">{answer}</p>
  </motion.div>
);

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default function Landing() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  function handleRegisterClick() {
    navigate("/register");
  }

  return (
    <div className="overflow-x-hidden">
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="relative w-full min-h-screen flex flex-col items-center bg-cover bg-center space-y-6 md:space-y-10 text-white text-center px-4 py-8"
      >
        <Navbar loginFunc={handleLoginClick} registerFunc={handleRegisterClick} />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20"
        >
          <Button
            className="text-yellow-400 rounded-full capitalize border border-yellow-400 hover:bg-yellow-400 hover:text-white transition duration-300"
            title="Get your library digitized now"
            onClick={handleLoginClick}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold font-kumbh md:w-2/3 lg:w-1/2 leading-relaxed"
        >
          Manage your library operations effortlessly
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-karla md:w-2/3 lg:w-1/2"
        >
          The ultimate solution for modern library management. Revolutionize
          resource management seamlessly and efficiently for Rwandan high schools.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            className="rounded-full bg-sky-500 hover:bg-sky-600 transition duration-300 transform hover:scale-105"
            title="Get Started"
            onClick={handleLoginClick}
          />
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          src={tableImg}
          alt="table image"
          className="w-full md:w-2/3 lg:w-1/3 mt-8"
        />
      </div>

      <AnimatedSection>
        <section id="about" className="w-full py-16 md:py-20 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-indigo-700">About Maktaba</h2>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-20">
              <div className="w-full md:w-1/2">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={modernLibraryImg}
                  alt="Modern Library"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-lg md:text-xl leading-relaxed text-center mb-8 text-gray-600">
                  Maktaba is more than just a library management system. We're a dedicated team of innovators committed to transforming how Rwandan high schools handle their library resources. Our platform combines cutting-edge technology with user-friendly design to create an unparalleled library experience for students and staff alike.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <section id="features" className="w-full py-20 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-700">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<FaRocket className="text-5xl text-purple-500 mx-auto mb-4" />}
                title="Automated Cataloging"
                description="Automatically catalog and manage your library's collection with ease."
              />
              <FeatureCard
                icon={<FaChartLine className="text-5xl text-purple-500 mx-auto mb-4" />}
                title="User Analytics"
                description="Get detailed insights into user behavior and library usage."
              />
              <FeatureCard
                icon={<FaCog className="text-5xl text-purple-500 mx-auto mb-4" />}
                title="Seamless Integrations"
                description="Easily integrate with other school management systems."
              />
              <FeatureCard
                icon={<FaMobileAlt className="text-5xl text-purple-500 mx-auto mb-4" />}
                title="Mobile Access"
                description="Access the library system on the go with our mobile-friendly platform."
              />
              <FeatureCard
                icon={<FaLightbulb className="text-5xl text-purple-500 mx-auto mb-4" />}
                title="Innovative Tools"
                description="Utilize cutting-edge tools designed to enhance library operations."
              />
              <FeatureCard
                icon={<FaHeadset className="text-5xl text-purple-500 mx-auto mb-4" />}
                title="24/7 Support"
                description="Our support team is always available to assist you."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="services" className="w-full py-20 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-700">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<FaBook className="text-5xl text-indigo-500 mx-auto mb-4" />}
                title="Library Management"
                description="Comprehensive tools for managing your library's resources and operations."
              />
              <ServiceCard
                icon={<FaUsers className="text-5xl text-indigo-500 mx-auto mb-4" />}
                title="User Management"
                description="Easily manage and track user accounts and activities."
              />
              <ServiceCard
                icon={<FaChartBar className="text-5xl text-indigo-500 mx-auto mb-4" />}
                title="Reporting and Analytics"
                description="Generate detailed reports and gain insights from your data."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="testimonials" className="w-full py-20 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-green-700">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Jane Doe"
                feedback="Maktaba has revolutionized how we manage our library. It's user-friendly and efficient!"
              />
              <TestimonialCard
                name="John Smith"
                feedback="The automated cataloging feature is a game-changer. Highly recommended!"
              />
              <TestimonialCard
                name="Emily Johnson"
                feedback="Fantastic support team and great features. Maktaba is the best library management system we've used."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section id="faq" className="w-full py-20 bg-gray-100 text-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-yellow-700">FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FAQCard
                question="What is Maktaba?"
                answer="Maktaba is a comprehensive library management system designed for Rwandan high schools to manage their library resources effectively."
              />
              <FAQCard
                question="How can I get started with Maktaba?"
                answer="You can get started by signing up on our platform and following the onboarding process to set up your library."
              />
              <FAQCard
                question="Is Maktaba mobile-friendly?"
                answer="Yes, Maktaba is accessible on mobile devices, allowing you to manage your library on the go."
              />
              <FAQCard
                question="What kind of support is available?"
                answer="Our support team is available 24/7 to assist you with any issues or questions you may have."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <footer className="w-full py-6 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
          </div>
          <p>&copy; 2024 Maktaba. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
