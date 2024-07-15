document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "RRiEhLzmnj6KbDfgc0E1OcOShB70BNtiwR2wXJfV";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${RRiEhLzmnj6KbDfgc0E1OcOShB70BNtiwR2wXJfV}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById("apod-image").src = data.url;
            document.getElementById("apod-title").textContent = data.title;
            document.getElementById("apod-description").textContent = data.explanation;
        })
        .catch(error => console.error("Error fetching APOD:", error));
});
