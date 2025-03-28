from flask import Flask, render_template, request, redirect
from flask_socketio import SocketIO

app = Flask(__name__)

Server = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    Server.run(app, host="localhost", port=80, debug=True)