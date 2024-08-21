window.addEventListener('load', () => {
  const background = document.querySelector('.main');
  background.classList.add('loaded');
  background.style.opacity = "1"
  setTimeout(function() {
    document.body.classList.remove("load-scroll")
  }, 1000)
});
