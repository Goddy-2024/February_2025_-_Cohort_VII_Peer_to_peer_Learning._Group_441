
// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Update Copyright Year
const yearElements = document.querySelectorAll('#current-year');
const currentYear = new Date().getFullYear();
yearElements.forEach(element => {
  element.textContent = currentYear;
});

// Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.classList.add('hidden');
    btnLoading.classList.remove('hidden');
    
    // Simulate form submission
    setTimeout(() => {
      // Reset form
      contactForm.reset();
      
      // Hide loading state
      btnText.classList.remove('hidden');
      btnLoading.classList.add('hidden');
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
    }, 1500);
  });
}

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    if (href !== '#') {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Create a folder structure for images
document.addEventListener('DOMContentLoaded', function() {
  console.log('Remember to create an "img" folder in your project root directory and add your images there.');
  console.log('Required images:');
  console.log('- img/hero-portrait.png - Your profile photo for the homepage');
  console.log('- img/about-portrait.png - Your profile photo for the about page');
});
