(function () {
    // Course data
    const courses = [
        {
            name: "Artificial Intelligence and Machine Learning",
            shortName: ["ai", "machine learning", "ai & ml"],
            cost: 299,
            rating: 4.8,
            description: "Dive into the world of AI and ML with this comprehensive course. Learn to build intelligent systems, work with neural networks, and apply machine learning algorithms to real-world problems. Perfect for CSE students aiming to enter cutting-edge tech fields."
        },
        {
            name: "Full Stack Development",
            shortName: ["full stack", "web development"],
            cost: 249,
            rating: 4.5,
            description: "Master both front-end and back-end development in this hands-on course. Learn HTML, CSS, JavaScript, Node.js, and databases to build fully functional web applications. Ideal for students looking to become versatile developers."
        },
        {
            name: "Cybersecurity",
            shortName: ["cybersecurity", "cyber security"],
            cost: 279,
            rating: 4.7,
            description: "Protect digital systems with this in-depth cybersecurity course. Explore ethical hacking, network security, and threat analysis to safeguard against cyber attacks. A must for CSE students interested in securing the digital world."
        }
    ];

    // Service data
    const services = [
        {
            name: "Software Development",
            shortName: ["software dev", "software development"],
            description: "We provide custom software development services tailored to your business needs. From web applications to mobile apps, our team leverages the latest technologies to deliver scalable and efficient solutions."
        },
        {
            name: "IT Consulting",
            shortName: ["it consulting", "it services"],
            description: "Our IT consulting services help you optimize your technology infrastructure. We offer expertise in cloud computing, cybersecurity, and system integration to ensure your business stays ahead in the digital landscape."
        },
        {
            name: "Training Programs",
            shortName: ["training", "training programs"],
            description: "Empower your team with our comprehensive training programs. We offer workshops and courses in programming, data science, and emerging technologies, designed to upskill your workforce for the future."
        }
    ];

    // Create chatbot HTML structure
    const chatbotHTML = `
        <div class="chatbot-container">
            <button class="chatbot-toggle" onclick="toggleChatbot()" aria-label="Toggle chatbot">💬</button>
            <div class="chatbot-window" id="chatbotWindow">
                <div class="chatbot-header">
                    <h3>CodingLab Assistant</h3>
                    <button class="close-chat" onclick="toggleChatbot()" aria-label="Close chatbot">✖</button>
                </div>
                <div class="chatbot-body" id="chatbotBody">
                    <div class="chat-message bot">Hello! I'm here to help you with our courses and services. You can ask about specific courses or services, prices, ratings, or type 'list courses' or 'list services' to see all options. You can also use the search bar above to find what you're looking for! What would you like to know?</div>
                </div>
                <div class="chatbot-input">
                    <input type="text" id="chatInput" placeholder="Type your message..." onkeypress="if(event.key === 'Enter') sendMessage()">
                    <button onclick="sendMessage()">Send</button>
                </div>
            </div>
        </div>
    `;

    // Create chatbot CSS
    const chatbotCSS = `
        .chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }

        .chatbot-toggle {
            background-color: #2c3e50;
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .chatbot-window {
            display: none;
            width: 300px;
            height: 400px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            position: absolute;
            bottom: 70px;
            right: 0;
            flex-direction: column;
        }

        .chatbot-window.active {
            display: flex;
        }

        .chatbot-header {
            background-color: #2c3e50;
            color: #fff;
            padding: 10px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chatbot-header h3 {
            font-size: 16px;
        }

        .chatbot-header .close-chat {
            background: none;
            border: none;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
        }

        .chatbot-body {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
            background-color: #f5f5f5;
        }

        .chat-message {
            margin-bottom: 10px;
            padding: 8px 12px;
            border-radius: 5px;
            max-width: 80%;
            word-wrap: break-word;
        }

        .chat-message.user {
            background-color: #3498db;
            color: #fff;
            margin-left: auto;
            text-align: right;
        }

        .chat-message.bot {
            background-color: #e0e0e0;
            color: #333;
            margin-right: auto;
        }

        .chatbot-input {
            display: flex;
            padding: 10px;
            background-color: #34495e;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        .chatbot-input input {
            flex: 1;
            padding: 8px;
            border: none;
            border-radius: 5px 0 0 5px;
            font-size: 14px;
            outline: none;
        }

        .chatbot-input button {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 8px 12px;
            border-radius: 0 5px 5px 0;
            cursor: pointer;
            font-size: 14px;
        }

        .chatbot-input button:hover {
            background-color: #2980b9;
        }

        @media (max-width: 768px) {
            .chatbot-window {
                width: 250px;
                height: 350px;
            }

            .chatbot-header h3 {
                font-size: 14px;
            }

            .chatbot-input input,
            .chatbot-input button {
                font-size: 12px;
            }
        }

        @media (max-width: 480px) {
            .chatbot-window {
                width: 200px;
                height: 300px;
            }
        }
    `;

    // Inject CSS into the page
    const styleElement = document.createElement('style');
    styleElement.textContent = chatbotCSS;
    document.head.appendChild(styleElement);

    // Inject HTML into the page
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);

    // Chatbot JavaScript functionality
    window.toggleChatbot = function () {
        const chatbotWindow = document.getElementById('chatbotWindow');
        chatbotWindow.classList.toggle('active');
    };

    window.sendMessage = function () {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        if (!message) return;

        // Display user message
        const chatBody = document.getElementById('chatbotBody');
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.textContent = message;
        chatBody.appendChild(userMessage);

        // Bot response
        const botResponse = getBotResponse(message.toLowerCase());
        botResponse.forEach(response => {
            const botMessage = document.createElement('div');
            botMessage.className = 'chat-message bot';
            botMessage.textContent = response;
            chatBody.appendChild(botMessage);
        });

        // Clear input and scroll to bottom
        input.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    // Function to display details in chatbot (called by search bar)
    window.showInChatbot = function (type, name) {
        const chatBody = document.getElementById('chatbotBody');
        const chatbotWindow = document.getElementById('chatbotWindow');

        // Open the chatbot if it's not already open
        if (!chatbotWindow.classList.contains('active')) {
            toggleChatbot();
        }

        // Display user-like message
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.textContent = `Tell me about ${name}`;
        chatBody.appendChild(userMessage);

        // Find the item and display its details
        let item;
        if (type === 'course') {
            item = courses.find(course => course.name.toLowerCase() === name.toLowerCase());
            if (item) {
                const botMessages = [
                    `Here’s a quick overview of the ${item.name} course:`,
                    `- Price: $${item.cost}`,
                    `- Rating: ${item.rating}/5`,
                    `- Description: ${item.description}`,
                    `Would you like to know more about another course or our services? Type 'list services' to see our services!`
                ];
                botMessages.forEach(msg => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'chat-message bot';
                    botMessage.textContent = msg;
                    chatBody.appendChild(botMessage);
                });
            }
        } else if (type === 'service') {
            item = services.find(service => service.name.toLowerCase() === name.toLowerCase());
            if (item) {
                const botMessages = [
                    `Here’s a quick overview of our ${item.name} service:`,
                    `${item.description}`,
                    `Would you like to know more about another service or our courses? Type 'list courses' to see our courses!`
                ];
                botMessages.forEach(msg => {
                    const botMessage = document.createElement('div');
                    botMessage.className = 'chat-message bot';
                    botMessage.textContent = msg;
                    chatBody.appendChild(botMessage);
                });
            }
        }

        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    function getBotResponse(message) {
        const responses = [];

        // Handle listing all courses
        if (message.includes('list courses') || message.includes('what courses') || message.includes('all courses')) {
            responses.push("Here’s a list of our courses:");
            courses.forEach(course => {
                responses.push(`${course.name}: $${course.cost}, Rated ${course.rating}/5`);
            });
            responses.push("You can ask for more details about any course by name, or type 'list services' to see our services!");
            return responses;
        }

        // Handle specific course queries
        let foundCourse = null;
        for (const course of courses) {
            const match = course.shortName.some(name => message.includes(name)) || message.includes(course.name.toLowerCase());
            if (match) {
                foundCourse = course;
                break;
            }
        }

        if (foundCourse) {
            if (message.includes('price') || message.includes('cost')) {
                responses.push(`The ${foundCourse.name} course costs $${foundCourse.cost}.`);
            } else if (message.includes('rating')) {
                responses.push(`The ${foundCourse.name} course is rated ${foundCourse.rating}/5.`);
            } else if (message.includes('description') || message.includes('details') || message.includes('about')) {
                responses.push(`Here’s what you need to know about the ${foundCourse.name} course:`);
                responses.push(`- Price: $${foundCourse.cost}`);
                responses.push(`- Rating: ${foundCourse.rating}/5`);
                responses.push(`- Description: ${foundCourse.description}`);
            } else {
                responses.push(`Here’s a quick overview of the ${foundCourse.name} course:`);
                responses.push(`- Price: $${foundCourse.cost}`);
                responses.push(`- Rating: ${foundCourse.rating}/5`);
                responses.push(`- Description: ${foundCourse.description}`);
            }
            responses.push(`Would you like to know more about another course or our services? Type 'list services' to see our services!`);
            return responses;
        }

        // Handle listing all services
        if (message.includes('list services') || message.includes('what services') || message.includes('all services')) {
            responses.push("Here’s a list of our services:");
            services.forEach(service => {
                responses.push(`${service.name}`);
            });
            responses.push("You can ask for more details about any service by name, or type 'list courses' to see our courses!");
            return responses;
        }

        // Handle specific service queries
        let foundService = null;
        for (const service of services) {
            const match = service.shortName.some(name => message.includes(name)) || message.includes(service.name.toLowerCase());
            if (match) {
                foundService = service;
                break;
            }
        }

        if (foundService) {
            if (message.includes('description') || message.includes('details') || message.includes('about')) {
                responses.push(`Here’s what you need to know about our ${foundService.name} service:`);
                responses.push(`${foundService.description}`);
            } else {
                responses.push(`Here’s a quick overview of our ${foundService.name} service:`);
                responses.push(`${foundService.description}`);
            }
            responses.push(`Would you like to know more about another service or our courses? Type 'list courses' to see our courses!`);
            return responses;
        }

        // Handle general queries
        if (message.includes('contact') || message.includes('support')) {
            responses.push('You can reach us via the Contact Us page, or email us at example@email.com.');
            responses.push('Anything else I can help with? Try "list courses" or "list services" to learn more!');
        } else if (message.includes('hello') || message.includes('hi')) {
            responses.push('Hi there! I can help you with our courses and services. Try asking about a specific course or service, or type "list courses" or "list services" to see all options. You can also use the search bar above to find what you\'re looking for!');
        } else {
            responses.push('I’m not sure I understood that. You can ask about our courses or services (e.g., "Tell me about the AI course" or "What is IT Consulting?"), or type "list courses" or "list services" to see all options. Alternatively, try using the search bar above!');
        }

        return responses;
    }
})();S