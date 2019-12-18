// Extracting a Custom Hook
// When we want to share logic between two JavaScript functions,
// we extract it to a third function. Both components and Hooks are functions,
// so this works for them too!
// A custom Hook is a JavaScript function whose name starts with ”use” and
// that may call other Hooks.
import React, { useState } from "react"

export default function useInput(defaultValue, fn, errMsg) {
  const [val, setVal] = useState(defaultValue)
  const [valError, setValError] = useState("")

  return [val, setVal, valError, setValError]
}
