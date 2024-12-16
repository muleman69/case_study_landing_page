document.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-content img');
  if (heroImage) {
    heroImage.style.transform = `perspective(1000px) rotateY(-15deg) translateY(${scrolled * 0.1}px)`;
  }
});



