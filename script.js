document.addEventListener('DOMContentLoaded', async () => {
    const headlineElement = document.getElementById('headline');
    const subtextElement = document.getElementById('subtext');
    const buttonElement = document.getElementById('join-button');

    try {
        const response = await fetch('http://localhost:3000/api/hero');
        if (!response.ok) {
            throw new Error('No Network response');
        }
        const data = await response.json();
        headlineElement.textContent = data.headline;
        subtextElement.textContent = data.subtext;
        buttonElement.textContent = data.ctaLabel;

        
        buttonElement.addEventListener('click', () => {
            
            window.location.href = 'myprofile.html'; 
        });

    } catch (error) {
        console.error('Error Loading Content:', error);
        headlineElement.textContent = 'Error';
        subtextElement.textContent = '';
        buttonElement.textContent = '';
    }
});
