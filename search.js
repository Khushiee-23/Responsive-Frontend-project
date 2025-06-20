const courses = [
    {
        name: "Artificial Intelligence and Machine Learning",
        shortName: ["ai", "machine learning", "ai & ml"],
        cost: 299,
        rating: 4.8,
        description: "Dive into the world of AI and ML with this comprehensive course. Learn to build intelligent systems, work with neural networks, and apply machine learning algorithms to real-world problems. Perfect for CSE students aiming to enter cutting-edge tech fields.",
        page: "products.html",
        id: "ai-ml-course"
    },
    {
        name: "Full Stack Development",
        shortName: ["full stack", "web development"],
        cost: 249,
        rating: 4.5,
        description: "Master both front-end and back-end development in this hands-on course. Learn HTML, CSS, JavaScript, Node.js, and databases to build fully functional web applications. Ideal for students looking to become versatile developers.",
        page: "products.html",
        id: "full-stack-course"
    },
    {
        name: "Cybersecurity",
        shortName: ["cybersecurity", "cyber security"],
        cost: 279,
        rating: 4.7,
        description: "Protect digital systems with this in-depth cybersecurity course. Explore ethical hacking, network security, and threat analysis to safeguard against cyber attacks. A must for CSE students interested in securing the digital world.",
        page: "products.html",
        id: "cybersecurity-course"
    }
];

const services = [
    {
        name: "Software Development",
        shortName: ["software dev", "software development"],
        description: "We provide custom software development services tailored to your business needs. From web applications to mobile apps, our team leverages the latest technologies to deliver scalable and efficient solutions.",
        page: "service.html",
        id: "software-development-service"
    },
    {
        name: "IT Consulting",
        shortName: ["it consulting", "it services"],
        description: "Our IT consulting services help you optimize your technology infrastructure. We offer expertise in cloud computing, cybersecurity, and system integration to ensure your business stays ahead in the digital landscape.",
        page: "service.html",
        id: "it-consulting-service"
    },
    {
        name: "Training Programs",
        shortName: ["training", "training programs"],
        description: "Empower your team with our comprehensive training programs. We offer workshops and courses in programming, data science, and emerging technologies, designed to upskill your workforce for the future.",
        page: "service.html",
        id: "training-programs-service"
    }
];

// Search bar functionality
        const searchData = [
            // Home page content
            {
                name: "Welcome",
                keywords: ["welcome", "codinglab"],
                page: "home.html",
                id: "hero-section"
            },
            {
                name: "What We Offer",
                keywords: ["what we offer", "overview"],
                page: "home.html",
                id: "overview"
            },
            {
                name: "Courses Overview",
                keywords: ["courses overview"],
                page: "home.html",
                id: "courses-overview"
            },
            {
                name: "Services Overview",
                keywords: ["services overview"],
                page: "home.html",
                id: "services-overview"
            },
            // Products page content (Courses)
            {
                name: "Artificial Intelligence and Machine Learning",
                keywords: ["ai", "machine learning", "ai & ml", "artificial intelligence"],
                page: "products.html",
                id: "ai-ml-course"
            },
            {
                name: "Full Stack Development",
                keywords: ["full stack", "web development", "full stack development"],
                page: "products.html",
                id: "full-stack-course"
            },
            {
                name: "Cybersecurity",
                keywords: ["cybersecurity", "cyber security"],
                page: "products.html",
                id: "cybersecurity-course"
            },
            // Services page content
            {
                name: "Software Development",
                keywords: ["software dev", "software development"],
                page: "service.html",
                id: "software-development-service"
            },
            {
                name: "IT Consulting",
                keywords: ["it consulting", "it services"],
                page: "service.html",
                id: "it-consulting-service"
            },
            {
                name: "Training Programs",
                keywords: ["training", "training programs"],
                page: "service.html",
                id: "training-programs-service"
            },
            // Contact page content
            {
                name: "Contact Us",
                keywords: ["contact", "contact us", "email", "get in touch"],
                page: "contact.html",
                id: "contact-section"
            }
        ];

        function handleSearch() {
            const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
            const searchResults = document.getElementById('searchResults');

            // Clear previous results
            searchResults.innerHTML = '';

            if (!searchInput) {
                searchResults.classList.remove('active');
                return;
            }

            // Search through all content
            const results = [];

            searchData.forEach(item => {
                const match = item.keywords.some(keyword => keyword.includes(searchInput)) || item.name.toLowerCase().includes(searchInput);
                if (match) {
                    results.push({ name: item.name, page: item.page, id: item.id });
                }
            });

            // Display results
            if (results.length > 0) {
                results.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.textContent = result.name;
                    resultItem.onclick = () => {
                        // Check if we're already on the target page
                        const currentPage = window.location.pathname.split('/').pop() || 'home.html';
                        if (currentPage === result.page) {
                            // Scroll to the section if on the same page
                            const element = document.getElementById(result.id);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        } else {
                            // Redirect to the target page with the section ID
                            window.location.href = `${result.page}#${result.id}`;
                        }
                        searchResults.classList.remove('active');
                        document.getElementById('searchInput').value = '';
                    };
                    searchResults.appendChild(resultItem);
                });
                searchResults.classList.add('active');
            } else {
                searchResults.classList.remove('active');
            }
        }

        function hideSearchResults() {
            setTimeout(() => {
                const searchResults = document.getElementById('searchResults');
                if (!document.getElementById('searchInput').matches(':focus')) {
                    searchResults.classList.remove('active');
                }
            }, 200);
        }