import React, { useState, useEffect } from 'react';
import { BackgroundBeams } from '../components/ui/background-beams';
import { motion, AnimatePresence } from 'framer-motion';

import "../styles/faq.css"

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div  className="border-b border-blue-800/30">
      <button
        className="flex w-full justify-between items-center py-4 px-2 text-left font-medium text-blue-100 hover:text-blue-50 transition-colors"
        onClick={onClick}
      >
        <span>{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-3 px-2 text-blue-100/100 text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when FAQ component mounts
  }, []);

  const faqData = [
    {
      question: "What is Hackemon?",
      answer: "Hackèmon is a Pokemon themed hackathon that combines innovation of robust technology with the Pokèmon fun! It calls upon the Pokèmon Trainers to come up with their strongest and let this thunder begin!⚡"
    },
    {
      question: "How do I register for Hackemon events?",
      answer: "You can register for the Hackèmon by going directly at the official website or through the Hackquest listing, also you can register through the registration links present on the SheBuilds handle on different social media platforms."
    },
    {
      question: "Are Hackemon events open to beginners?",
      answer: " Yes! Hackèmon encourages all the beginners to give their best in the hackathon, gaining some real good experience and leveraging their skills to a new level!"
    },
    {
      question: "What technologies can I use during the hackathons?",
      answer: "You're free to use any programming languages, frameworks, or tools you prefer. Most events provide API access to Pokémon data and related resources. Some events may have specific technology requirements that will be clearly communicated in the event details.  Hackèmon encourages all technology stacks whether it may be web tech or app stack or if you want to come up with a game! We are open to all the tech stacks and innovation!"
    },
    {
      question: "Are there prizes for winners?",
      answer: " Yes, Hackemon offers prizes for winning teams, which may include cash rewards, tech gadgets, software subscriptions, and exclusive mentorship or internship opportunities. Prize categories may vary based on event themes."
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className="min-h-[50rem] w-full rounded-md bg-gradient-to-b  from-[#010012] to-[#05042c] relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4 z-10 w-full">
        <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-amber-600 text-center font-sans font-bold mb-8">
          FAQ
        </h1>
        
        <div 
          style={{
            backgroundColor: "rgba(94, 83, 255, 0.47)", // equivalent to bg-blue-500/20
            backdropFilter: "blur(4px)", // equivalent to backdrop-blur-sm
            padding: "1.5rem", // p-6
            border: "1px solid rgba(94, 131, 255, 0.3)", // border-blue-800/30
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.13)" // glowing blue glow
          }}
        className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-6 border border-blue-800/30">
          
          {faqData.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
      <BackgroundBeams className="from-blue-900/30 via-blue-800/10 to-blue-900/30" />
    </div>
  );
};

export default Faq;