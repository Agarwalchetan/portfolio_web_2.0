import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ArrowLeft } from 'lucide-react';

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi! I'm Chetan's assistant. How can I help you today?\n\nYou can ask me about:\n1. About Me\n2. Projects\n3. Skills & Experience\n4. Education & Certifications\n5. Contact Information\n6. Achievements", sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBackOption, setShowBackOption] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    if (userMessage.toLowerCase() === 'back') {
      return "Here are the main topics I can help you with:\n\n1. About Me\n2. Projects\n3. Skills & Experience\n4. Education & Certifications\n5. Contact Information\n6. Achievements\n\nWhat would you like to know more about?";
    }

    const lowerMessage = userMessage.toLowerCase();
    
    // About Me
    if (lowerMessage.includes('who are you') || lowerMessage.includes('about you') || lowerMessage.includes('about me')) {
      setShowBackOption(true);
      return "I'm Chetan Agarwal, a passionate Full Stack Developer with expertise in building scalable web applications and microservices. I specialize in:\n\n• Frontend Development (React, TypeScript)\n• Backend Development (Node.js, Express)\n• Cloud Technologies (AWS)\n• Game Development\n\nI love creating innovative solutions and contributing to open-source projects. Would you like to know more about my work or specific skills?\n\nType 'back' to return to the main menu.";
    }

    // Current Work
    if (lowerMessage.includes('current') || lowerMessage.includes('working on')) {
      setShowBackOption(true);
      return "I'm currently focused on several exciting areas:\n\n• Building scalable web applications using React and Node.js\n• Exploring cloud-native architectures with AWS\n• Contributing to open-source projects\n• Learning about AI and machine learning\n\nI'm also working on improving my portfolio with new projects. Would you like to know more about any of these areas?\n\nType 'back' to return to the main menu.";
    }

    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio')) {
      setShowBackOption(true);
      return "Here are some of my notable projects:\n\n1. Apple Website Clone\n• Pixel-perfect recreation using React & TypeScript\n• Responsive design with Tailwind CSS\n• Advanced animations with Framer Motion\n\n2. E-Commerce Dashboard\n• Full-stack application with MERN stack\n• Real-time analytics and inventory management\n• Secure authentication and authorization\n\n3. 2D Platformer Game\n• Built with Java and LibGDX\n• Custom physics engine\n• Procedurally generated levels\n\nWould you like more details about any specific project?\n\nType 'back' to return to the main menu.";
    }

    // Skills & Technical Experience
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
      setShowBackOption(true);
      return "My technical expertise includes:\n\nFrontend:\n• React, TypeScript, Next.js\n• Tailwind CSS, Framer Motion\n• Redux, Zustand\n\nBackend:\n• Node.js, Express\n• MongoDB, PostgreSQL\n• RESTful APIs, GraphQL\n\nDevOps & Cloud:\n• AWS Services\n• Docker, Kubernetes\n• CI/CD Pipelines\n\nWhat specific technology would you like to know more about?\n\nType 'back' to return to the main menu.";
    }

    // Education & Certifications
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('certification')) {
      setShowBackOption(true);
      return "Education & Certifications:\n\nEducation:\n• Computer Science at MAIT, Delhi\n• Specialized in Software Engineering\n\nCertifications:\n• AWS Solutions Architect\n• React Certification from Meta\n• Advanced JavaScript (Coursera)\n• Data Structures & Algorithms\n\nI'm constantly learning and updating my skills. Would you like more details about any specific certification?\n\nType 'back' to return to the main menu.";
    }

    // Contact Information
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      setShowBackOption(true);
      return "You can reach me through:\n\n• Email: contact@example.com\n• LinkedIn: linkedin.com/in/chetan\n• GitHub: github.com/chetan\n• Location: New Delhi, India\n\nI'm always open to interesting opportunities and collaborations. Feel free to connect!\n\nType 'back' to return to the main menu.";
    }

    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('work experience')) {
      setShowBackOption(true);
      return "My professional experience includes:\n\n• Full Stack Development\n- Built and maintained large-scale web applications\n- Led development teams of 5+ members\n- Implemented microservices architecture\n\n• Open Source Contributions\n- Active contributor to React libraries\n- Created developer tools and utilities\n\n• Technical Leadership\n- Mentored junior developers\n- Code review and architecture planning\n\nWould you like more specific details about any area?\n\nType 'back' to return to the main menu.";
    }

    // Achievements
    if (lowerMessage.includes('achievement') || lowerMessage.includes('award')) {
      setShowBackOption(true);
      return "Some of my notable achievements:\n\n• Technical Leadership\n- Led a team of 8 developers\n- Delivered major e-commerce platform\n\n• AWS Certification\n- Achieved Solutions Architect Professional\n- Top scores in certification\n\n• Open Source Impact\n- Major contributions to React libraries\n- 50+ merged pull requests\n\n• Innovation Award\n- Developed AI-powered automation system\n- Company-wide recognition\n\nWould you like to know more about any of these achievements?\n\nType 'back' to return to the main menu.";
    }

    // Help/Menu
    if (lowerMessage.includes('help') || lowerMessage.includes('menu') || lowerMessage.includes('what can you')) {
      setShowBackOption(false);
      return "I can help you with information about:\n\n1. About Me\n2. Projects & Portfolio\n3. Skills & Technical Experience\n4. Education & Certifications\n5. Contact Information\n6. Professional Experience\n7. Achievements\n\nWhat would you like to know more about?";
    }

    // Default response for other queries
    setShowBackOption(true);
    return "I'd be happy to help you learn more about my:\n\n• Background and experience\n• Technical skills and projects\n• Education and certifications\n• Contact information\n\nPlease let me know what interests you, or type 'back' to see all available topics!";
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

  const handleBack = () => {
    setNewMessage('back');
    handleSend();
    setShowBackOption(false);
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
            <div className="p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white flex items-center">
              {showBackOption && (
                <button
                  onClick={handleBack}
                  className="mr-2 p-1 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <ArrowLeft size={20} />
                </button>
              )}
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