const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(el => el.classList.remove('active'));
    this.classList.add('active');
  });
});