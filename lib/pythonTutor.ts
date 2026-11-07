import { getPythonKnowledgeSources } from './pythonKnowledge'

export type PythonTutorSeverity = 'error' | 'warning' | 'tip' | 'success'

export interface PythonTutorFinding {
  severity: PythonTutorSeverity
  title: string
  explanation: string
  suggestion: string
  line?: number
}

export interface PythonTutorAnalysis {
  predictedIssue: string
  confidence: number
  summary: string
  findings: PythonTutorFinding[]
  outputMatchesExpected: boolean | null
  checkedLines: number
  knowledgeSources: Array<{
    name: string
    url: string
    description: string
  }>
  teacherMode: string
  modelCount: number
  question?: string
}

type TrainingExample = {
  features: number[]
  label: number
}

const LABELS = [
  'syntax or indentation error',
  'name or type error',
  'input or runtime error',
  'wrong or missing output',
  'healthy Python program',
]

const sigmoid = (value: number) => 1 / (1 + Math.exp(-value))

const dot = (left: number[], right: number[]) =>
  left.reduce((total, value, index) => total + value * right[index], 0)

const featuresFor = (code: string, output: string, errorType?: string): number[] => {
  const text = `${code}\n${output}\n${errorType || ''}`.toLowerCase()
  return [
    /\bsyntaxerror\b|invalid syntax/.test(text) ? 1 : 0,
    /\bindentationerror\b|unexpected indent|expected an indented block/.test(text) ? 1 : 0,
    /\bnameerror\b|is not defined/.test(text) ? 1 : 0,
    /\btypeerror\b|unsupported operand|not subscriptable/.test(text) ? 1 : 0,
    /\bvalueerror\b|could not convert|invalid literal/.test(text) ? 1 : 0,
    /\bindexerror\b|\bkeyerror\b|\bzerodivisionerror\b/.test(text) ? 1 : 0,
    /\btraceback\b|\berror\b/.test(text) ? 1 : 0,
    code.includes('print(') ? 1 : 0,
    output.trim().length > 0 && !/\b(error|traceback)\b/i.test(output) ? 1 : 0,
    code.trim().length > 0 ? 1 : 0,
  ]
}

class MiniPythonANN {
  private readonly hiddenWeights: number[][]
  private readonly outputWeights: number[][]
  private readonly hiddenBias: number[]
  private readonly outputBias: number[]

  constructor(inputSize: number, hiddenSize: number, outputSize: number, seed: number) {
    this.hiddenWeights = Array.from({ length: hiddenSize }, (_, row) =>
      Array.from({ length: inputSize }, (_, column) =>
        (((row + 1) * (column + 3) * (seed + 1)) % 17 - 8) / 24,
      ),
    )
    this.outputWeights = Array.from({ length: outputSize }, (_, row) =>
      Array.from({ length: hiddenSize }, (_, column) =>
        (((row + 2) * (column + 1) * (seed + 3)) % 19 - 9) / 24,
      ),
    )
    this.hiddenBias = Array(hiddenSize).fill(0)
    this.outputBias = Array(outputSize).fill(0)
  }

  private forward(features: number[]) {
    const hidden = this.hiddenWeights.map((weights, index) =>
      sigmoid(dot(weights, features) + this.hiddenBias[index]),
    )
    const output = this.outputWeights.map((weights, index) =>
      sigmoid(dot(weights, hidden) + this.outputBias[index]),
    )
    return { hidden, output }
  }

  train(examples: TrainingExample[], epochs = 300, learningRate = 0.35) {
    for (let epoch = 0; epoch < epochs; epoch += 1) {
      for (const example of examples) {
        const { hidden, output } = this.forward(example.features)
        const targets = output.map((_, index) => (index === example.label ? 1 : 0))
        const outputDelta = output.map((value, index) => (targets[index] - value) * value * (1 - value))

        const hiddenDelta = hidden.map((value, hiddenIndex) => {
          const error = this.outputWeights.reduce(
            (total, weights, outputIndex) => total + weights[hiddenIndex] * outputDelta[outputIndex],
            0,
          )
          return error * value * (1 - value)
        })

        this.outputWeights.forEach((weights, outputIndex) => {
          weights.forEach((_, hiddenIndex) => {
            weights[hiddenIndex] += learningRate * outputDelta[outputIndex] * hidden[hiddenIndex]
          })
          this.outputBias[outputIndex] += learningRate * outputDelta[outputIndex]
        })

        this.hiddenWeights.forEach((weights, hiddenIndex) => {
          weights.forEach((_, inputIndex) => {
            weights[inputIndex] += learningRate * hiddenDelta[hiddenIndex] * example.features[inputIndex]
          })
          this.hiddenBias[hiddenIndex] += learningRate * hiddenDelta[hiddenIndex]
        })
      }
    }
  }

  predict(features: number[]) {
    const probabilities = this.forward(features).output
    const labelIndex = probabilities.reduce(
      (best, value, index) => (value > probabilities[best] ? index : best),
      0,
    )
    return { label: LABELS[labelIndex], confidence: Math.round(probabilities[labelIndex] * 100) / 100 }
  }

  predictScores(features: number[]) {
    return this.forward(features).output
  }
}

const trainingTexts: Array<[string, string, string | undefined, number]> = [
  ['if True print("x")', 'SyntaxError: invalid syntax', 'SyntaxError', 0],
  ['if True:\nprint("x")', 'IndentationError: expected an indented block', 'IndentationError', 0],
  ['print(total)', "NameError: name 'total' is not defined", 'NameError', 1],
  ['print("a" + 2)', 'TypeError: can only concatenate str', 'TypeError', 1],
  ['print(int("abc"))', 'ValueError: invalid literal', 'ValueError', 2],
  ['items = []\nprint(items[0])', 'IndexError: list index out of range', 'IndexError', 2],
  ['print(answer)', 'wrong output', undefined, 3],
  ['print("Hello")', 'Hello', undefined, 4],
]

const trainingExamples = trainingTexts.map(([code, output, errorType, label]) => ({
  features: featuresFor(code, output, errorType),
  label,
}))

const tutorAgents = Array.from({ length: 200 }, (_, index) => ({
  name: `Python Analyst ${index + 1}`,
  model: new MiniPythonANN(10, 7 + (index % 6), LABELS.length, index + 1),
}))

tutorAgents.forEach(({ model }, index) => {
  model.train(trainingExamples, 180 + (index % 5) * 20, 0.22 + (index % 4) * 0.03)
})

const normalizeOutput = (value: string) => value.trim().replace(/\r\n/g, '\n').replace(/[ \t]+/g, ' ')

export function analyzePythonRun({
  code,
  output,
  expectedOutput,
  errorLine,
  errorType,
  errorMessage,
  question,
}: {
  code: string
  output: string
  expectedOutput?: string
  errorLine?: number
  errorType?: string
  errorMessage?: string
  question?: string
}): PythonTutorAnalysis {
  const features = featuresFor(code, output, errorType)
  const ensembleScores = Array(LABELS.length).fill(0)
  tutorAgents.forEach(agent => {
    agent.model.predictScores(features).forEach((score, labelIndex) => {
      ensembleScores[labelIndex] += score
    })
  })
  ensembleScores.forEach((_, labelIndex) => {
    ensembleScores[labelIndex] /= tutorAgents.length
  })
  const ensembleLabelIndex = ensembleScores.reduce(
    (best, value, index) => (value > ensembleScores[best] ? index : best),
    0,
  )
  const prediction = {
    label: LABELS[ensembleLabelIndex],
    confidence: Math.round(ensembleScores[ensembleLabelIndex] * 100) / 100,
  }
  const findings: PythonTutorFinding[] = []
  const normalizedOutput = normalizeOutput(output)
  const normalizedExpected = expectedOutput ? normalizeOutput(expectedOutput) : ''
  const outputMatchesExpected = expectedOutput
    ? normalizedOutput.includes(normalizedExpected)
    : null
  const checkedLines = code.split('\n').length
  const failed = Boolean(errorType || /\b(traceback|error)\b/i.test(output))
  const mixedIndentLine = code.split('\n').findIndex(line => /^\t+ +|^ +\t+/.test(line))

  if (mixedIndentLine >= 0 && !failed) {
    findings.push({
      severity: 'warning',
      title: `Mixed indentation on line ${mixedIndentLine + 1}`,
      explanation: 'This line mixes tabs and spaces. It may work in one editor but fail with an IndentationError elsewhere.',
      suggestion: 'Convert indentation to four spaces and keep the same indentation level for every line in the block.',
      line: mixedIndentLine + 1,
    })
  }

  if (failed) {
    const line = errorLine
    const type = errorType || prediction.label
    const message = errorMessage || 'Python reported an execution error.'
    const explanations: Record<string, [string, string]> = {
      SyntaxError: [
        'Python could not parse the statement. Check punctuation, quotes, parentheses, and colons.',
        'Read the highlighted line and the line immediately before it; syntax errors often start just before the marker.',
      ],
      IndentationError: [
        'Python uses indentation to define blocks, so this block does not have the indentation Python expects.',
        'Use four spaces consistently after if, for, while, def, class, try, and with statements.',
      ],
      NameError: [
        'The program references a variable or function before it has been defined.',
        'Define it first, check spelling and capitalization, and keep it in the correct scope.',
      ],
      TypeError: [
        'The operation received values of incompatible types.',
        'Inspect each value with type(value), then convert explicitly with str(), int(), float(), or list() when appropriate.',
      ],
      ValueError: [
        'The value has the right general type but an invalid format or range.',
        'Validate the input before converting it and provide a helpful fallback for invalid values.',
      ],
    }
    const [explanation, suggestion] = explanations[type] || [
      'Python stopped while executing this program.',
      'Use the traceback line, inspect the values involved, and reproduce the smallest failing example.',
    ]
    findings.push({
      severity: 'error',
      title: `${type}${line ? ` on line ${line}` : ''}`,
      explanation: `${message}. ${explanation}`,
      suggestion,
      line,
    })
  } else if (outputMatchesExpected === false) {
    findings.push({
      severity: 'warning',
      title: 'Output does not match the expected result',
      explanation: `The program ran, but its output did not contain "${expectedOutput}". This is a logic or formatting issue, not a Python runtime failure.`,
      suggestion: 'Compare the expected value with each print statement and trace the variables immediately before output.',
    })
  } else if (!normalizedOutput || /no output/i.test(normalizedOutput)) {
    findings.push({
      severity: 'warning',
      title: 'The program produced no visible result',
      explanation: 'The code may have run, but there is no useful printed result to verify.',
      suggestion: 'Print the value requested by the exercise, or return it from a function and print the returned value.',
    })
  } else {
    findings.push({
      severity: 'success',
      title: 'Python executed successfully',
      explanation: `The interpreter checked all ${checkedLines} source lines and returned output without a traceback.`,
      suggestion: 'Keep improving by testing an edge case and simplifying any repeated logic.',
    })
  }

  if (!/\b(def|class|for|while|if|try|with|import|print|return)\b/.test(code)) {
    findings.push({
      severity: 'tip',
      title: 'Make the code easier to learn from',
      explanation: 'The program is very small, so the tutor cannot infer much of its intent.',
      suggestion: 'Use descriptive names and add one focused example or comment explaining the decision being made.',
    })
  }

  return {
    predictedIssue: prediction.label,
    confidence: prediction.confidence,
    summary: failed
      ? 'The tutor found an execution problem and explained the likely cause below.'
      : outputMatchesExpected === false
        ? 'The script executed, but the result needs a logic correction.'
        : 'The script executed and the tutor reviewed its output.',
    findings,
    outputMatchesExpected,
    checkedLines,
    knowledgeSources: getPythonKnowledgeSources(code, errorType).map(source => ({
      name: source.name,
      url: source.url,
      description: source.description,
    })),
    teacherMode: 'Python Master Full-Stack Tutor · 200-agent local ANN ensemble',
    modelCount: tutorAgents.length,
    question,
  }
}
