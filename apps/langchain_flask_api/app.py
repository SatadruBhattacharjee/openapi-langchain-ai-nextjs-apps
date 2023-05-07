from flask import Flask
app = Flask(__name__)

#print("Flask version: " + Flask.__version__)

@app.route("/")
def home():
    return "Hello, Flask! "