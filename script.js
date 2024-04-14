function calculate(operator) {
  let num1 = parseFloat(document.getElementById('num1').value)
  let num2 = parseFloat(document.getElementById('num2').value)
  let result

  switch (operator) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      if (num2 !== 0) {
        result = num1 / num2
      } else {
        result = 'Error: Division by zero'
      }
      break
    default:
      result = 'Invalid operator'
  }

  document.getElementById('result').innerText = `Result: ${result}`
}
