document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const body = accordion.nextElementSibling;
            const isActive = body.classList.contains('active');
            
            if (body) {
                body.classList.toggle('active');
                const chevron = accordion.querySelector('i');
                if (chevron) {
                    chevron.style.transform = isActive ? 'rotate(0deg)' : 'rotate(90deg)';
                }
                
                if (body.classList.contains('active')) {
                    body.style.maxHeight = body.scrollHeight + 'px';
                } else {
                    body.style.maxHeight = '0px';
                }
            }
        });
    });
});
