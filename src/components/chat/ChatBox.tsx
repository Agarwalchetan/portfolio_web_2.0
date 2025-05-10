import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi! I'm Chetan's assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Project-related responses
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      if (lowerMessage.includes('recent')) {
        return "My most recent project is an E-commerce Dashboard built with React and Node.js. It features real-time analytics, inventory management, and a responsive admin interface. Would you like to know more about its technical details?";
      }
      if (lowerMessage.includes('favorite') || lowerMessage.includes('best')) {
        return "One of my favorite projects is the 2D Platformer Game. I built it using Java and LibGDX, implementing custom physics, particle effects, and procedurally generated levels. It was a great learning experience in game development!";
      }
      return "I've worked on various projects including web applications, games, and APIs. Some highlights include an E-commerce Dashboard, 2D Platformer Game, and a Task Management API. Which area interests you the most?";
    }

    // Skills and technology responses
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('language')) {
      if (lowerMessage.includes('frontend') || lowerMessage.includes('front-end')) {
        return "For frontend development, I'm proficient in React, TypeScript, and modern CSS frameworks like Tailwind. I also have experience with Next.js and state management solutions like Redux and Zustand.";
      }
      if (lowerMessage.includes('backend') || lowerMessage.includes('back-end')) {
        return "My backend stack includes Node.js, Express, and various databases like MongoDB and PostgreSQL. I'm also experienced with AWS services and microservices architecture.";
      }
      return "I'm skilled in full-stack development with expertise in React, Node.js, TypeScript, and cloud technologies. I also have experience with DevOps tools like Docker and Kubernetes. What specific technology would you like to know more about?";
    }

    // Experience and background
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
      return "I have over 5 years of experience in software development, specializing in full-stack web development. I've worked with startups and large enterprises, leading teams and delivering scalable solutions. Would you like to know about any specific aspect of my experience?";
    }

    // Contact and availability
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('available')) {
      return "You can reach me through email at contact@example.com or connect with me on LinkedIn. I'm currently open to interesting project opportunities and collaborations. Would you like my direct contact information?";
    }

    // Education and certifications
    if (lowerMessage.includes('education') || lowerMessage.includes('certificate') || lowerMessage.includes('degree')) {
      return "I hold a degree in Computer Science and several professional certifications including AWS Solutions Architect and React certification from Meta. I'm constantly learning and updating my skills through online courses and practical projects.";
    }

    // Default response for other queries
    return "Thanks for your interest! I'd be happy to discuss more about my work, skills, or experience. Could you please be more specific about what you'd like to know?";
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      const userMessage = newMessage.trim();
      setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
      setNewMessage('');
      setIsTyping(true);

      // Generate response before setTimeout to ensure it's in scope
      const response = generateResponse(userMessage);
      
      // Now response is in scope for the delay calculation
      setTimeout(() => {
        setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
        setIsTyping(false);
      }, Math.min(1000 + response.length * 10, 3000)); // Dynamic delay based on response length
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-20 right-4 z-50 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
              <h3 className="font-semibold">Chat with me</h3>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t dark:border-slate-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="p-2 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBox;