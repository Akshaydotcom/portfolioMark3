document.querySelector('.hamburger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden')
  });

window.innerWidth>900?
    document.getElementById('mobile-nav').classList.add('hidden')
    :document.getElementById('main-nav').classList.add('hidden')