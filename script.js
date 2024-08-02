document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
        
        arrow.style.transform = accordionContent.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});
