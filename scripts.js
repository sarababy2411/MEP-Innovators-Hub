// Smooth scroll
function scrollToSection(sectionId) {
    document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}

// Portfolio modal data
const portfolioItems = {
    project1: {
        title: 'Sustainable Office Tower',
        image: 'project1.jpg',
        description: 'A 30-story commercial building with net-zero energy systems.',
        details: 'Completed: 2024 | Location: New York | Key Features: Solar panels, advanced HVAC, rainwater harvesting.'
    },
    project2: {
        title: 'Smart Manufacturing Plant',
        image: 'project2.jpg',
        description: 'A state-of-the-art industrial facility with automated MEP systems.',
        details: 'Completed: 2023 | Location: Texas | Key Features: IoT integration, energy optimization, robotic workflows.'
    },
    project3: {
        title: 'Green Hospital',
        image: 'project3.jpg',
        description: 'A healthcare facility designed for sustainability and patient comfort.',
        details: 'Completed: 2022 | Location: California | Key Features: Low-energy lighting, water recycling, biophilic design.'
    }
};

// Open portfolio modal
function openPortfolioModal(projectId) {
    const project = portfolioItems[projectId];
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-details').textContent = project.details;
    document.getElementById('portfolio-modal').style.display = 'block';
}

// Close portfolio modal
function closePortfolioModal() {
    document.getElementById('portfolio-modal').style.display = 'none';
}

// Portfolio filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.style.display = filter === 'all' || item.dataset.category === filter ? 'block' : 'none';
        });
    });
});

// Stats counter
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = +stat.dataset.target;
        let count = 0;
        const increment = target / 100;
        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        updateCount();
    });
}

// Form submission simulation
function submitForm(event) {
    event.preventDefault();
    alert('Thank you! Your inquiry has been submitted (simulated).');
}

// Scroll-triggered animations
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
            el.style.animationPlayState = 'running';
        }
    });

    // Trigger stats animation when in view
    const statsSection = document.querySelector('.stats');
    if (statsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        animateStats();
        document.removeEventListener('scroll', this); // Run once
    }
});

// Initialize
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
        el.style.animationDelay = `${i * 0.2}s`;
    });
});