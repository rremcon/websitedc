import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { 
            text: "Hello! I'm your IT assistant. I can help you with questions about web development, software services, and technology. What would you like to know?", 
            sender: "bot",
            type: "text"
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getITResponse = (userInput) => {
        const input = userInput.toLowerCase();
        
        // Company Services
        if (input.includes("company") || input.includes("services") || input.includes("offer")) {
            return "At DIFRNT COMPOUND, we offer comprehensive IT solutions including Web Development, Web Design, User Experience, Branding, and AI services. Our solutions are tailored to help businesses grow and succeed in the digital world. We focus on creating modern, responsive, and user-friendly applications that drive business growth.";
        }
        
        // Company Web Development
        if (input.includes("company web") || input.includes("your web")) {
            return "Our web development services focus on creating modern, responsive applications using the latest technologies. We specialize in cutting-edge frameworks. Our development process emphasizes clean code, performance optimization, and mobile-first design to ensure the best user experience.";
        }
        
        // Company AI Solutions
        if (input.includes("company ai") || input.includes("your ai")) {
            return "Our AI solutions are designed to help businesses automate processes and improve customer interactions. We develop intelligent chatbots, predictive analytics systems, and machine learning models that help businesses make data-driven decisions and enhance their operations.";
        }
        
        // Company UX/UI
        if (input.includes("company design") || input.includes("your design")) {
            return "Our design team creates intuitive and engaging user interfaces that improve user satisfaction and conversion rates. We follow a user-centered design approach, creating wireframes and prototypes to ensure the best possible user experience for your customers.";
        }
        
        // Company Process
        if (input.includes("process") || input.includes("methodology") || input.includes("approach")) {
            return "We follow an agile development methodology, working closely with clients to deliver high-quality solutions. Our process includes requirement analysis, design, development, testing, and deployment. We maintain regular communication and provide updates throughout the project lifecycle.";
        }
        
        // Company Experience
        if (input.includes("experience") || input.includes("expertise") || input.includes("skills")) {
            return "Our team consists of experienced professionals in web development, design, AI, and software engineering. We stay updated with the latest technologies and best practices to deliver cutting-edge solutions to our clients.";
        }
        
        // Company Projects
        if (input.includes("projects") || input.includes("portfolio") || input.includes("work")) {
            return "You can view our portfolio of projects in the Portfolio section of our website. We've worked with various clients across different industries, delivering custom IT solutions that meet their specific needs and business goals.";
        }
        
        // Company ContactForm
        if (input.includes("contact") || input.includes("reach") || input.includes("get in touch")) {
            return "You can reach us through the contact form at the bottom of our website. We're always happy to discuss your project requirements and provide a customized solution for your business needs.";
        }
        
        // Company Pricing
        if (input.includes("price") || input.includes("cost") || input.includes("budget")) {
            return "Our pricing varies based on project scope and requirements. We offer customized solutions tailored to your budget and business needs. ContactForm us for a detailed quote and we'll work with you to find the best solution within your budget.";
        }
        
        // Company Timeline
        if (input.includes("time") || input.includes("duration") || input.includes("how long")) {
            return "Project timelines depend on the scope and complexity of the work. We provide detailed project plans and milestones during the initial consultation. Our agile approach allows for flexibility and regular updates throughout the development process.";
        }
        
        // Web Development
        if (input.includes("web development") || input.includes("web dev")) {
            return "Web development involves creating websites and web applications. It includes frontend development, backend development, and database management. Modern web development focuses on responsive design, performance optimization, and user experience.";
        }
        
        // Frontend
        if (input.includes("frontend") || input.includes("front end")) {
            return "Frontend development focuses on the user interface and user experience. Key technologies help build dynamic and responsive user interfaces.";
        }
        
        // Backend
        if (input.includes("backend") || input.includes("back end")) {
            return "Backend development handles server-side logic, databases, and application integration.";
        }
        
        // UI/UX
        if (input.includes("ui") || input.includes("ux") || input.includes("user experience")) {
            return "UI/UX design focuses on creating intuitive and engaging user interfaces. UI (User Interface) deals with visual elements, while UX (User Experience) focuses on the overall feel and usability. Good UI/UX design improves user satisfaction and conversion rates.";
        }
        
        // Software Development
        if (input.includes("software") || input.includes("app development")) {
            return "Software development involves creating applications for various platforms. It includes planning, coding, testing, and maintenance. Modern software development often uses agile methodologies and focuses on creating scalable, maintainable, and secure applications.";
        }
        
        // AI and Machine Learning
        if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("machine learning")) {
            return "AI and Machine Learning involve creating systems that can learn and make decisions. Applications include chatbots, image recognition, and predictive analytics. These technologies are transforming how businesses operate and interact with customers.";
        }
        
        // Cloud Computing
        if (input.includes("cloud") || input.includes("aws") || input.includes("azure")) {
            return "Cloud computing provides on-demand computing resources over the internet. Popular platforms include AWS, Azure, and Google Cloud. Benefits include scalability, cost-efficiency, and reliability. Cloud services include storage, computing power, and various managed services.";
        }
        
        // Cybersecurity
        if (input.includes("security") || input.includes("cyber") || input.includes("hack")) {
            return "Cybersecurity protects systems and data from digital attacks. It includes measures like encryption, firewalls, and secure coding practices. Regular security audits and updates are essential to maintain system integrity and protect sensitive information.";
        }
        
        // Database
        if (input.includes("database") || input.includes("sql") || input.includes("data")) {
            return "Databases store and manage data efficiently. Database management involves designing schemas, optimizing queries, and ensuring data integrity and security.";
        }
        
        // DevOps
        if (input.includes("devops") || input.includes("deployment")) {
            return "DevOps combines development and operations to improve collaboration and efficiency. It includes continuous integration/continuous deployment (CI/CD), containerization, and infrastructure as code. DevOps practices help teams deliver software faster and more reliably.";
        }
        
        // Mobile Development
        if (input.includes("mobile") || input.includes("app") || input.includes("ios") || input.includes("android")) {
            return "Mobile development creates applications for smartphones and tablets. Platforms include iOS and Android. Cross-platform frameworks allow building apps for multiple platforms with a single codebase.";
        }
        
        // General IT
        if (input.includes("it") || input.includes("technology")) {
            return "Information Technology encompasses various fields including software development, networking, cybersecurity, and data management. Modern IT focuses on digital transformation, cloud computing, and creating efficient, secure, and scalable solutions.";
        }
        
        // Default response
        return "I can help you with questions about our company's IT solutions, services, and expertise. You can ask about our web development, AI solutions, design services, or any other aspect of our work. What would you like to know?";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        setMessages(prev => [...prev, { text: inputValue, sender: "user", type: "text" }]);
        
        // Show typing indicator
        setIsTyping(true);
        
        // Simulate bot response with delay
        setTimeout(() => {
            setIsTyping(false);
            
            const response = getITResponse(inputValue);
            setMessages(prev => [...prev, { text: response, sender: "bot", type: "text" }]);
        }, 1500);

        setInputValue('');
    };

    return (
        <>
            <button 
                className="chatbot-toggle" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chatbot"
            >
                {isOpen ? (
                    <>
                        <FaTimes />
                        <span className="chatbot-toggle-text">Close</span>
                    </>
                ) : (
                    <>
                        <FaRobot />
                        <span className="chatbot-toggle-text">Chatbot</span>
                    </>
                )}
            </button>

            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <h3>IT Assistant</h3>
                        <button onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>
                    
                    <div className="chatbot-messages">
                        {messages.map((message, index) => (
                            <div 
                                key={index}
                                className={`message ${message.sender}`}
                            >
                                {message.text}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="message bot typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className="chatbot-input">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about IT, web development, or technology..."
                        />
                        <button type="submit">
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot; 