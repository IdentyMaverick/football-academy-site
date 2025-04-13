document.addEventListener('DOMContentLoaded', () => {
    const mainDiv    = document.getElementById('main');
    const contactDiv = document.getElementById('contact');
    const btnFooter  = document.getElementById('contactBtn');
    const linkHome   = document.getElementById('homeLink');
    const linkContact= document.getElementById('contactLink');
  
    function showMain() {
      mainDiv.style.display    = 'block';
      contactDiv.style.display = 'none';
    }
    function showContact() {
      mainDiv.style.display    = 'none';
      contactDiv.style.display = 'block';
    }
  
    btnFooter.addEventListener('click', showContact);
    
    linkHome.addEventListener('click', (e) => {
      e.preventDefault(); 
      showMain();
    });
    linkContact.addEventListener('click', (e) => {
      e.preventDefault();
      showContact();
    });
  });
  