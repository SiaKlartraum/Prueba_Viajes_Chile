document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 50, 
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
  
