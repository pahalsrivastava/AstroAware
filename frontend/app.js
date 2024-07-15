import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [apodData, setApodData] = useState(null);
  const [error, setError] = useState(false);
  const apiKey = "YOUR_NASA_API_KEY";  // Replace with your actual API key
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setApodData(data);
        setError(false);
      })
      .catch(error => {
        console.error("Error fetching APOD:", error);
        setError(true);
      });
  }, [apiUrl]);

  return (
    <div className="App">
      <header>
        <h1>NASA Astronomy Picture of the Day</h1>
      </header>
      <main>
        <div id="apod">
          <div id="apod-image-container">
            {error || !apodData ? (
              <div className="fallback">
                <p>Failed to load the image. Please try again later.</p>
              </div>
            ) : (
              <img id="apod-image" src={apodData.url} alt={apodData.title} />
            )}
          </div>
          {apodData && (
            <div id="apod-content">
              <h2 id="apod-title">{apodData.title}</h2>
              <p id="apod-description">{apodData.explanation}</p>
            </div>
          )}
        </div>
      </main>
      <footer>
        <p>Powered by NASA's APOD API</p>
      </footer>
    </div>
  );
}

export default App;
