from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Root route
@app.route('/')
def home():
    return "Welcome to Rohaan's Portfolio Backend API! Use /api/projects or /api/skills to fetch data."

# API for Projects
@app.route('/api/projects', methods=['GET'])
def projects():
    return jsonify([
        {"name": "Focus", "description": "App/site blocker in Python for blocking distractions", "link": ""},
        {"name": "Browser Monitor", "description": "Kills active tab on Firefox if certain keywords are detected in the URL", "link": ""},
        {"name": "Metamaster", "description": "Tool for reading, modifying, and deleting metadata from files", "link": ""}
    ])

# API for Skills
@app.route('/api/skills', methods=['GET'])
def skills():
    return jsonify([
        {"name": "C", "level": "Advanced"},
        {"name": "C++", "level": "Advanced"},
        {"name": "Python", "level": "Advanced"},
        {"name": "JavaScript", "level": "Beginner"},
        {"name": "Machine Learning", "level": "Intermediate"},
        {"name": "MySQL", "level": "Intermediate"},
        {"name": "Docker", "level": "Intermediate"},
        {"name": "Git", "level": "Advanced"}
    ])

if __name__ == '__main__':
    app.run(debug=True)
