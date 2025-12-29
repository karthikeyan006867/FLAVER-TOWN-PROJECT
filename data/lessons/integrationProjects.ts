import { Lesson } from '../courses'

export const integrationProjects: Lesson[] = [
  {
    id: 'integration-1',
    title: 'HTML + CSS: Landing Page',
    description: 'Build a responsive landing page',
    content: `# Project: Responsive Landing Page

Combine HTML and CSS to create a professional landing page.

## Requirements:
1. **HTML Structure:**
   - Header with navigation
   - Hero section with call-to-action button
   - Features section (3 cards)
   - Footer with social links

2. **CSS Styling:**
   - Flexbox for layout
   - Responsive design (mobile-first)
   - Hover effects on buttons
   - Color scheme and typography

## Skills Applied:
- Semantic HTML (header, nav, main, footer)
- CSS Flexbox
- Media queries
- CSS transitions

Create a complete, responsive landing page!`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 60,
    isProject: true,
    projectDescription: 'Responsive landing page with HTML + CSS',
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <style>
        /* Add your CSS here */
    </style>
</head>
<body>
    <!-- Add your HTML here -->
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeMaster - Learn to Code</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            color: #333;
        }

        header {
            background: #1a202c;
            color: white;
            padding: 1rem 2rem;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #4299e1;
        }

        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 6rem 2rem;
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
        }

        .cta-button {
            background: #4299e1;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: transform 0.3s, background 0.3s;
        }

        .cta-button:hover {
            background: #3182ce;
            transform: translateY(-2px);
        }

        .features {
            padding: 4rem 2rem;
            background: #f7fafc;
        }

        .features h2 {
            text-align: center;
            margin-bottom: 3rem;
        }

        .cards {
            display: flex;
            gap: 2rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .card {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 300px;
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h3 {
            color: #667eea;
            margin-bottom: 1rem;
        }

        footer {
            background: #1a202c;
            color: white;
            text-align: center;
            padding: 2rem;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
        }

        .social-links a {
            color: white;
            text-decoration: none;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .cards {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <h2>CodeMaster</h2>
            <ul class="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>Learn to Code Today</h1>
        <p>Master HTML, CSS, JavaScript, and Python from scratch to full-stack</p>
        <button class="cta-button">Start Learning</button>
    </section>

    <section class="features" id="features">
        <h2>Why Choose Us?</h2>
        <div class="cards">
            <div class="card">
                <h3>Interactive Lessons</h3>
                <p>Learn by doing with hands-on coding exercises and projects.</p>
            </div>
            <div class="card">
                <h3>Expert Instructors</h3>
                <p>Learn from industry professionals with years of experience.</p>
            </div>
            <div class="card">
                <h3>Lifetime Access</h3>
                <p>Get unlimited access to all courses and future updates.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 CodeMaster Academy. All rights reserved.</p>
        <div class="social-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
        </div>
    </footer>
</body>
</html>`,
    hints: [
      'Use semantic HTML5 tags',
      'Flexbox for card layout',
      'Add hover transitions',
      'Mobile-first responsive design'
    ]    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'integration-2',
    title: 'HTML + CSS + JS: Interactive Quiz',
    description: 'Build a quiz app with scoring',
    content: `# Project: Interactive Quiz App

Combine HTML, CSS, and JavaScript!

## Requirements:
1. **HTML:** Quiz structure with questions and answer buttons
2. **CSS:** Styled quiz cards, buttons, score display
3. **JavaScript:**
   - Display one question at a time
   - Check answers
   - Calculate score
   - Show results

## Features:
- Multiple choice questions
- Next button to proceed
- Score tracking
- Results screen with percentage

## Skills Applied:
- DOM manipulation
- Event listeners
- Conditional logic
- Array iteration
- CSS transitions

Build a complete quiz application!`,
    language: 'html',
    difficulty: 'Intermediate',
    estimatedTime: 75,
    isProject: true,
    projectDescription: 'Interactive quiz with HTML, CSS, JS',
    initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <style>
        /* Add your CSS */
    </style>
</head>
<body>
    <div id="quiz-container">
        <!-- Quiz UI here -->
    </div>

    <script>
        // Add your JavaScript
    </script>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
        }

        #quiz-container {
            background: white;
            border-radius: 10px;
            padding: 2rem;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        h2 {
            color: #667eea;
            margin-bottom: 1.5rem;
        }

        .question {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: #333;
        }

        .answers {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .answer-btn {
            background: #f7fafc;
            border: 2px solid #e2e8f0;
            padding: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
            text-align: left;
        }

        .answer-btn:hover {
            background: #edf2f7;
            border-color: #667eea;
        }

        .answer-btn.correct {
            background: #48bb78;
            color: white;
            border-color: #48bb78;
        }

        .answer-btn.incorrect {
            background: #f56565;
            color: white;
            border-color: #f56565;
        }

        #next-btn {
            background: #667eea;
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            display: none;
        }

        #next-btn:hover {
            background: #5a67d8;
        }

        .score {
            text-align: center;
            font-size: 1.5rem;
            color: #333;
        }

        .restart-btn {
            background: #48bb78;
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <div id="quiz-container">
        <h2>JavaScript Quiz</h2>
        <div id="quiz"></div>
    </div>

    <script>
        const quizData = [
            {
                question: "What does HTML stand for?",
                answers: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Home Tool Markup Language",
                    "Hyperlinks and Text Markup Language"
                ],
                correct: 0
            },
            {
                question: "Which CSS property controls text size?",
                answers: [
                    "text-size",
                    "font-style",
                    "font-size",
                    "text-style"
                ],
                correct: 2
            },
            {
                question: "What does DOM stand for?",
                answers: [
                    "Document Object Model",
                    "Data Object Model",
                    "Document Oriented Model",
                    "Digital Object Management"
                ],
                correct: 0
            },
            {
                question: "Which method adds an element to the end of an array?",
                answers: [
                    "add()",
                    "append()",
                    "push()",
                    "insert()"
                ],
                correct: 2
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        const quizContainer = document.getElementById('quiz');

        function loadQuestion() {
            const question = quizData[currentQuestion];
            
            let html = \`
                <div class="question">\${currentQuestion + 1}. \${question.question}</div>
                <div class="answers">
            \`;

            question.answers.forEach((answer, index) => {
                html += \`
                    <button class="answer-btn" onclick="checkAnswer(\${index})">
                        \${answer}
                    </button>
                \`;
            });

            html += \`
                </div>
                <button id="next-btn" onclick="nextQuestion()">Next Question</button>
            \`;

            quizContainer.innerHTML = html;
        }

        function checkAnswer(selected) {
            const question = quizData[currentQuestion];
            const buttons = document.querySelectorAll('.answer-btn');
            
            buttons.forEach((btn, index) => {
                btn.disabled = true;
                if (index === question.correct) {
                    btn.classList.add('correct');
                } else if (index === selected) {
                    btn.classList.add('incorrect');
                }
            });

            if (selected === question.correct) {
                score++;
            }

            document.getElementById('next-btn').style.display = 'block';
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            const percentage = (score / quizData.length * 100).toFixed(0);
            quizContainer.innerHTML = \`
                <div class="score">
                    <h2>Quiz Complete!</h2>
                    <p>You scored \${score} out of \${quizData.length}</p>
                    <p>\${percentage}%</p>
                    <button class="restart-btn" onclick="restartQuiz()">Restart Quiz</button>
                </div>
            \`;
        }

        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            loadQuestion();
        }

        loadQuestion();
    </script>
</body>
</html>`,
    hints: [
      'Store questions in array of objects',
      'Use template literals for HTML',
      'Track currentQuestion and score',
      'Disable buttons after selection'
    ]    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  },
  {
    id: 'integration-3',
    title: 'Full-Stack: Python Flask API + JS Frontend',
    description: 'Build a task manager with backend',
    content: `# Project: Full-Stack Task Manager

Create a complete full-stack application!

## Backend (Python Flask):
\`\`\`python
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/api/tasks', methods=['POST'])
def add_task():
    task = request.json
    tasks.append(task)
    return jsonify(task), 201

@app.route('/api/tasks/<int:index>', methods=['DELETE'])
def delete_task(index):
    if 0 <= index < len(tasks):
        tasks.pop(index)
        return '', 204
    return 'Not found', 404

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

## Frontend (HTML + JS):
- Fetch API to call backend
- Display tasks from server
- Add new tasks via POST
- Delete tasks via DELETE

## Skills Applied:
- Flask REST API
- CORS configuration
- HTTP methods (GET, POST, DELETE)
- Fetch API with async/await
- JSON data handling
- Frontend-backend integration

Build both sides and connect them!`,
    language: 'python',
    difficulty: 'Advanced',
    estimatedTime: 90,
    isProject: true,
    projectDescription: 'Full-stack task manager with Flask + JS',
    initialCode: `# Python Backend (app.py)
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Add your routes here

if __name__ == '__main__':
    app.run(debug=True)`,
    solution: `# BACKEND: app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/api/tasks', methods=['POST'])
def add_task():
    task = request.json
    task['id'] = len(tasks)
    tasks.append(task)
    return jsonify(task), 201

@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [t for t in tasks if t['id'] != task_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True, port=5000)


# FRONTEND: index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 2rem auto;
            padding: 1rem;
        }
        
        #task-input {
            width: 70%;
            padding: 0.5rem;
            font-size: 1rem;
        }
        
        #add-btn {
            padding: 0.5rem 1rem;
            background: #667eea;
            color: white;
            border: none;
            cursor: pointer;
        }
        
        .task {
            background: #f7fafc;
            padding: 1rem;
            margin: 0.5rem 0;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .delete-btn {
            background: #f56565;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <h1>Task Manager</h1>
    <div>
        <input type="text" id="task-input" placeholder="Enter task...">
        <button id="add-btn">Add Task</button>
    </div>
    <div id="tasks-list"></div>

    <script>
        const API_URL = 'http://localhost:5000/api/tasks';

        async function loadTasks() {
            const response = await fetch(API_URL);
            const tasks = await response.json();
            
            const tasksList = document.getElementById('tasks-list');
            tasksList.innerHTML = '';
            
            tasks.forEach(task => {
                const taskEl = document.createElement('div');
                taskEl.className = 'task';
                taskEl.innerHTML = \`
                    <span>\${task.text}</span>
                    <button class="delete-btn" onclick="deleteTask(\${task.id})">Delete</button>
                \`;
                tasksList.appendChild(taskEl);
            });
        }

        async function addTask() {
            const input = document.getElementById('task-input');
            const text = input.value.trim();
            
            if (!text) return;
            
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });
            
            input.value = '';
            loadTasks();
        }

        async function deleteTask(id) {
            await fetch(\`\${API_URL}/\${id}\`, {
                method: 'DELETE'
            });
            loadTasks();
        }

        document.getElementById('add-btn').addEventListener('click', addTask);
        document.getElementById('task-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });

        loadTasks();
    </script>
</body>
</html>`,
    hints: [
      'Run Flask on port 5000',
      'Use CORS to allow frontend access',
      'Fetch API with async/await',
      'Send JSON in POST requests'
    ]    ,
    testCases: [
      {
        name: 'Code is not empty',
        test: (code) => code.trim().length > 0,
        errorMessage: 'Please write some code to complete this lesson'
      },
      {
        name: 'Code meets requirements',
        test: (code) => code.trim().length >= 10,
        errorMessage: 'Write code following the lesson requirements'
      }
    ]
  }
];
