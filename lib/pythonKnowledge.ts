export interface PythonKnowledgeSource {
  name: string
  url: string
  description: string
  topics: string[]
}

export const pythonKnowledgeSources: PythonKnowledgeSource[] = [
  {
    name: 'Python.org Documentation',
    url: 'https://docs.python.org/3/',
    description: 'The authoritative language reference, standard library, and beginner tutorial.',
    topics: ['syntax', 'standard library', 'reference', 'errors'],
  },
  {
    name: 'GeeksforGeeks Python',
    url: 'https://www.geeksforgeeks.org/python/',
    description: 'Broad tutorials, examples, data structures, algorithms, and project ideas.',
    topics: ['beginner', 'data structures', 'algorithms', 'projects', 'full stack'],
  },
  {
    name: 'Python Packaging User Guide',
    url: 'https://packaging.python.org/',
    description: 'Trusted guidance for virtual environments, packaging, dependencies, and publishing.',
    topics: ['venv', 'pip', 'packaging', 'deployment'],
  },
  {
    name: 'Real Python',
    url: 'https://realpython.com/',
    description: 'Practical explanations and project-oriented Python learning articles.',
    topics: ['examples', 'oop', 'testing', 'web', 'projects'],
  },
  {
    name: 'Django Documentation',
    url: 'https://docs.djangoproject.com/en/stable/',
    description: 'Official documentation for production Python web development with Django.',
    topics: ['django', 'web', 'orm', 'security', 'full stack'],
  },
  {
    name: 'Flask Documentation',
    url: 'https://flask.palletsprojects.com/',
    description: 'Official lightweight Python web framework documentation.',
    topics: ['flask', 'web', 'api', 'full stack'],
  },
  {
    name: 'pytest Documentation',
    url: 'https://docs.pytest.org/',
    description: 'Practical reference for Python testing, fixtures, and readable test suites.',
    topics: ['testing', 'pytest', 'quality'],
  },
]

export function getPythonKnowledgeSources(code: string, errorType?: string) {
  const text = `${code} ${errorType || ''}`.toLowerCase()
  const ranked = pythonKnowledgeSources
    .map(source => ({
      source,
      score: source.topics.reduce((score, topic) => score + (text.includes(topic) ? 1 : 0), 0),
    }))
    .sort((left, right) => right.score - left.score)

  const selected = ranked.filter(item => item.score > 0).slice(0, 4).map(item => item.source)
  return selected.length > 0 ? selected : pythonKnowledgeSources.slice(0, 4)
}
