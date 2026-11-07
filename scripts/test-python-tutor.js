const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')

const sourcePath = path.join(__dirname, '..', 'lib', 'pythonTutor.ts')
const knowledgeSource = fs.readFileSync(path.join(__dirname, '..', 'lib', 'pythonKnowledge.ts'), 'utf8')
const source = fs.readFileSync(sourcePath, 'utf8')
const compilerOptions = {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}
const outputPath = path.join('/tmp', `pythonTutor-${process.pid}.js`)
const knowledgePath = path.join('/tmp', 'pythonKnowledge.js')
fs.writeFileSync(outputPath, ts.transpileModule(source, compilerOptions).outputText)
fs.writeFileSync(knowledgePath, ts.transpileModule(knowledgeSource, compilerOptions).outputText)

try {
  const { analyzePythonRun } = require(outputPath)
  const syntaxFailure = analyzePythonRun({
    code: 'if True print("x")',
    output: 'SyntaxError: invalid syntax',
    errorType: 'SyntaxError',
    errorLine: 1,
    errorMessage: 'invalid syntax',
  })
  if (syntaxFailure.findings[0].severity !== 'error' || syntaxFailure.findings[0].line !== 1) {
    throw new Error('Syntax errors must produce a line-aware error finding')
  }

  const outputFailure = analyzePythonRun({
    code: 'print(2 + 2)',
    output: '5',
    expectedOutput: '4',
  })
  if (outputFailure.outputMatchesExpected !== false || outputFailure.findings[0].severity !== 'warning') {
    throw new Error('Wrong output must produce a warning')
  }

  const healthyRun = analyzePythonRun({
    code: 'print(2 + 2)',
    output: '4',
    expectedOutput: '4',
  })
  if (healthyRun.outputMatchesExpected !== true || healthyRun.findings[0].severity !== 'success') {
    throw new Error('Correct output must produce a success finding')
  }
  if (
    healthyRun.teacherMode !== 'Python Master Full-Stack Tutor · 3-agent local ANN ensemble' ||
    healthyRun.knowledgeSources.length < 3
  ) {
    throw new Error('Tutor must expose ensemble mode and linked knowledge sources')
  }

  console.log('Python tutor checks passed: syntax, output mismatch, and success analysis.')
} finally {
  fs.unlinkSync(outputPath)
  fs.unlinkSync(knowledgePath)
}
