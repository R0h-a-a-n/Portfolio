from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/skills', methods=['GET'])
def get_skills():
    skills = [
        {"name": "C", "level": "Advanced"},
        {"name": "C++", "level": "Advanced"},
        {"name": "Python", "level": "Advanced"},
        {"name": "JavaScript", "level": "Beginner"},
        {"name": "Machine Learning", "level": "Intermediate"},
        {"name": "MySQL", "level": "Intermediate"},
        {"name": "Docker", "level": "Intermediate"},
        {"name": "Git", "level": "Advanced"}
    ]
    return jsonify(skills)

@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = [
        {"name": "Focus", "description": "App/site blocker in Python for blocking distractions"},
        {"name": "Browser Monitor", "description": "Kills active tab on Firefox if certain keywords are detected in the URL"},
        {"name": "Metamaster", "description": "Tool for reading, modifying, and deleting metadata from files"}
    ]
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True)
