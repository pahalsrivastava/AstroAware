document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_NASA_API_KEY';  // Replace with your NASA API key
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('apod-image').src = data.url;
            document.getElementById('apod-title').textContent = data.title;
            document.getElementById('apod-description').textContent = data.explanation;
        })
        .catch(error => console.error('Error fetching data:', error));
});
