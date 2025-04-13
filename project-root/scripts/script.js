document.addEventListener('DOMContentLoaded', () => {
  const mainDiv     = document.getElementById('main');
  const contactDiv  = document.getElementById('contact');
  //const btnFooter   = document.getElementById('contactBtn');
  const linkHome    = document.getElementById('homeLink');
  const linkContact = document.getElementById('contactLink');

  function setActiveLink(activeLink) {
    [linkHome, linkContact].forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
  }

  function showMain() {
    mainDiv.style.display    = 'block';
    contactDiv.style.display = 'none';
    setActiveLink(linkHome);
  }

  function showContact() {
    mainDiv.style.display    = 'none';
    contactDiv.style.display = 'block';
    setActiveLink(linkContact);
  }

  //btnFooter.addEventListener('click', showContact);

  linkHome.addEventListener('click', (e) => {
    e.preventDefault(); 
    showMain();
  });

  linkContact.addEventListener('click', (e) => {
    e.preventDefault();
    showContact();
  });

  // Sayfa yüklendiğinde kontrol (opsiyonel)
  if (window.location.hash === '#contact') {
    showContact();
  } else {
    showMain();
  }
});
