// BlinkPay Animation Utilities
window.BlinkAnimations = {
  // Hero section animations
  initHero: function(selector) {
    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set(`${selector} .modern-hero__tag, ${selector} .modern-hero__title, ${selector} .modern-hero__subtitle, ${selector} .modern-hero__buttons, ${selector} .modern-hero__stats`, {
      opacity: 0,
      y: 20
    });
    
    gsap.set(`${selector} .modern-hero__image`, {
      opacity: 0,
      x: 30
    });
    
    gsap.set(`${selector} .modern-hero__badge`, {
      opacity: 0,
      scale: 0.8
    });
    
    // Animation sequence
    tl.to(`${selector} .modern-hero__tag`, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    })
    .to(`${selector} .modern-hero__title`, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3')
    // ... other animations
    
    return tl;
  },
  
  // Button hover effects
  initButtonHovers: function(selector) {
    // Button hover animations
    gsap.utils.toArray(`${selector} .modern-hero__button`).forEach(button => {
      button.addEventListener('mouseenter', function() {
        gsap.to(this, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
      
      button.addEventListener('mouseleave', function() {
        gsap.to(this, {
          scale: 1,
          duration: 0.3,
          ease: 'power1.out'
        });
      });
    });
    
    // Arrow hover animation
    const secondaryButton = document.querySelector(`${selector} .modern-hero__button--secondary`);
    if (secondaryButton) {
      const arrow = secondaryButton.querySelector('.modern-hero__arrow');
      if (arrow) {
        secondaryButton.addEventListener('mouseenter', function() {
          gsap.to(arrow, {
            x: 5,
            duration: 0.3,
            ease: 'power1.inOut'
          });
        });
        
        secondaryButton.addEventListener('mouseleave', function() {
          gsap.to(arrow, {
            x: 0,
            duration: 0.3,
            ease: 'power1.inOut'
          });
        });
      }
    }
  }
  
  // Add other component animations as needed
};
