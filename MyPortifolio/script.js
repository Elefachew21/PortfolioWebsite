function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  }

  const currentYear = new Date().getFullYear();

  const yearElement = document.getElementById('year');

  yearElement.textContent = currentYear;
  yearElement.setAttribute('datetime', currentYear);
