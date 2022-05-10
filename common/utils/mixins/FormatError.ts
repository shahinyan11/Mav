function formatError(errorData: object) {
  const key = Object.keys(errorData).find((e) => errorData[e].fullMessage)
  return errorData[key]?.fullMessage || 'Something went wrong'
}

export { formatError }
