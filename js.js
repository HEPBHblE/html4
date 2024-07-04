document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Скрыть содержание';
            } else {
                content.style.display = 'none';
                button.textContent = 'Показать содержание';
            }
        });
    });
});
