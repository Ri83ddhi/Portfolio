// Smooth scroll for nav links
// Adds ease-in-out animation and updates active link state
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
  });
  
  // Form validation with better styling for feedback
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!nameRegex.test(name)) {
        alert('Please enter a valid name (letters and spaces only).');
        return;
      }
    
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
    
      // If valid, you can proceed (e.g., send data or show thank you)
      alert('Thank you for your message!');
      form.reset();
    });
  
  function showFormAlert(message, type) {
    let alert = document.createElement('div');
    alert.className = `form-alert ${type}`;
    alert.textContent = message;
    form.appendChild(alert);
    setTimeout(() => alert.remove(), 4000);
  }
  
  // Modal functionality
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  
  const projectData = [
    {
      title: 'Hospital Website',
      image: 'img/p1.png',
      description: 'A modern hospital website offering patient care info, appointment booking, and service details with responsive, user-friendly design.'
    },
    {
      title: 'E-Commerce Website',
      image: 'img/p2.png',
      description: 'Innovative e-commerce platform delivering seamless shopping experiences with secure payments and personalized customer service.'
    },
    {
      title: 'Cosmetics Website',
      image: 'img/p3.png',
      description: 'Passionate about beauty, delivering innovative skincare and makeup solutions that enhance confidence and natural glow.'
    }
  ];
  
  function openModal(index) {
    const project = projectData[index];
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalDescription.textContent = project.description;
    modal.classList.add('show');
  }
  
  function closeModal() {
    modal.classList.remove('show');
  }
  
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  