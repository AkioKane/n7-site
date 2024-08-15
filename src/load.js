window.addEventListener('load', () => {
  const background = document.querySelector('.main');
  background.classList.add('loaded');
  setTimeout(function() {
    document.body.classList.remove("load-scroll")
  }, 500)
});