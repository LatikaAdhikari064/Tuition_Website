// Optional: Scroll animations for form/section
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

    inputs.forEach(input => {
        const defaultValue = input.placeholder;
        input.addEventListener('focus', () => {
            if(input.value === '') input.placeholder = '';
        });
        input.addEventListener('blur', () => {
            if(input.value === '') input.placeholder = defaultValue;
        });
    });
});
const items = document.querySelectorAll('.timeline-item');

function checkAnimation() {
  const triggerBottom = window.innerHeight * 0.85;

  items.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;

    if(itemTop < triggerBottom) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);
