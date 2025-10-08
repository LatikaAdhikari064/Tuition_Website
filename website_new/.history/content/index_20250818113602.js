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
