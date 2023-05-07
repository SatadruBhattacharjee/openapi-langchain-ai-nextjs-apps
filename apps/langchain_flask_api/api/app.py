from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask! "

@app.route("/ingest")
def home():
    return "Hello, Flask! Ingest"