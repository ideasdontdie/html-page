document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const body = accordion.nextElementSibling;

            if (body) {
                body.classList.toggle('active');
                const isActive = body.classList.contains('active');
                const chevron = accordion.querySelector('i');
                if (chevron) {
                    chevron.style.transform = isActive ? 'rotate(90deg)' : 'rotate(0deg)';
                }
            }
        });
    });
});