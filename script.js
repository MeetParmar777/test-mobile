const cursor = document.querySelector("#cursor");
const cursorPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});



const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active'); // Animate icon
    navMenu.classList.toggle('active');   // Show/hide menu
});
