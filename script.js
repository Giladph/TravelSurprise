document.getElementById('drawButton').addEventListener('click', drawDestination);

const destinations = [
    { name: 'Budapest, Hungary', image: 'https://lp-cms-production.imgix.net/2023-03/GettyRF_473481530.jpg', message: 'Prepare for an unforgettable journey to Budapest, Hungary!' }, // Replace with a valid image URL
    { name: 'Prague, Czech Republic', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/1920px-Prague_%286365119737%29.jpg', message: 'Get ready to explore the enchanting city of Prague, Czech Republic!' } // Replace with a valid image URL
];

function drawDestination() {
    const resultImage = document.getElementById('resultImage');
    const resultText = document.getElementById('resultText');
    const countdown = document.getElementById('countdown');
    const drawButton = document.getElementById('drawButton');

    drawButton.disabled = true;
    countdown.innerText = '3';

    setTimeout(() => {
        countdown.innerText = '2';
        setTimeout(() => {
            countdown.innerText = '1';
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * destinations.length);
                const destination = destinations[randomIndex];
                
                resultImage.src = destination.image;
                resultImage.style.display = 'block';
                resultText.innerText = destination.message;
                
                drawButton.disabled = false;
                countdown.innerText = '';
            }, 1000);
        }, 1000);
    }, 1000);
}
