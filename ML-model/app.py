#Flask integration
from flask import Flask
from routes.events import events_bp
from routes.weather import weather_bp
from routes.image_processing import image_processing_bp

app = Flask(__name__)

app.register_blueprint(events_bp, url_prefix='/events')
app.register_blueprint(weather_bp, url_prefix='/weather')
app.register_blueprint(image_processing_bp, url_prefix='/process-image')

if __name__ == '__main__':
    app.run(debug=True)
