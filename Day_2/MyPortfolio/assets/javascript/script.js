document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-menu'); 
  const mobileMenu = document.querySelector('.mobile-menu');   

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('d-none');
  });
});
