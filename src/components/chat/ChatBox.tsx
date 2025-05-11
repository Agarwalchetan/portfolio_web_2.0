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
    
    // About Me
    if (lowerMessage.includes('who are you') || lowerMessage.includes('about you')) {
      return "I'm Chetan Agarwal, a Computer Science student at MAIT, Delhi. I'm passionate about software engineering and game development. I've worked on front-end projects and have a strong foundation in C++ and Java.";
    }

    // Current Work
    if (lowerMessage.includes('current') || lowerMessage.includes('working on')) {
      return "I'm currently developing web applications using React and exploring game development. I'm also working on improving my portfolio with new projects and learning cloud technologies.";
    }

    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
      return "I've worked on several exciting projects including:\n• Apple Website Clone (React, TypeScript)\n• E-Commerce Dashboard (MERN Stack)\n• 2D Platformer Game (Java)\n\nWould you like to know more about any specific project?";
    }

    // Skills
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
      return "My technical skills include:\n• Frontend: React, TypeScript, Tailwind CSS\n• Backend: Node.js, Express, MongoDB\n• Languages: JavaScript, Java, C++\n• Tools: Git, Docker, AWS\n\nI'm always learning and expanding my skillset!";
    }

    // Contact Information
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can reach me through:\n• Email: contact@example.com\n• LinkedIn: linkedin.com/in/chetan\n• GitHub: github.com/chetan\n\nFeel free to connect!";
    }

    // Education
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college')) {
      return "I'm pursuing Computer Science at MAIT, Delhi. I've completed several certifications in web development and cloud computing. I'm passionate about continuous learning and staying updated with the latest technologies.";
    }

    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('work experience')) {
      return "I have experience in:\n• Full-stack web development\n• Game development\n• Open source contributions\n• Technical writing\n\nI'm always looking for new opportunities to grow and learn!";
    }

    // Certifications
    if (lowerMessage.includes('certification') || lowerMessage.includes('certificate')) {
      return "I've earned several certifications including:\n• React - The Complete Guide (Udemy)\n• Advanced JavaScript Concepts (Coursera)\n• Data Structures and Algorithms (Educative)\n• Web Development Bootcamp (Codeacademy)";
    }

    // Achievements
    if (lowerMessage.includes('achievement') || lowerMessage.includes('award')) {
      return "Some of my notable achievements include:\n• JEE Advanced Qualification\n• Hackathon Winner\n• Open Source Contributions\n• Technical Writing Recognition";
    }

    // Default response for other queries
    return "Thanks for your interest! I can tell you about my projects, skills, experience, or how to get in touch. What would you like to know more about?";
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      const userMessage = newMessage.trim();
      setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
      setNewMessage('');
      setIsTyping(true);

      const response = generateResponse(userMessage);
      
      setTimeout(() => {
        setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
        setIsTyping(false);
      }, Math.min(1000 + response.length * 10, 3000));
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
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
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