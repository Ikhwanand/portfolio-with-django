// Form validation and submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Form validation
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Reset previous errors
            clearErrors();
            
            // Validate form
            const name = contactForm.querySelector('[name="name"]').value.trim();
            const email = contactForm.querySelector('[name="email"]').value.trim();
            const subject = contactForm.querySelector('[name="subject"]').value.trim();
            const message = contactForm.querySelector('[name="message"]').value.trim();
            
            let isValid = true;
            
            // Name validation
            if (name.length < 2) {
                showError('name', 'Name must be at least 2 characters long');
                isValid = false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Subject validation
            if (subject.length < 3) {
                showError('subject', 'Subject must be at least 3 characters long');
                isValid = false;
            }
            
            // Message validation
            if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters long');
                isValid = false;
            }
            
            if (isValid) {
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                `;
                
                try {
                    await submitForm(this);
                    // Form submission is handled by Django, this is just for the loading state
                } catch (error) {
                    console.error('Error:', error);
                } finally {
                    // Reset button state (will be redirected by Django if successful)
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnText;
                    }, 2000);
                }
            }
        });
    }
});

// Skill bars animation
const animateSkillBars = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.dataset.width;
                setTimeout(() => {
                    bar.style.width = `${width}%`;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.rombo-width-animate').forEach(bar => {
        observer.observe(bar);
    });
};

// Parallax effect for hero section
const initParallax = () => {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
};

// Typing effect for headline
const initTypingEffect = () => {
    const headline = document.querySelector('.typing-text');
    if (headline) {
        const text = headline.textContent;
        headline.textContent = '';
        let i = 0;
        
        const typing = setInterval(() => {
            if (i < text.length) {
                headline.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
};

// Project filter
const initProjectFilter = () => {
    const filterButtons = document.querySelectorAll('.project-filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('btn-active'));
            button.classList.add('btn-active');
            
            // Filter projects
            projects.forEach(project => {
                const categories = project.dataset.categories.split(',');
                if (filter === 'all' || categories.includes(filter)) {
                    project.style.display = 'block';
                    project.classList.add('rombo-fade-in');
                } else {
                    project.style.display = 'none';
                    project.classList.remove('rombo-fade-in');
                }
            });
        });
    });
};

// Helper functions for form validation
function showError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-error text-sm mt-1';
    errorDiv.innerHTML = message;
    field.classList.add('input-error');
    field.parentNode.appendChild(errorDiv);
}

function clearErrors() {
    document.querySelectorAll('.text-error').forEach(error => error.remove());
    document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));
}

async function submitForm(form) {
    return new Promise((resolve) => {
        form.submit();
        resolve();
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    initParallax();
    initTypingEffect();
    initProjectFilter();
});
