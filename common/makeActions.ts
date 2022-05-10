const makeAction = (type: string, payload?: unknown) => {
  return {
    type: type,
    payload: payload,
  }
}
export { makeAction }
