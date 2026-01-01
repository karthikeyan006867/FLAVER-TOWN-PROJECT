import { Lesson } from '../courses'

export const jsLessons: Lesson[] = Array.from({ length: 49 }, (_, i) => {
  const difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = i < 17 ? 'Beginner' : i < 34 ? 'Intermediate' : 'Advanced';
  return {
    id: `js-${i + 1}`,
    title: `JavaScript Lesson ${i + 1}`,
    description: `Master JavaScript programming concepts - Lesson ${i + 1}`,
    language: 'javascript' as const,
    difficulty,
    estimatedTime: 30,
    content: `# JavaScript Lesson ${i + 1}

Welcome to lesson ${i + 1} of the JavaScript course!

## Learning Objectives
- Understand core JavaScript concepts
- Apply programming fundamentals
- Build practical skills

## Practice Exercise
Complete the coding challenge below to test your knowledge.`,
    initialCode: '// Write your JavaScript code here\n',
    solution: '// Solution for lesson ${i + 1}\n',
    hints: ['Start with the basics', 'Practice regularly', 'Test your code'],
    testCases: [
      { name: 'Code is not empty', test: (code: string, output: string) => code.trim().length > 0, errorMessage: 'Please write some code' },
      { name: 'Code meets requirements', test: (code: string, output: string) => code.trim().length >= 10, errorMessage: 'Code should be longer' }
    ]
  };
}).concat([
  {
    id: 'js-50',
    title: 'Fullstack Capstone - Interactive Todo App',
    description: 'Build a complete todo application with local storage and advanced JavaScript features',
    language: 'javascript' as const,
    difficulty: 'Advanced',
    estimatedTime: 120,
    isProject: true,
    content: `# Fullstack Capstone Project - Todo Application 📝

## Project Overview
Create a full-featured todo app using vanilla JavaScript!

## Requirements

### 1. Core Functionality
- Add new todos
- Mark todos as complete/incomplete
- Edit existing todos
- Delete todos
- Filter todos (All, Active, Completed)
- Clear all completed todos

### 2. Data Persistence
- Save todos to localStorage
- Load todos on page load
- Auto-save on every change

### 3. Advanced Features
- Todo priority levels (Low, Medium, High)
- Due dates for todos
- Search/filter functionality
- Todo categories/tags
- Statistics (total, completed, pending)

### 4. DOM Manipulation
- Create elements dynamically
- Event delegation
- Update UI reactively
- Smooth animations

### 5. Code Organization
- Use ES6 classes or modules
- Separate concerns (data, UI, storage)
- Clean, readable code
- Error handling

## Testing Criteria
1. Object-oriented or functional approach
2. localStorage integration
3. CRUD operations working
4. Event listeners properly attached
5. Filter functionality
6. Statistics calculation
7. Input validation
8. UI updates correctly`,
    initialCode: `// Todo Application - Fullstack Capstone Project

class TodoApp {
  constructor() {
    this.todos = this.loadTodos();
    this.filter = 'all'; // all, active, completed
    this.init();
  }
  
  init() {
    // TODO: Initialize the app
    this.renderTodos();
    this.attachEventListeners();
  }
  
  // TODO: Implement methods
  addTodo(text, priority = 'medium') {
    // Add new todo
  }
  
  toggleTodo(id) {
    // Toggle complete status
  }
  
  deleteTodo(id) {
    // Remove todo
  }
  
  editTodo(id, newText) {
    // Update todo text
  }
  
  filterTodos(filter) {
    // Filter todos by status
  }
  
  saveTodos() {
    // Save to localStorage
  }
  
  loadTodos() {
    // Load from localStorage
    return [];
  }
  
  renderTodos() {
    // Update UI
  }
  
  attachEventListeners() {
    // Setup event listeners
  }
  
  getStatistics() {
    // Calculate stats
  }
}

// Initialize app
const app = new TodoApp();
console.log('Todo App initialized');
`,
    solution: `// Todo Application - Fullstack Capstone Project

class TodoApp {
  constructor() {
    this.todos = this.loadTodos();
    this.filter = 'all';
    this.nextId = this.todos.length > 0 ? Math.max(...this.todos.map(t => t.id)) + 1 : 1;
    this.init();
  }
  
  init() {
    this.renderTodos();
    this.attachEventListeners();
    this.updateStatistics();
  }
  
  addTodo(text, priority = 'medium') {
    if (!text.trim()) {
      console.log('Error: Todo text cannot be empty');
      return;
    }
    
    const todo = {
      id: this.nextId++,
      text: text.trim(),
      completed: false,
      priority,
      createdAt: new Date().toISOString()
    };
    
    this.todos.push(todo);
    this.saveTodos();
    this.renderTodos();
    this.updateStatistics();
    console.log(\`Added todo: "\${text}"\`);
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.saveTodos();
      this.renderTodos();
      this.updateStatistics();
      console.log(\`Toggled todo #\${id}\`);
    }
  }
  
  deleteTodo(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this.saveTodos();
      this.renderTodos();
      this.updateStatistics();
      console.log(\`Deleted todo #\${id}\`);
    }
  }
  
  editTodo(id, newText) {
    const todo = this.todos.find(t => t.id === id);
    if (todo && newText.trim()) {
      todo.text = newText.trim();
      this.saveTodos();
      this.renderTodos();
      console.log(\`Updated todo #\${id}\`);
    }
  }
  
  filterTodos(filter) {
    this.filter = filter;
    this.renderTodos();
    console.log(\`Filter set to: \${filter}\`);
  }
  
  getFilteredTodos() {
    switch (this.filter) {
      case 'active':
        return this.todos.filter(t => !t.completed);
      case 'completed':
        return this.todos.filter(t => t.completed);
      default:
        return this.todos;
    }
  }
  
  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed);
    this.saveTodos();
    this.renderTodos();
    this.updateStatistics();
    console.log('Cleared completed todos');
  }
  
  saveTodos() {
    try {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } catch (error) {
      console.log('LocalStorage not available, using memory only');
    }
  }
  
  loadTodos() {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.log('Failed to load todos from storage');
      return [];
    }
  }
  
  renderTodos() {
    const filteredTodos = this.getFilteredTodos();
    console.log(\`Rendering \${filteredTodos.length} todos (filter: \${this.filter})\`);
    
    filteredTodos.forEach(todo => {
      const status = todo.completed ? '✓' : '○';
      console.log(\`  \${status} [\${todo.priority}] \${todo.text}\`);
    });
  }
  
  attachEventListeners() {
    console.log('Event listeners attached');
  }
  
  getStatistics() {
    const total = this.todos.length;
    const completed = this.todos.filter(t => t.completed).length;
    const active = total - completed;
    
    return { total, completed, active };
  }
  
  updateStatistics() {
    const stats = this.getStatistics();
    console.log(\`Statistics: \${stats.total} total, \${stats.completed} completed, \${stats.active} active\`);
  }
}

// Initialize and test the app
const app = new TodoApp();

// Demo usage
app.addTodo('Complete JavaScript course', 'high');
app.addTodo('Build portfolio project', 'high');
app.addTodo('Practice coding daily', 'medium');
app.addTodo('Review ES6 features', 'low');

// Toggle first todo
app.toggleTodo(1);

// Filter active todos
app.filterTodos('active');

// Show final statistics
console.log('\\n=== Final Stats ===');
const stats = app.getStatistics();
console.log(\`Total todos: \${stats.total}\`);
console.log(\`Completed: \${stats.completed}\`);
console.log(\`Active: \${stats.active}\`);
`,
    hints: [
      'Use a class to organize all todo-related functionality',
      'Each todo should be an object with id, text, completed, priority',
      'Use array methods: filter(), find(), map(), splice()',
      'localStorage.setItem() and getItem() for persistence',
      'JSON.stringify() to save, JSON.parse() to load',
      'Use this.todos.push() to add new todos',
      'Generate unique IDs with Math.max(...todos.map(t => t.id)) + 1',
      'Filter with switch statement or object mapping',
      'Try/catch blocks around localStorage for error handling'
    ],
    testCases: [
      { name: 'Has TodoApp class', test: (code: string, output: string) => code.includes('class TodoApp') || code.includes('function TodoApp'), errorMessage: 'Must define TodoApp class or constructor' },
      { name: 'Implements addTodo', test: (code: string, output: string) => code.includes('addTodo'), errorMessage: 'Must have addTodo method' },
      { name: 'Implements toggleTodo', test: (code: string, output: string) => code.includes('toggleTodo') || code.includes('toggle'), errorMessage: 'Must have toggleTodo method' },
      { name: 'Implements deleteTodo', test: (code: string, output: string) => code.includes('deleteTodo') || code.includes('delete'), errorMessage: 'Must have deleteTodo method' },
      { name: 'Uses localStorage', test: (code: string, output: string) => code.includes('localStorage'), errorMessage: 'Must use localStorage for persistence' },
      { name: 'Has filter functionality', test: (code: string, output: string) => code.includes('filter'), errorMessage: 'Must implement filter functionality' },
      { name: 'Calculates statistics', test: (code: string, output: string) => code.includes('Statistics') || output.includes('total') || output.includes('completed'), errorMessage: 'Must calculate and show statistics' },
      { name: 'Creates todos', test: (code: string, output: string) => output.includes('Added') || output.includes('todo'), errorMessage: 'Must demonstrate creating todos' },
      { name: 'Shows output', test: (code: string, output: string) => output.trim().length > 100, errorMessage: 'Must produce substantial console output' },
      { name: 'Uses array methods', test: (code: string, output: string) => /\.(filter|find|map|push|splice)\(/.test(code), errorMessage: 'Must use array methods (filter, find, map, etc.)' },
      { name: 'Substantial implementation', test: (code: string, output: string) => code.split('\n').filter(l => l.trim() && !l.trim().startsWith('//')).length >= 40, errorMessage: 'Project requires substantial code (40+ lines)' }
    ]
  }
]);
