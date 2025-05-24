
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
        
        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Typing Effect
        const typingText = document.getElementById('typingText');
        const phrases = [
            "Aspiring to dive into the tech sector",
            "IT Student",
            "SaaS Founder",
            "Cybersecurity Enthusiast",
             "Import Business Owner",
             "Hybrid Athlete"
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;
        
        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                isEnd = true;
                setTimeout(() => {
                    isDeleting = true;
                }, 400);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            
            const speed = isDeleting ? 50 : isEnd ? 100 : 100;
            setTimeout(type, speed);
        }
        
        // Start typing effect
        setTimeout(type, 1);
        
        // Matrix Background
        const matrixBg = document.getElementById('matrixBg');
        
        function createMatrixLines() {
            const width = window.innerWidth;
            const count = Math.floor(width / 20);
            
            for (let i = 0; i < count; i++) {
                const line = document.createElement('div');
                line.classList.add('matrix-line');
                line.style.left = `${Math.random() * 100}%`;
                line.style.animationDuration = `${3 + Math.random() * 5}s`;
                line.style.animationDelay = `${Math.random() * 5}s`;
                line.style.opacity = Math.random();
                matrixBg.appendChild(line);
            }
        }
        
        createMatrixLines();
        
        // Particles
        const particlesContainer = document.getElementById('particles');
        
        function createParticles() {
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                const size = Math.random() * 5 + 1;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100 + 100}%`;
                
                const duration = Math.random() * 20 + 10;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        createParticles();
        
        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        const speed = 200;
        
        function animateCounters() {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animateCounters, 1);
                } else {
                    counter.innerText = target;
                }
            });
        }
        
        // Activate counters when scrolled into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
        
       // Modal Handling
const modalBtns = document.querySelectorAll('.project-modal-btn');
const modals = {
    arithmetic: document.getElementById('arithmeticModal'),
    lantern: document.getElementById('lanternModal'),
    vehicle: document.getElementById('vehicleModal'),
    'webdev-agent': document.getElementById('webdevAgentModal') // New modal added
};
const modalCloses = document.querySelectorAll('.modal-close');

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const project = btn.getAttribute('data-project');
        const modal = modals[project];
        
        modal.classList.add('active');
        modal.querySelector('.modal-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalCloses.forEach(close => {
    close.addEventListener('click', () => {
        const modal = close.closest('.modal');
        modal.classList.remove('active');
        modal.querySelector('.modal-overlay').classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            const modal = overlay.closest('.modal');
            modal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
        // Navigation active state
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 300) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
            document.addEventListener("DOMContentLoaded", function () {
              const typed = new Typed("#typed-name", {
                strings: ["Hello, I'm <span class='text-white'>Zaccaria Harda</span>"],
                typeSpeed: 90,
                backSpeed: 50,
                backDelay: 3000,
                loop: false,
                showCursor: true,
                cursorChar: "|",
                onComplete: function (self) {
                  setTimeout(() => {
                    self.cursor.style.display = 'none';
                  }, 500); // Optional delay before hiding cursor
                }
              });
            });
          
            document.addEventListener("DOMContentLoaded", async function () {
                const terminal = document.getElementById("terminal-output");
            
                // Function to type the text with a delay
                const typeLine = async (text, delay = 40) => {
                  return new Promise((resolve) => {
                    let i = 0;
                    const line = document.createElement("div");
                    terminal.appendChild(line);
            
                    const typeChar = () => {
                      if (i < text.length) {
                        line.innerHTML += text.charAt(i++);
                        setTimeout(typeChar, delay);
                      } else {
                        resolve();
                      }
                    };
                    typeChar();
                  });
                };
            
                // Function to get time-based greeting
                const getTimeGreeting = () => {
                  const hour = new Date().getHours();
                  if (hour < 12) return "Good morning";
                  if (hour < 18) return "Good afternoon";
                  return "Good evening";
                };


                
            
                // Function to get user's location using IP
                const getLocation = async () => {
                  try {
                    const res = await fetch("https://ipapi.co/json");
                    const data = await res.json();
                    return data.city || data.country_name || "somewhere";
                  } catch {
                    return "somewhere";
                  }
                };
            
                // Fetch data for greeting and location
                const greeting = getTimeGreeting();
                const location = await getLocation();
            
                // Type the initial shell commands and responses
                await typeLine("> whoami");
                await typeLine("Zaccaria Harda");
                await typeLine("> greet");
                await typeLine(`${greeting} from ${location}! 👋`);
                await typeLine("> skills --list");
                await typeLine("Cybersecurity, AI, SaaS, Automation");
            
                // Add a blinking cursor after typing completes
                const cursor = document.createElement("div");
                cursor.innerHTML = ">";
                const blink = document.createElement("span");
                blink.textContent = "|";
                blink.style.marginLeft = "4px";
                blink.style.animation = "blink 1s step-end infinite";
                blink.style.color = "#22c55e";
                cursor.appendChild(blink);
                terminal.appendChild(cursor);
              });
              
              
             // Show location badge when scrolled into view
const badgeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            badgeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const locationBadge = document.querySelector('.location-badge');
if (locationBadge) {
    badgeObserver.observe(locationBadge);
}
              
              
              
        
           
       