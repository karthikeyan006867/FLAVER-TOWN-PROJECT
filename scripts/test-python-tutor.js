const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')

const sourcePath = path.join(__dirname, '..', 'lib', 'pythonTutor.ts')
const source = fs.readFileSync(sourcePath, 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText
const outputPath = path.join('/tmp', `pythonTutor-${process.pid}.cjs`)
fs.writeFileSync(outputPath, compiled)

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

  console.log('Python tutor checks passed: syntax, output mismatch, and success analysis.')
} finally {
  fs.unlinkSync(outputPath)
}
