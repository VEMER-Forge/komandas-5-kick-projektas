document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.querySelector('input[name="email"]');
  const requiredMessage = document.querySelector('.required-message');
  
  requiredMessage.style.display = 'none';
  
  emailInput.addEventListener('blur', function() {
    if (!this.value) {
      requiredMessage.style.display = 'block';
    } else {
      requiredMessage.style.display = 'none';
    }
  });
  
  document.querySelector('.form-container').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    
    if (!email) {
      requiredMessage.style.display = 'block';
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      requiredMessage.textContent = "Please enter a valid email";
      requiredMessage.style.display = 'block';
      return;
    }
    
    requiredMessage.textContent = "This field is required";
    
    console.log('Form submitted with data:', {
      name,
      email,
      company,
      title,
      message
    });
    
    alert('Form submitted successfully!');
    this.reset();
  });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Variables for mobile menu
  const hamburgerButton = document.createElement('button');
  hamburgerButton.classList.add('hamburger-menu');
  hamburgerButton.innerHTML = '☰';
  
  // Create mobile menu structure
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.add('mobile-menu');
  
  const mobileMenuHeader = document.createElement('div');
  mobileMenuHeader.classList.add('mobile-menu-header');
  
  const mobileMenuLogo = document.createElement('a');
  mobileMenuLogo.href = '/';
  mobileMenuLogo.textContent = 'myteam';
  mobileMenuLogo.classList.add('logo');
  
  const closeButton = document.createElement('button');
  closeButton.classList.add('mobile-menu-close');
  closeButton.innerHTML = '✕';
  
  mobileMenuHeader.appendChild(mobileMenuLogo);
  mobileMenuHeader.appendChild(closeButton);
  
  const mobileMenuNav = document.createElement('div');
  mobileMenuNav.classList.add('mobile-menu-nav');
  
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.textContent = 'home';
  
  const aboutLink = document.createElement('a');
  aboutLink.href = '/about';
  aboutLink.textContent = 'about';
  
  mobileMenuNav.appendChild(homeLink);
  mobileMenuNav.appendChild(aboutLink);
  
  const contactButton = document.createElement('button');
  contactButton.classList.add('mobile-menu-button');
  contactButton.textContent = 'contact us';
  
  mobileMenu.appendChild(mobileMenuHeader);
  mobileMenu.appendChild(mobileMenuNav);
  mobileMenu.appendChild(contactButton);
  
  // Only add hamburger menu and mobile menu if screen is small enough
  if (window.innerWidth <= 768) {
    document.querySelector('.navbar').appendChild(hamburgerButton);
    document.body.appendChild(mobileMenu);
  }
  
  // Event listeners for mobile menu
  hamburgerButton.addEventListener('click', function() {
    mobileMenu.classList.add('open');
  });
  
  closeButton.addEventListener('click', function() {
    mobileMenu.classList.remove('open');
  });
  
  // Form validation and animation
  const form = document.querySelector('.form-container');
  const emailInput = document.getElementById('email');
  const requiredMessage = document.querySelector('.required-message');
  
  if (form) {
    // Hide required message by default
    requiredMessage.style.display = 'none';
    
    emailInput.addEventListener('blur', function() {
      if (emailInput.validity.valueMissing) {
        requiredMessage.style.display = 'block';
        emailInput.style.borderBottomColor = '#F67E7E';
      } else {
        requiredMessage.style.display = 'none';
        emailInput.style.borderBottomColor = '#fff';
      }
    });
    
    // Form submission animation
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      if (form.checkValidity()) {
        // Animate form submission
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach((input, index) => {
          setTimeout(() => {
            input.style.transition = 'all 0.3s ease';
            input.style.transform = 'translateX(-20px)';
            input.style.opacity = '0';
          }, index * 100);
        });
        
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
          submitBtn.textContent = 'Thanks!';
          submitBtn.style.backgroundColor = '#F67E7E';
          
          // Reset the form after animation completes
          setTimeout(() => {
            form.reset();
            inputs.forEach(input => {
              input.style.transform = '';
              input.style.opacity = '';
            });
            submitBtn.textContent = 'submit';
            submitBtn.style.backgroundColor = '';
          }, 2000);
        }, inputs.length * 100 + 200);
      }
    });
  }
  
  function applyInitialAnimations() {
    const reasonItems = document.querySelectorAll('.reasons li');
    reasonItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 300 + (index * 150));
    });
    
    const contactHeading = document.querySelector('.contact');
    const askHeading = document.querySelector('.ask');
    
    if (contactHeading) {
      contactHeading.style.opacity = '0';
      contactHeading.style.transform = 'translateY(-20px)';
      contactHeading.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        contactHeading.style.opacity = '1';
        contactHeading.style.transform = 'translateY(0)';
      }, 200);
    }
    
    if (askHeading) {
      askHeading.style.opacity = '0';
      askHeading.style.transform = 'translateX(-20px)';
      askHeading.style.transition = 'all 0.6s ease';
      
      setTimeout(() => {
        askHeading.style.opacity = '1';
        askHeading.style.transform = 'translateX(0)';
      }, 400);
    }
  }
  
  applyInitialAnimations();
  
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
      if (!document.querySelector('.hamburger-menu')) {
        document.querySelector('.navbar').appendChild(hamburgerButton);
      }
      if (!document.body.contains(mobileMenu)) {
        document.body.appendChild(mobileMenu);
      }
    } else {
      if (document.querySelector('.hamburger-menu')) {
        document.querySelector('.hamburger-menu').remove();
      }
      if (document.body.contains(mobileMenu)) {
        mobileMenu.remove();
      }
    }
  });
});