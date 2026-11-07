export interface LocalModelStatus {
  configured: boolean
  modelName: string
  modelPath: string | null
  runtime: string
  message: string
}

export function getLocalModelStatus(): LocalModelStatus {
  const modelPath = process.env.PYTHON_TUTOR_MODEL_PATH?.trim() || null
  const runtime = process.env.PYTHON_TUTOR_MODEL_RUNTIME?.trim() || 'built-in-ann'

  if (!modelPath) {
    return {
      configured: false,
      modelName: 'Built-in Python Tutor',
      modelPath: null,
      runtime,
      message: 'Using the built-in local ANN tutor. Add a local model path to enable a future Qwen/llama.cpp adapter.',
    }
  }

  return {
    configured: true,
    modelName: process.env.PYTHON_TUTOR_MODEL_NAME?.trim() || 'Custom local model',
    modelPath,
    runtime,
    message: 'A local model is configured. A compatible runtime adapter is required before it can replace the built-in tutor.',
  }
}
