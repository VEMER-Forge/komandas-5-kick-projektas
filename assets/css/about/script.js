// Enhanced script for better mobile responsiveness
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu handling
  function setupMobileMenu() {
    // Create hamburger button if it doesn't exist
    if (!document.querySelector('.hamburger-menu')) {
      const hamburgerButton = document.createElement('button');
      hamburgerButton.classList.add('hamburger-menu');
      hamburgerButton.innerHTML = '☰';
      document.querySelector('.navbar').appendChild(hamburgerButton);
    }
    
    // Create mobile menu if it doesn't exist
    if (!document.querySelector('.mobile-menu')) {
      const mobileMenu = document.createElement('div');
      mobileMenu.classList.add('mobile-menu');
      
      mobileMenu.innerHTML = `
        <div class="mobile-menu-header">
          <a href="../../index.html" class="logo">myteam</a>
          <button class="mobile-menu-close">✕</button>
        </div>
        <div class="mobile-menu-nav">
          <a href="../../index.html">home</a>
          <a href="#" class="active">about</a>
        </div>
        <a href="../pages/contact.html" class="mobile-menu-button">contact us</a>
      `;
      
      document.body.appendChild(mobileMenu);
      
      // Add event listeners for mobile menu
      const closeButton = mobileMenu.querySelector('.mobile-menu-close');
      closeButton.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
      });
      
      hamburgerButton.addEventListener('click', function() {
        mobileMenu.classList.add('open');
      });
    }
  }
  
  // Check if mobile view is needed
  function checkMobileView() {
    if (window.innerWidth <= 768) {
      setupMobileMenu();
    } else {
      // Remove mobile elements if screen size increases
      const hamburgerMenu = document.querySelector('.hamburger-menu');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (hamburgerMenu) hamburgerMenu.remove();
      if (mobileMenu) mobileMenu.remove();
    }
  }
  
  // Run on page load and resize
  checkMobileView();
  window.addEventListener('resize', checkMobileView);
  
  // Director card interactions
  const directorCards = document.querySelectorAll('.director-card');
  
  directorCards.forEach(card => {
    const plusButton = card.querySelector('.plus-button');
    
    if (plusButton) {
      plusButton.addEventListener('click', function() {
        // Get director info
        const name = card.querySelector('h3').textContent;
        const role = card.querySelector('p').textContent;
        
        // Store original content
        card.dataset.originalContent = card.innerHTML;
        
        // Quotes based on director name
        const quotes = {
          'Nikita Marks': '"Its all about people. The best teams are diverse, passionate, and driven by our mission."',
          'Cristian Duncan': '"Working with talented individuals drives me. I love building high-performance teams."',
          'Cruz Hamer': '"Technology is just a tool. Its the people behind it that create real innovation."',
          'Drake Heaton': '"Relationships are the foundation of any successful business partnership."',
          'Griffin Wise': '"Strong brands arent built on products alone. Theyre built on stories and connections."'
        };
        
        // Set active state
        card.classList.add('active');
        
        // Set new content for active state
        card.innerHTML = `
          <h3>${name}</h3>
          <p class="quote">${quotes[name] || '"Empowered teams create truly amazing products. Set the north star and let them follow it."'}</p>
          <div class="social-icons">
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
          <button class="close-button">
            <i class="fa-solid fa-xmark"></i>
          </button>
        `;
        
        // Add event listener to new close button
        const closeButton = card.querySelector('.close-button');
        closeButton.addEventListener('click', function(e) {
          e.stopPropagation();
          card.classList.remove('active');
          card.innerHTML = card.dataset.originalContent;
          
          // Re-add event listener to restored plus button
          const newPlusButton = card.querySelector('.plus-button');
          if (newPlusButton) {
            newPlusButton.addEventListener('click', function() {
              plusButton.click();
            });
          }
        });
      });
    }
  });
  
  // Handle existing active cards
  const closeButtons = document.querySelectorAll('.close-button');
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.director-card');
      card.classList.remove('active');
    });
  });
  
  // Apply fade-in animations for elements
  function applyAnimations() {
    // Animate hero elements
    const heroElements = [
      document.querySelector('.hero-about h1'),
      document.querySelector('.red-line'),
      document.querySelector('.hero-text')
    ];
    
    heroElements.forEach((element, index) => {
      if (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
      }
    });
    
    // Animate director cards with staggered delay
    const directorCards = document.querySelectorAll('.director-card');
    directorCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 500 + (index * 100));
    });
    
    // Animate client logos with staggered delay
    const clientLogos = document.querySelectorAll('.client-logos img');
    clientLogos.forEach((logo, index) => {
      logo.style.opacity = '0';
      logo.style.transform = 'translateY(20px)';
      logo.style.transition = 'all 0.5s ease';
      
      setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'translateY(0)';
      }, 800 + (index * 100));
    });
  }
  
  // Run animations
  applyAnimations();
});