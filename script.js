const solveButton = document.querySelector("button")
const equationInput = document.querySelector("#equation")
const outputTextbox = document.querySelector("#results")

equationInput.addEventListener("input", (e) => {
  e.preventDefault()

  equationCalculator()
})

function equationCalculator() {
  const userInput = equationInput.value
  // const arithmeticSymbols =
  outputTextbox.textContent = userInput
}
